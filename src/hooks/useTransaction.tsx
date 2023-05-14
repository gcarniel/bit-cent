import { Transaction } from '@/logic/core/interfaces/transaction'
import { useCallback, useEffect, useState } from 'react'
import { useUser } from './useUser'
import services from '@/logic/core/services'

export type displayType = 'list' | 'grid'

export function useTransaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [date, setDate] = useState<Date>(new Date())
  const [transaction, setTransaction] = useState<Transaction | null>(null)
  const [displayType, setDisplayType] = useState<displayType>('list')

  const { user } = useUser()

  const getTransaction = useCallback(async () => {
    if (!user) return

    const transactionsBd = await services.transaction.getByMonth(user, date)

    setTransactions(transactionsBd)
  }, [user, date])

  const save = async (transaction: Transaction) => {
    if (!user) return

    await services.transaction.save(transaction, user)

    setTransaction(null)

    await getTransaction()
  }

  const remove = async (transaction: Transaction) => {
    if (!user) return

    await services.transaction.delete(transaction, user)

    setTransaction(null)
    await getTransaction()
  }

  useEffect(() => {
    getTransaction()
  }, [getTransaction, date])

  return {
    transaction,
    transactions,
    save,
    remove,
    select: setTransaction,
    date,
    setDate,
    displayType,
    setDisplayType,
  }
}
