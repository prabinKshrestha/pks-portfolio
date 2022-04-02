import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PksLibModelsComponent } from './pks-lib-models.component';

describe('PksLibModelsComponent', () => {
  let component: PksLibModelsComponent;
  let fixture: ComponentFixture<PksLibModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PksLibModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PksLibModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
