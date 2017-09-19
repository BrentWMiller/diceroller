import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieCountComponent } from './die-count.component';

describe('DieCountComponent', () => {
  let component: DieCountComponent;
  let fixture: ComponentFixture<DieCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
