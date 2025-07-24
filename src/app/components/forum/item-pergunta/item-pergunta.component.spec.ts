import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPerguntaComponent } from './item-pergunta.component';

describe('ItemPerguntaComponent', () => {
  let component: ItemPerguntaComponent;
  let fixture: ComponentFixture<ItemPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPerguntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
