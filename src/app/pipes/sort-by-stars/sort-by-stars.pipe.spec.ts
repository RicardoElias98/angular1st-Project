import { SortByStarsPipe } from './pipes/sort-by-stars/sort-by-stars.pipe';

describe('SortByStarsPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByStarsPipe();
    expect(pipe).toBeTruthy();
  });
});
