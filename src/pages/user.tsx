import { Content } from '@/components/template/Content'
import Header from '@/components/template/Header'
import { PageTitle } from '@/components/template/PageTitle'
import { Page } from '@/components/template/page'
import UserForm from '@/components/user/Form'
import { IconForms } from '@tabler/icons-react'

export default function User() {
  return (
    <Page>
      <Header />
      <Content>
        <PageTitle
          title="Dados cadastrais"
          subtitle="Informações do usuário"
          icon={<IconForms />}
        />
        Usuario
        <UserForm />
      </Content>
    </Page>
  )
}
