import { User } from '@/logic/core/interfaces/user'
import { Id } from '@/logic/core/shared/Id'

export const userMock = {
  id: Id.new(),
  name: 'Dunha da Silva',
  email: 'dunha@gmail.com',
  imageUrl: null,
} as User
