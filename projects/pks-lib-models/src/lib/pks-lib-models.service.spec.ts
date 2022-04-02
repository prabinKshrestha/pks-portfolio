import { TestBed } from '@angular/core/testing';

import { PksLibModelsService } from './pks-lib-models.service';

describe('PksLibModelsService', () => {
  let service: PksLibModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PksLibModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
