import { Component } from '@angular/core';
import { HTTPService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-kanji-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-kanji-card.component.html',
  styleUrl: './post-kanji-card.component.scss',
  standalone: true
})
export class PostKanjiCardComponent {
    data: any = '';
    constructor(private service : HTTPService) { }
  
  onPostKanjiCard(kanjiCard: NgForm) {
    console.log(kanjiCard.value);
    this.service.postKanjiCards(kanjiCard.value).subscribe(data => {
      this.data = data;
    });
  }
}
