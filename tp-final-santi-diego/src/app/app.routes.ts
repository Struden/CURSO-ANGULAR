import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ProductoDetalleComponent } from './page/producto-detalle/producto-detalle.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'producto', component: ProductoDetalleComponent }
];
