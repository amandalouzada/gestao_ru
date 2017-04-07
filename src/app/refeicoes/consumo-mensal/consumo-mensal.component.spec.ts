import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoMensalComponent } from './consumo-mensal.component';

describe('ConsumoMensalComponent', () => {
  let component: ConsumoMensalComponent;
  let fixture: ComponentFixture<ConsumoMensalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoMensalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
