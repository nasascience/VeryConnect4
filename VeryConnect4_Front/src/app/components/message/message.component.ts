import { Component, OnInit, Input } from '@angular/core';
import { TimelineService } from '../../services/timeline.service'
import { IMessage } from '../../interfaces/message'
import { SortByPipe } from '../../pipes/sort-by.pipe'
import { AlertsService} from '../../services/alerts.service'
declare var $: any

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  newReply: string = ""
  localUserName: string = ""

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


  constructor(private timelineSvc: TimelineService, private alertsSvc: AlertsService) { }

  ngOnInit(): void {
    console.log("loaded")
    this.timelineSvc.currentUserName.pipe().subscribe(u => { this.localUserName = u })
  }

  postReply() {
    let newReplyObj: IMessage = {
      userName: this.localUserName,
      body: this.newReply,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      avatarId: this.avatarId
    }

    let replies = this.message.replies
    if (replies != null) {
      this.message.replies.push(newReplyObj)
    }
    else {
      this.message.replies = []
      this.message.replies.push(newReplyObj)
    }

    this.timelineSvc.sendFakeReply(this.message)
    this.newReply = ""
    console.log(this.message)
    this.alertsSvc.showSuccess("Your reply have been posted.")
  }

  trackByCeatedAt(index: number, message: IMessage) {
    return message.createdAt;
  }

}
