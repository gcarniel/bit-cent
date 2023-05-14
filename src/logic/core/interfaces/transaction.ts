export interface Transaction {
  id?: string
  description: string
  value: number
  date: Date
  type: TransactionType
}

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export const emptyTransaction = {
  description: '',
  value: 0,
  date: new Date(),
  type: TransactionType.EXPENSE,
}
