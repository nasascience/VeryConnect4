import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu.component';

// Services
import { TimelineService } from '../../services/timeline.service'

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  const timelineSvc = new TimelineService(null, null);

  beforeEach(async(() => {
    component = new NavMenuComponent(timelineSvc);
  }));


  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
