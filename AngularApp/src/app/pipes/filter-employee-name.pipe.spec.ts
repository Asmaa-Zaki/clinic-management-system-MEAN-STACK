import { FilterEmployeeNamePipe } from './filter-employee-name.pipe';

describe('FilterEmployeeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterEmployeeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
