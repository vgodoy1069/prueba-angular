import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpedidosComponent } from './addpedidos.component';

describe('AddpedidosComponent', () => {
  let component: AddpedidosComponent;
  let fixture: ComponentFixture<AddpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
