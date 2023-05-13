import { Area } from '../commom/Area'
import Benefit from './Benefit'

import vantagem1 from '../../../../public/vantagem-1.jpg'
import vantagem2 from '../../../../public/vantagem-2.jpg'
import vantagem3 from '../../../../public/vantagem-3.jpg'

export function Benefits() {
  return (
    <Area id="vantagens" className="bg-black py-16 sm:py-36">
      <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
        <Benefit
          image={vantagem1}
          title="Gerenciador financeiro completo e simples de usar"
          subtitle="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
        />
        <Benefit
          image={vantagem2}
          title="Organizado para você nunca mais esquecer uma conta"
          subtitle="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
          reverse
        />
        <Benefit
          image={vantagem3}
          title="Ideal para planejamento financeiro"
          subtitle="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
        />
      </div>
    </Area>
  )
}
