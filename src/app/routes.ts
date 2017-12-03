import { Routes } from '@angular/router';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { MainViewComponent } from './location/main-view/main-view.component';
import { LoginComponent } from './location/login/login.component';

export const AppRoutes: Routes = [
    {path: 'mainView', component: MainViewComponent},
    {path: 'login', component: LoginComponent},
    {path: 'add', component: AddLocationComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

