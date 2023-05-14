import { Transaction } from '@/logic/core/interfaces/transaction'
import { use, useEffect, useState } from 'react'
import { useUser } from './useUser'
import services from '@/logic/core/services'
import { Id } from '@/logic/core/shared/Id'

export function useTransaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const [transaction, setTransaction] = useState<Transaction | null>(null)

  const { user } = useUser()

  const getAll = async () => {
    if (!user) return

    const transactionsBd = await services.transaction.get(user)

    setTransactions(transactionsBd)
  }

  const save = async (transaction: Transaction) => {
    if (!user) return

    await services.transaction.save(transaction, user)

    setTransaction(null)

    await getAll()
  }

  const remove = async (transaction: Transaction) => {
    if (!user) return

    await services.transaction.delete(transaction, user)

    setTransaction(null)
    await getAll()
  }

  useEffect(() => {
    getAll()
  }, [])

  return {
    transaction,
    transactions,
    save,
    remove,

    select: setTransaction,
  }
}
