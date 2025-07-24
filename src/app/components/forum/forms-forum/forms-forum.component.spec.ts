import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsForumComponent } from './forms-forum.component';

describe('FormsForumComponent', () => {
  let component: FormsForumComponent;
  let fixture: ComponentFixture<FormsForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsForumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
