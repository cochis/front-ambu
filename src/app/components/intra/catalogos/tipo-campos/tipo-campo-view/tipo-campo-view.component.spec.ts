import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCampoViewComponent } from './tipo-campo-view.component';

describe('TipoCampoViewComponent', () => {
  let component: TipoCampoViewComponent;
  let fixture: ComponentFixture<TipoCampoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCampoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCampoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
