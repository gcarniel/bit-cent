import { useState } from 'react'
import { Content } from '../template/Content'
import Header from '../template/Header'
import { Page } from '../template/page'
import { List } from './List'
import transactionsMock from '@/data/constants/transactionMock'
import {
  Transaction,
  emptyTransaction,
} from '@/logic/core/interfaces/transaction'
import { FinanceForm } from './Form'
import { NotFound } from '../template/NotFound'
import { Id } from '@/logic/core/shared/Id'
import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

export function PageFinance() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(transactionsMock)

  const [transaction, setTransaction] = useState<Transaction | null>(null)

  const save = (transaction: Transaction) => {
    const oldTransactions = transactions.filter(
      (trans) => trans.id !== transaction.id,
    )

    setTransactions([
      ...oldTransactions,
      {
        ...transaction,
        id: transaction.id ?? Id.new(),
      },
    ])
    setTransaction(null)
  }

  const remove = (transaction: Transaction) => {
    const oldTransactions = transactions.filter(
      (trans) => trans.id !== transaction.id,
    )
    setTransactions(oldTransactions)
    setTransaction(null)
  }

  return (
    <Page>
      <Header />
      <Content className="gap-5">
        <Button
          className="bg-blue-500 w-56"
          leftIcon={<IconPlus />}
          onClick={() => setTransaction(emptyTransaction)}
        >
          Nova Transação
        </Button>

        {transactions.length === 0 && <NotFound>Nada</NotFound>}

        {transaction ? (
          <FinanceForm
            transaction={transaction}
            remove={remove}
            save={save}
            cancel={() => setTransaction(null)}
          />
        ) : (
          <List
            transactions={transactions}
            selectTransaction={setTransaction}
          />
        )}
      </Content>
    </Page>
  )
}
