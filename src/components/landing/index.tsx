import { Page } from '../template/page'
import { Benefits } from './benefits'
import { Depositions } from './depositions'
import { Emphasis } from './emphasis'
import { Footer } from './footer'
import { Header } from './header'

export function Landing() {
  return (
    <Page external>
      <Header />
      <Emphasis />
      <Benefits />
      <Depositions />
      <Footer />
    </Page>
  )
}
