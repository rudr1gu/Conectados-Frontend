import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRespostaComponent } from './item-resposta.component';

describe('ItemRespostaComponent', () => {
  let component: ItemRespostaComponent;
  let fixture: ComponentFixture<ItemRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemRespostaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
