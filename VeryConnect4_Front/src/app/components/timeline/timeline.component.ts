import { Component, OnInit } from '@angular/core'
import { TimelineService } from '../../services/timeline.service'
import { AlertsService} from '../../services/alerts.service'
import { IMessage } from '../../interfaces/message'
import { SortByPipe } from '../../pipes/sort-by.pipe'
declare var $: any

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  localUserName: string = ""
  randomAvatar: number = 1
  message: string = '';
  data: IMessage[] = []
  constructor(private timelineSvc: TimelineService, private alertsSvc: AlertsService) { }

  ngOnInit(): void {
    this.timelineSvc.currentUserName.pipe().subscribe(u => {this.localUserName = u})
    this.timelineSvc.currentMessages.pipe().subscribe(d => {this.data = d})
    this.randomAvatar = this.getAvatarId()
    this.fetchData()
  }

  fetchData() {
    this.timelineSvc.getLocalMessages()


      // this.timelineSvc.getMessages()
      // .pipe()
      // .subscribe(data => {
      //   console.log("real data", data)
      // })
  }

  trackByCeatedAt(index: number, message: IMessage) {
    return message.createdAt;
  }

  postMessage() {
    let newMessage: IMessage = {
       userName: this.localUserName,
       body: this.message,
       createdAt: Date.now(),
       updatedAt: Date.now(),
       avatarId: this.randomAvatar
    }

    this.data.push(newMessage)
    this.timelineSvc.saveFakeMessages(this.data)

    // clear TextArea
    this.message = ""

    console.log(this.data)
    //this.message = ""
    this.alertsSvc.showSuccess("Your message have been posted.")
  }

  getAvatarId() {
    let min = 1
    let max = 6
    return Math.round(Math.random() * (max - min) + min);
}

}
