import Collection from '@/logic/firebase/db/Collection'
import { Transaction } from '../interfaces/transaction'
import { User } from '../interfaces/user'
import DateFormatter from '@/logic/utils/date'

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

  async getByMonth(user: User, date: Date) {
    return this._collection.searchWithFilters(
      `finances/${user.email}/transactions`,
      [
        { field: 'date', operator: '>=', value: DateFormatter.firstDay(date) },
        { field: 'date', operator: '<=', value: DateFormatter.lastDay(date) },
      ],
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
