import { Routes } from '@angular/router';
import { KanjiCardComponent } from './components/kanji-card/kanji-card.component';
import { PostKanjiCardComponent } from './components/post-kanji-card/post-kanji-card.component';

export const routes: Routes = [
    {
        path: '',
        component: KanjiCardComponent
    },
    {
        path: 'post-card',
        component: PostKanjiCardComponent
    }
];
