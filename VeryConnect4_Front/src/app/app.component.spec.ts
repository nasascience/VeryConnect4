import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Veryonnect4'`, () => {
    expect(app.title).toEqual('Veryonnect4');
  });

  it('spinner title should be Loading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#spinner span').textContent).toContain('Loading...');
  });

  it('spinner should be hidden by default', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#spinner span').textContent).toContain('Loading...');
  });

  it('alerts should be hidden by default', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#success-alert').style.display == 'none').not.toBeFalse();
    expect(compiled.querySelector('#danger-alert').style.display == 'none').not.toBeFalse();
  });
});
