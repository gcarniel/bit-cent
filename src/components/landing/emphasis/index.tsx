import { Area } from '../commom/Area'
import ResponsiveImage from '../commom/ResponsiveImage'
import { Slogan } from './Slogan'
import principal from '../../../../public/principal.jpg'

export function Emphasis() {
  return (
    <Area id="inicio" className="pt-20">
      <div
        className={`flex items-center justify-around h-[500px]

      `}
      >
        <Slogan />
        <ResponsiveImage
          imagem={principal}
          className="rotate-3 hidden md:inline"
        />
      </div>
    </Area>
  )
}
