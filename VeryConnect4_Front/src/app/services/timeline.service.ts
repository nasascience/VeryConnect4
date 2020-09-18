import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject, Subscriber } from 'rxjs'
import { IMessage, IReplyRequest } from '../interfaces/message'
import { LoadingService } from '../services/loading.service'

@Injectable({
  providedIn: 'root'
})

export class TimelineService {
  private fakeData: IMessage[] = []
  baseUrl: string = 'http://localhost:1337/'
  constructor(
    private http: HttpClient,
    private loadingSvc: LoadingService,
    /*@Inject('BASE_URL') private baseUrl: string*/) { }

  private userNameSource = new BehaviorSubject<string>("Dannan Solis")
  currentUserName = this.userNameSource.asObservable()

  private messagesSource = new BehaviorSubject<IMessage[]>([])
  currentMessages = this.messagesSource.asObservable()

  changeUserName(name: string) {
    this.userNameSource.next(name)
  }

  getMessages() {
    this.loadingSvc.showLoader()
      this.http.get<IMessage[]>
        (this.baseUrl + `messages`).subscribe(data => {
          this.messagesSource.next(data)
          this.loadingSvc.hideLoader()
        })
  }

  getMessageById(id: string): Observable<IMessage>{
      return this.http.get<IMessage>
        (this.baseUrl + `messages/${id}`)
  }

  sendMessage(message: IMessage): Observable<IMessage> {
    return this.http.post<IMessage>
      (this.baseUrl + `messages`, message)
  }

  sendReply(id: string, reply: IReplyRequest): Observable<IMessage> {
    return this.http.patch<IMessage>
      (this.baseUrl + `messages/${id}`, reply)
  }

  updateMessagesList(messages: IMessage[]) {
    this.messagesSource.next(messages)
  }

  getLocalMessages() {
    this.fakeData = [
      {
        id: "1",
        avatarId: 1,
        userName: "Johan Perez",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        replies: [
          {
            id: "1_1",
            avatarId: 2,
            userName: "Svetlana Tovar",
            body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. ",
            createdAt: 1600299434153,
            updatedAt: 1600299434153
          },
          {
            id: "1_2",
            avatarId: 4,
            userName: "Cosme Amaya",
            body: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. ",
            createdAt: 1600299483137,
            updatedAt: 1600299483137
          }
        ],
        createdAt: 1600297152928,
        updatedAt: 1600297152928
      },
      {
        id: "3",
        userName: "Christopher Daniel",
        avatarId: 1,
        body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. ",
        replies: [],
        createdAt: 1600299483137,
        updatedAt: 1600299483137
      },
      {
        id: "4",
        userName: "Sarah Brithgmann",
        avatarId: 5,
        body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ",
        replies: [
          {
            id: "4_1",
            avatarId: 6,
            userName: "Karla Perez",
            body: "Debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et magna aliqua. ",
            createdAt: 1600299434153,
            updatedAt: 1600299434153
          },
        ],
        createdAt: 1600328567240,
        updatedAt: 1600328567240
      },
    ]
    this.messagesSource.next(this.fakeData)

  }
}
