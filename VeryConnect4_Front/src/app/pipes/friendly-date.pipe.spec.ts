import { FriendlyDatePipe } from './friendly-date.pipe';

describe('FriendlyDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FriendlyDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return string type', () => {
    const pipe = new FriendlyDatePipe();
    const dateFriendly = pipe.transform(1600299434153);

    expect(typeof dateFriendly).toEqual('string');
  });

  it('should convert milliseconds to friendly date', () => {
    const pipe = new FriendlyDatePipe();
    const dateFriendly = pipe.transform(Date.now());

    expect(dateFriendly).toEqual('Just now');
  });
});
