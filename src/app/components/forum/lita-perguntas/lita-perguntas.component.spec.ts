import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitaPerguntasComponent } from './lita-perguntas.component';

describe('LitaPerguntasComponent', () => {
  let component: LitaPerguntasComponent;
  let fixture: ComponentFixture<LitaPerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitaPerguntasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitaPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
