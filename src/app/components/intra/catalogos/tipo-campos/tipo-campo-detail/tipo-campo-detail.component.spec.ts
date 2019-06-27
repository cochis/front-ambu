import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCampoDetailComponent } from './tipo-campo-detail.component';

describe('TipoCampoDetailComponent', () => {
  let component: TipoCampoDetailComponent;
  let fixture: ComponentFixture<TipoCampoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCampoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCampoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
