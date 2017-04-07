import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoDiarioComponent } from './consumo-diario.component';

describe('ConsumoDiarioComponent', () => {
  let component: ConsumoDiarioComponent;
  let fixture: ComponentFixture<ConsumoDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
