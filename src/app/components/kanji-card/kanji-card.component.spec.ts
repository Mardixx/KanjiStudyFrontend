import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiCardComponent } from './kanji-card.component';

describe('KanjiCardComponent', () => {
  let component: KanjiCardComponent;
  let fixture: ComponentFixture<KanjiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanjiCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanjiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
