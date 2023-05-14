import { Content } from '../template/Content'
import Header from '../template/Header'
import { Page } from '../template/Page'
import { List } from './List'
import { emptyTransaction } from '@/logic/core/interfaces/transaction'
import { FinanceForm } from './Form'
import { NotFound } from '../template/NotFound'
import { Button, SegmentedControl } from '@mantine/core'
import { IconLayoutGrid, IconList, IconPlus } from '@tabler/icons-react'
import { displayType, useTransaction } from '@/hooks/useTransaction'
import { DateSelect } from '../template/DateSelect'
import Grid from './Grid'

export function PageFinance() {
  const {
    transaction,
    transactions,
    remove,
    save,
    select,
    date,
    setDate,
    setDisplayType,
    displayType,
  } = useTransaction()

  function renderButtons() {
    return (
      <div className="flex justify-between">
        <DateSelect date={date} changeDate={setDate} />

        <div className="flex gap-5">
          <Button
            className="bg-blue-500 w-56"
            leftIcon={<IconPlus />}
            onClick={() => select(emptyTransaction)}
          >
            Nova Transação
          </Button>

          <SegmentedControl
            data={[
              { label: <IconList />, value: 'list' },
              { label: <IconLayoutGrid />, value: 'grid' },
            ]}
            onChange={(type) => setDisplayType(type as displayType)}
          />
        </div>
      </div>
    )
  }

  function renderDisplay() {
    return displayType === 'list' ? (
      <List transactions={transactions} selectTransaction={select} />
    ) : (
      <Grid transactions={transactions} selectTransaction={select} />
    )
  }

  return (
    <Page>
      <Header />
      <Content className="gap-5">
        {renderButtons()}
        {transactions.length === 0 && <NotFound>Nada por aqui</NotFound>}
        {transaction ? (
          <FinanceForm
            transaction={transaction}
            remove={remove}
            save={save}
            cancel={() => select(null)}
          />
        ) : (
          renderDisplay()
        )}
      </Content>
    </Page>
  )
}
