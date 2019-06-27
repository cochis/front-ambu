import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCampoJoinComponent } from './tipo-campo-join.component';

describe('TipoCampoJoinComponent', () => {
  let component: TipoCampoJoinComponent;
  let fixture: ComponentFixture<TipoCampoJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCampoJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCampoJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
