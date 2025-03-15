import { Component } from '@angular/core';
import { HTTPService } from '../../services/http.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-kanji-card',
  imports: [NgFor],
  templateUrl: './kanji-card.component.html',
  styleUrl: './kanji-card.component.scss',
  standalone: true
})
export class KanjiCardComponent {
  data: any = '';
  constructor(private service : HTTPService) { }

  ngOnInit(): void {
    this.onGetKanjiCards();
  }

  public onGetKanjiCards() {
    return this.service.getKanjiCards().subscribe(data => {
      this.data = data;
    })
  }
}
