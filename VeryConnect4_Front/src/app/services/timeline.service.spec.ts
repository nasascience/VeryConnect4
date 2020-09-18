import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TimelineService } from './timeline.service';
import { IMessage, IReplyRequest } from '../interfaces/message'
import { environment } from '../../environments/environment'
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TimelineService', () => {
  let service: TimelineService
  let httpMock: HttpTestingController
  let dummyMessage: IMessage

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TimelineService]
    });
    service = TestBed.get(TimelineService);
    httpMock = TestBed.get(HttpTestingController);

    dummyMessage = {
      id: "5f63fec6fbc20e05dce664f7",
      userName: "Christopher Daniel",
      avatarId: 1,
      body: "Dummy Comment",
      replies: [],
      createdAt: 1600299483137,
      updatedAt: 1600299483137
    }
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('should return an Observable<IMessage>', () => {
    const id = "5f63fec6fbc20e05dce664f7"

    service.getMessageById(id).subscribe(message => {
       expect(message).not.toBeNull();
       expect(message.id).toEqual(id);
    })

    const req = httpMock.expectOne(`${environment.baseUrl}messages/${id}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyMessage);
  });


  it('sendMessage should return an object', () => {

    service.sendMessage(dummyMessage)
    .subscribe(result => {
      expect(result.body).toBeTruthy();
      expect(typeof(result)).toEqual('object')

    });

    const req = httpMock.expectOne(`${environment.baseUrl}messages`);

    req.flush(dummyMessage);
  });


  // Ensures that no request is outstanding.
  afterEach(() => {
    httpMock.verify();
});
});
