import { userMock } from '@/data/constants/userMock'
import { useForm } from '@/hooks/useForm'
import { User } from '@/logic/core/interfaces/user'
import { TextInput } from '@mantine/core'
import { use, useEffect } from 'react'
import { SectionForm } from '../template/SectionForm'
import Text from '@/logic/utils/text'
import Cpf from '@/logic/utils/cpf'
import Phone from '@/logic/utils/phone'
import { useUser } from '@/hooks/useUser'

export default function UserForm() {
  const { user, updateUser } = useUser()
  const { data, onChangeField, setData } = useForm<User>()

  const save = async () => {
    if (!user) return
    await updateUser(data)
  }

  useEffect(() => {
    if (!user) return

    setData(user)
  }, [user, setData])

  return (
    <div className="flex flex-col gap-5 mt-7">
      <SectionForm
        title="Seu nome"
        description="Como você gostaria de ser chamado?"
        footerMessage="O nome deve possuir entre 3 e 80 caracteres, mais que isso já é um texto!"
        canSave={Text.between(data.name, 3, 80)}
        save={save}
      >
        <TextInput value={data.name} onChange={onChangeField('name')} />
      </SectionForm>

      <SectionForm
        title="CPF"
        description="Seu CPF é usado internamente pelo sistema."
        footerMessage="Pode relaxar, daqui ele não sai!"
        canSave={true}
        save={save}
      >
        <TextInput
          value={Cpf.format(data.cpf ?? '')}
          onChange={onChangeField('cpf', Cpf.unformat)}
        />
      </SectionForm>
      <SectionForm
        title="Telefone"
        description="Usado para notificações importantes sobre a sua conta."
        footerMessage="Se receber ligação a cobrar, não foi a gente!"
        canSave={true}
        save={save}
      >
        <TextInput
          value={Phone.format(data.phone ?? '')}
          onChange={onChangeField('phone', Phone.unformat)}
        />
      </SectionForm>
    </div>
  )
}
