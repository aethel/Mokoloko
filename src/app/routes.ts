import { Routes } from '@angular/router';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { MainViewComponent } from './location/main-view/main-view.component';

export const appRoutes: Routes = [
    {path: 'mainView', component: MainViewComponent},
    {path: 'add', component: AddLocationComponent},
    {path: '', redirectTo: '/mainView', pathMatch: 'full'}
]