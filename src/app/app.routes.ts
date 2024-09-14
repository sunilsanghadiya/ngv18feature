import { Routes } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';

export const routes: Routes = [
    {
        path: 'signals',
        component: SignalsComponent
    },
    {
        path: 'ngrx',
        component: NgrxComponent
    }
];
