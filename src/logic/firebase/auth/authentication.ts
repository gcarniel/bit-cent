import { User } from '@/logic/core/interfaces/user'
import {
  Auth,
  GoogleAuthProvider,
  getAuth,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth'
import { app } from '../config/app'

export type ObserverUser = (user: User | null) => void
export type Unsubscribe = () => void

export class Authentication {
  private _auth: Auth

  constructor() {
    this._auth = getAuth(app)
  }

  async loginGoogle(): Promise<User | null> {
    const resp = await signInWithPopup(this._auth, new GoogleAuthProvider())

    return this.transformerUser(resp.user)
  }

  async logout(): Promise<void> {
    await signOut(this._auth)
  }

  observer(notify: ObserverUser): Unsubscribe {
    return onIdTokenChanged(this._auth, async (firebaseUser) => {
      const user = this.transformerUser(firebaseUser)
      notify(user)
    })
  }

  private transformerUser(firebaseUser: FirebaseUser | null): User | null {
    if (!firebaseUser?.email) return null
    const alternativeName = firebaseUser.email!.split('@')[0]

    return {
      id: firebaseUser.uid,
      name: firebaseUser.displayName ?? alternativeName,
      email: firebaseUser.email,
      imageUrl: firebaseUser.photoURL,
    }
  }
}
