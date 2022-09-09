import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatementDetailComponent } from './bank-statement-detail.component';

describe('BankStatementDetailComponent', () => {
  let component: BankStatementDetailComponent;
  let fixture: ComponentFixture<BankStatementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankStatementDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankStatementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
