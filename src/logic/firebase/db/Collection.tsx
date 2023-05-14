import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  OrderByDirection,
  query,
  QueryConstraint,
  setDoc,
  WhereFilterOp,
  where,
} from 'firebase/firestore'
import { app } from '../config/app'
import { Id } from '@/logic/core/shared/Id'

export interface Filter {
  field: string
  operator: WhereFilterOp
  value: any
}

export default class Collection {
  async save(path: string, entity: any, id?: string): Promise<any> {
    const db = getFirestore(app)
    const finalId = id ?? entity.id ?? Id.new()
    const docRef = doc(db, path, finalId)
    await setDoc(docRef, entity)

    return {
      ...entity,
      id: entity.id ?? finalId,
    }
  }

  async delete(path: string, id?: string): Promise<boolean> {
    if (!id) return false
    const db = getFirestore(app)
    const docRef = doc(db, path, id)
    const item = await getDoc(docRef)
    if (!item.exists()) return false
    await deleteDoc(docRef)
    return true
  }

  async search(
    path: string,
    orderByField?: string,
    direction?: OrderByDirection,
  ): Promise<any[]> {
    const db = getFirestore(app)
    const collectionRef = collection(db, path)
    const filter: QueryConstraint[] = []
    const ordenation = orderByField ? [orderBy(orderByField, direction)] : []
    const queryResult = query(collectionRef, ...filter, ...ordenation)
    const result = await getDocs(queryResult)
    return result.docs.map(this._transformOfFirebase) ?? []
  }

  async searchById(path: string, id: string): Promise<any> {
    if (!id) return null
    const db = getFirestore(app)
    const docRef = doc(db, path, id)
    const result = await getDoc(docRef)
    return this._transformOfFirebase(result)
  }

  async searchWithFilters(
    path: string,
    filters: Filter[],
    orderByField?: string,
    direction?: OrderByDirection,
  ): Promise<any[]> {
    const db = getFirestore(app)
    const collectionRef = collection(db, path)

    const whereFilters =
      filters?.map((f) => where(f.field, f.operator, f.value)) ?? []
    const ordenation = orderByField ? [orderBy(orderByField, direction)] : []

    const queryResult = query(collectionRef, ...whereFilters, ...ordenation)
    const result = await getDocs(queryResult)
    return result.docs.map(this._transformOfFirebase) ?? []
  }

  private _transformOfFirebase(snapshot: DocumentSnapshot<DocumentData>) {
    if (!snapshot.exists()) return null
    const entity: any = { ...snapshot.data(), id: snapshot.id }
    if (!entity) return entity
    return Object.keys(entity).reduce((obj: any, field: string) => {
      const value: any = entity[field]
      return { ...obj, [field]: value.toDate?.() ?? value }
    }, {})
  }
}
