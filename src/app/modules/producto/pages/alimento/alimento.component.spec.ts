import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoComponent } from './alimento.component';

describe('AlimentoComponent', () => {
  let component: AlimentoComponent;
  let fixture: ComponentFixture<AlimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimentoComponent]
    });
    fixture = TestBed.createComponent(AlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
