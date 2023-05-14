import {
  Authentication,
  ObserverUser,
  Unsubscribe,
} from '@/logic/firebase/auth/authentication'
import Collection from '@/logic/firebase/db/Collection'
import { User } from '../interfaces/user'

export class UserService {
  private _authentication = new Authentication()
  private _collection = new Collection()

  async loginGoogle() {
    const user = await this._authentication.loginGoogle()

    if (!user) return null

    let userDb = await this.getUserByEmail(user.email)
    if (!userDb) {
      userDb = await this.save(user)
    }

    return { ...user, ...userDb }
  }

  logout(): Promise<void> {
    return this._authentication.logout()
  }

  async save(user: User) {
    return await this._collection.save('users', user, user.email)
  }

  async getUserByEmail(email: string) {
    return await this._collection.searchById('users', email)
  }

  observerUser(notify: ObserverUser): Unsubscribe {
    return this._authentication.observer(async (user) => {
      notify(
        user ? { ...user, ...(await this.getUserByEmail(user.email)) } : null,
      )
    })
  }
}
