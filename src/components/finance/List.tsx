import {
  Transaction,
  TransactionType,
} from '@/logic/core/interfaces/transaction'
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'
import DateFormatter from '@/logic/utils/date'
import Money from '@/logic/utils/money'

interface ListProps {
  transactions: Transaction[]
  selectTransaction?: (Transaction: Transaction) => void
}

export function List({ transactions, selectTransaction }: ListProps) {
  function renderType(transaction: Transaction) {
    return (
      <span
        className={`
                flex justify-center items-center 
                h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full
                ${
                  transaction.type === TransactionType.INCOME
                    ? 'bg-green-500'
                    : 'bg-red-500'
                }
            `}
      >
        {transaction.type === TransactionType.INCOME ? (
          <IconTrendingUp />
        ) : (
          <IconTrendingDown />
        )}
      </span>
    )
  }

  function renderRow(transaction: Transaction, indice: number) {
    return (
      <div
        key={transaction.id}
        className={`
                flex items-center gap-3 p-3 cursor-pointer
                ${indice % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}
            `}
        onClick={() => selectTransaction?.(transaction)}
      >
        {renderType(transaction)}
        <span className="w-full md:w-1/2">{transaction.description}</span>
        <span className="hidden md:inline flex-1">
          {DateFormatter.ddmmyy.format(transaction.date)}
        </span>
        <span>{Money.format(transaction.value)}</span>
      </div>
    )
  }

  return (
    <div
      className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}
    >
      {transactions.map(renderRow)}
    </div>
  )
}
