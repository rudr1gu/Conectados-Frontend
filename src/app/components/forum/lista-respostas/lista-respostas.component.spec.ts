import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRespostasComponent } from './lista-respostas.component';

describe('ListaRespostasComponent', () => {
  let component: ListaRespostasComponent;
  let fixture: ComponentFixture<ListaRespostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRespostasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRespostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
