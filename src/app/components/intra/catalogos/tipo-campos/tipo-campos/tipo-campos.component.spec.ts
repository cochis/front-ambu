import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCamposComponent } from './tipo-campos.component';

describe('TipoCamposComponent', () => {
  let component: TipoCamposComponent;
  let fixture: ComponentFixture<TipoCamposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCamposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
