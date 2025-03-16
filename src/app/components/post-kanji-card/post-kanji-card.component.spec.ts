import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostKanjiCardComponent } from './post-kanji-card.component';

describe('PostKanjiCardComponent', () => {
  let component: PostKanjiCardComponent;
  let fixture: ComponentFixture<PostKanjiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostKanjiCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostKanjiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
