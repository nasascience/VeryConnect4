import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageComponent } from './message.component';
import { SortByPipe } from '../../pipes/sort-by.pipe'
import { FriendlyDatePipe } from '../../pipes/friendly-date.pipe'
import { NO_ERRORS_SCHEMA } from '@angular/core';
// Services
import { TimelineService } from '../../services/timeline.service'
import { AlertsService } from '../../services/alerts.service'
import { LoadingService } from '../../services/loading.service'

import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent, SortByPipe, FriendlyDatePipe],
      providers: [
        { provide: TimelineService, useValue: {} },
        { provide: AlertsService, useValue: {} },
        { provide: LoadingService, useValue: {} }],
        schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageComponent)
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('messages shouldnt be null', () =>{
     expect(component.message).not.toBeNull()
  })

  it('AvatarId shouldnt be null', () =>{
    expect(component.avatarId).not.toBeNull()
  })

  it('getAvatarId should return a string and be 24 length', () => {
    expect(typeof component.uniqueID()).toEqual('string');
    expect(component.uniqueID().length).toEqual(24);
  });

});
