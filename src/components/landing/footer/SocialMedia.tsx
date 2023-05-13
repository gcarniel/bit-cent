import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons-react'
import { SocialNetwork } from './SocialNetwork'

export function SocialMedia() {
  return (
    <div className="flex">
      <SocialNetwork
        icon={<IconBrandYoutube />}
        url="https://www.youtube.com/@cod3r"
      />
      <SocialNetwork
        icon={<IconBrandInstagram />}
        url="https://www.instagram.com/cod3rcursos"
      />
      <SocialNetwork
        icon={<IconBrandFacebook />}
        url="https://www.facebook.com/cod3rcursos/"
      />
      <SocialNetwork
        icon={<IconBrandGithub />}
        url="https://github.com/cod3rcursos"
      />
    </div>
  )
}
