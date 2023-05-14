import { TransactionService } from './transactionService'
import { UserService } from './userService'

class Services {
  get transaction() {
    return new TransactionService()
  }

  get user() {
    return new UserService()
  }
}

const services = new Services()

export default services
