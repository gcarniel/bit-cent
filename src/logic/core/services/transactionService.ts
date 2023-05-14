import Collection from '@/logic/firebase/db/Collection'
import { Transaction } from '../interfaces/transaction'
import { User } from '../interfaces/user'

export class TransactionService {
  private _collection = new Collection()

  async save(transaction: Transaction, user: User) {
    return this._collection.save(
      `finances/${user.email}/transactions`,
      transaction,
    )
  }

  async get(user: User) {
    return this._collection.search(
      `finances/${user.email}/transactions`,
      'date',
      'desc',
    )
  }

  async delete(transaction: Transaction, user: User) {
    return this._collection.delete(
      `finances/${user.email}/transactions`,
      transaction.id,
    )
  }
}
