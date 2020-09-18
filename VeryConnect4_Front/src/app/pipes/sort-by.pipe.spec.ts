import { TestBed, async, inject } from '@angular/core/testing'
import { SortByPipe } from './sort-by.pipe'
import { orderBy } from 'lodash';

describe('SortByPipe', () => {

  it('create an instance', () => {
    const pipe = new SortByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should order by asc and desc', () => {
    const data = [
      {
        id: "1",
        userName: "Name 1",
        avatarId: 1,
        body: "Body Text",
        replies: [],
        createdAt: 1600299434153,
        updatedAt: 1600299434153
      },
      {
        id: "2",
        userName: "Name 2",
        avatarId: 1,
        body: "Body Text 2",
        replies: [],
        createdAt: 1600299434157,
        updatedAt: 1600299434157
      }
    ]

    const pipe = new SortByPipe();
    const ascResult = pipe.transform(data,'asc','createdAt');
    const dscResult = pipe.transform(data,'desc','createdAt');

    expect(ascResult).toEqual(data);
    expect(dscResult).toEqual(data.reverse());
  });
});
