import { Content } from '../template/Content'
import Header from '../template/Header'
import { Page } from '../template/Page'
import { List } from './List'
import { emptyTransaction } from '@/logic/core/interfaces/transaction'
import { FinanceForm } from './Form'
import { NotFound } from '../template/NotFound'
import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useTransaction } from '@/hooks/useTransaction'

export function PageFinance() {
  const { transaction, transactions, remove, save, select } = useTransaction()

  return (
    <Page>
      <Header />
      <Content className="gap-5">
        <Button
          className="bg-blue-500 w-56"
          leftIcon={<IconPlus />}
          onClick={() => select(emptyTransaction)}
        >
          Nova Transação
        </Button>

        {transactions.length === 0 && <NotFound>Nada</NotFound>}

        {transaction ? (
          <FinanceForm
            transaction={transaction}
            remove={remove}
            save={save}
            cancel={() => select(null)}
          />
        ) : (
          <List transactions={transactions} selectTransaction={select} />
        )}
      </Content>
    </Page>
  )
}
