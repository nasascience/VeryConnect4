import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../../services/timeline.service'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  localUserName: string = "Unnamed"
  avatarId: number = 1
  constructor(private timelineSvc: TimelineService) { }

  ngOnInit(): void {
    this.timelineSvc.currentUserName.pipe().subscribe(u => {this.localUserName = u})
  }


  setUserName(userNameInput){
    this.timelineSvc.changeUserName(userNameInput.value)
  }
}
