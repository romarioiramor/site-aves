import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutacaoComponent } from './mutacao.component';

describe('MutacaoComponent', () => {
  let component: MutacaoComponent;
  let fixture: ComponentFixture<MutacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
