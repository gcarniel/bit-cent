import 'dayjs/locale/pt-br'
import { Button, Group, Radio, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import {
  Transaction,
  TransactionType,
} from '@/logic/core/interfaces/transaction'
import Money from '@/logic/utils/money'
import { useForm } from '@/hooks/useForm'

interface FinanceFormProps {
  transaction: Transaction
  save?: (transaction: Transaction) => void
  remove?: (transaction: Transaction) => void
  cancel?: () => void
}

export function FinanceForm({
  transaction,
  cancel,
  save,
  remove,
}: FinanceFormProps) {
  const { data, onChangeField } = useForm<Transaction>(transaction)

  return (
    <div
      className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}
    >
      <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
      <div className="flex flex-col gap-4 p-4 sm:p-7">
        <TextInput
          label="Descrição"
          value={data?.description}
          onChange={onChangeField('description')}
        />
        <TextInput
          label="Valor"
          value={Money.format(data.value)}
          onChange={onChangeField('value', Money.unformat)}
        />
        <DatePickerInput
          label="Data"
          value={data.date}
          locale="pt-BR"
          valueFormat="DD/MM/YYYY"
          onChange={onChangeField('date')}
        />
        <Radio.Group value={data.type} onChange={onChangeField('type')}>
          <Group>
            <Radio value={TransactionType.INCOME} label="Receita" />
            <Radio value={TransactionType.EXPENSE} label="Despesa" />
          </Group>
        </Radio.Group>
      </div>
      <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
        <Button
          className="bg-green-500"
          color="green"
          onClick={() => save?.(data)}
        >
          Salvar
        </Button>
        <Button className="bg-zinc-500" color="gray" onClick={cancel}>
          Voltar
        </Button>
        <div className="flex-1"></div>
        {data.id && (
          <Button
            className="bg-red-500"
            color="red"
            onClick={() => remove?.(data)}
          >
            Excluir
          </Button>
        )}
      </div>
    </div>
  )
}
