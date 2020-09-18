export interface IMessage {
  id?: string
  userName: string
  body: string
  replies?: IMessage[]
  createdAt?: number
  updatedAt?: number
  avatarId: number
}

export interface IReplyRequest{
  replies?: IMessage[]
}
