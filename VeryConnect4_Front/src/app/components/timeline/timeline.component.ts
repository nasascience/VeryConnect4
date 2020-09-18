import { Component, OnInit } from '@angular/core'
import { TimelineService } from '../../services/timeline.service'
import { AlertsService } from '../../services/alerts.service'
import { IMessage } from '../../interfaces/message'
import { SortByPipe } from '../../pipes/sort-by.pipe'
import { LoadingService } from '../../services/loading.service'

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
  constructor(
    private timelineSvc: TimelineService,
    private alertsSvc: AlertsService,
    private loadingSvc: LoadingService) { }

  ngOnInit(): void {
    this.timelineSvc.currentUserName.pipe().subscribe(u => { this.localUserName = u })
    this.timelineSvc.currentMessages.pipe().subscribe(d => { this.data = d })
    this.randomAvatar = this.getAvatarId()
    this.fetchData()
  }

  fetchData() {
    this.timelineSvc.getMessages()
  }

  trackByCeatedAt(index: number, message: IMessage) {
    return message.createdAt;
  }

  postMessage() {
    // Simple Validations
    if (this.message == "") {
      this.alertsSvc.showDanger(`Please make sure you have written a message`)
      return
    }else if(this.localUserName == ""){
      this.alertsSvc.showDanger(`Please make sure you have entered a name`)
      return
    }

    this.loadingSvc.showLoader()

    let newMessage: IMessage = {
      userName: this.localUserName,
      body: this.message,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      avatarId: this.randomAvatar
    }

    this.timelineSvc.sendMessage(newMessage).pipe()
      .subscribe(data => {
        this.data.push(data)
        this.timelineSvc.updateMessagesList(this.data)

        // Clear TextArea
        this.message = ""
        this.alertsSvc.showSuccess("Your message has been posted.")
      }, error => {
        this.alertsSvc.showDanger(`Error: ${error.message}`)
      }, () => {
        this.loadingSvc.hideLoader()
      })
  }

  getAvatarId() {
    let min = 1
    let max = 6
    return Math.round(Math.random() * (max - min) + min);
  }

}
