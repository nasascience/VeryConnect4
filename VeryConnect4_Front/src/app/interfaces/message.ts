export interface IMessage {
  _id?: string
  userName: string
  body: string
  replies?: IMessage[]
  createdAt?: number
  updatedAt?: number
  avatarId: number
}
