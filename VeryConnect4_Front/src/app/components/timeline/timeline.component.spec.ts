import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineComponent } from './timeline.component';
import { SortByPipe } from '../../pipes/sort-by.pipe'
import { NO_ERRORS_SCHEMA } from '@angular/core';
// Services
import { TimelineService } from '../../services/timeline.service'
import { AlertsService } from '../../services/alerts.service'
import { LoadingService } from '../../services/loading.service'

import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineComponent, SortByPipe],
      providers: [
        { provide: TimelineService, useValue: {} },
        { provide: AlertsService, useValue: {} },
        { provide: LoadingService, useValue: {} }],
        schemas: [NO_ERRORS_SCHEMA]
        //{ provide: ComponentFixtureAutoDetect, useValue: true }],
    });
    fixture = TestBed.createComponent(TimelineComponent)
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('randomAvatar shoulbt be between 1 and 6', () => {
    expect(component.randomAvatar).toBeGreaterThan(0);
    expect(component.randomAvatar).toBeLessThan(7);
  });

  it('trackByCeatedAt should return a number', () => {
    let dummyMessage = {
      id: "5f63fec6fbc20e05dce664f7",
      userName: "Christopher Daniel",
      avatarId: 1,
      body: "Dummy Comment",
      replies: [],
      createdAt: 1600299483137,
      updatedAt: 1600299483137
    }

    expect(typeof component.trackByCeatedAt(1, dummyMessage)).toEqual('number');
  });

  it('getAvatarId should return a number', () => {
    expect(typeof component.getAvatarId()).toEqual('number');
  });
});
