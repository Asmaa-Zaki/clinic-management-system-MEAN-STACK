import { FilterMedicineNamePipe } from './filter-medicine-name.pipe';

describe('FilterMedicineNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterMedicineNamePipe();
    expect(pipe).toBeTruthy();
  });
});
