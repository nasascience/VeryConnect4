import { Component, OnInit, Input } from '@angular/core';
import { IMessage, IReplyRequest } from '../../interfaces/message'
import { SortByPipe } from '../../pipes/sort-by.pipe'
import { FriendlyDatePipe } from '../../pipes/friendly-date.pipe'
import { TimelineService } from '../../services/timeline.service'
import { AlertsService } from '../../services/alerts.service'
import { LoadingService } from '../../services/loading.service'

declare var $: any

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  newReply: string = ""
  localUserName: string = ""
  allMessagesRef: IMessage[] = []
  // Message
  public _message: IMessage
  @Input('message')
  public set message(value: IMessage) {
    this._message = value;
  }
  public get message(): IMessage {
    return this._message;
  }

  // AvatarId
  public _avatarId: number
  @Input('avatarId')
  public set avatarId(value: number) {
    this._avatarId = value;
  }
  public get avatarId(): number {
    return this._avatarId;
  }

  constructor(
    private timelineSvc: TimelineService,
    private alertsSvc: AlertsService,
    private loadingSvc: LoadingService) { }

  ngOnInit(): void {
    this.timelineSvc.currentUserName.pipe().subscribe(u => { this.localUserName = u })
    this.timelineSvc.currentMessages.pipe().subscribe(d => {this.allMessagesRef = d})
  }

  postReply() {
    if(this.newReply == ""){
      this.alertsSvc.showDanger(`Please make sure you have written a reply`)
      return
    }

    this.loadingSvc.showLoader()

    let newReplyObj: IMessage = {
      id: this.uniqueID(),
      userName: this.localUserName,
      body: this.newReply,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      avatarId: this.avatarId
    }

    // Get Updated Replies before pushing
    this.timelineSvc.getMessageById(this.message.id).pipe()
      .subscribe(data => {
        let msg = data

        if (msg.replies != null) {
          msg.replies.push(newReplyObj)
        }
        else {
          msg.replies = []
          msg.replies.push(newReplyObj)
        }

        let replyToSend: IReplyRequest = {
          replies: data.replies
        }

        this.timelineSvc.sendReply(this.message.id, replyToSend).pipe()
          .subscribe(data => {
            let index = this.allMessagesRef.indexOf(this.message);
            this.allMessagesRef[index] = data
            this.timelineSvc.updateMessagesList(this.allMessagesRef)

          }, error => {
            this.alertsSvc.showDanger(`Error: ${error.message}`)
          }, () => {
            this.loadingSvc.hideLoader()
            this.alertsSvc.showSuccess("Your reply have been posted.")
             this.newReply = ""
          })

      }, error => {
        this.loadingSvc.hideLoader()
        console.log("err",error)
        this.alertsSvc.showDanger(`Error: ${error.message}`)
      }, () => {
         // getMessageById Completed
      })
  }

  trackByCeatedAt(index: number, message: IMessage) {
    return message.createdAt;
  }


  uniqueID() {
    function chr12() {
      return Math.random().toString(16).substr(2, 12)
    }
    return chr12() + chr12()
  }

}
