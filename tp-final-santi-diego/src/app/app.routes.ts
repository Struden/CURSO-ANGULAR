import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactoComponent } from './page/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent }
];
