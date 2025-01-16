import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleFullstackComponent } from './pages/detalle-fullstack/detalle-fullstack.component';
import { DetalleUxuiComponent } from './pages/detalle-uxui/detalle-uxui.component';
import { DetalleIlusComponent } from './pages/detalle-ilus/detalle-ilus.component';
import { DetalleFotoComponent } from './pages/detalle-foto/detalle-foto.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "fullstack/:fullstackId", component: DetalleFullstackComponent },
    { path: "uxui/:uxuiId", component: DetalleUxuiComponent },
    { path: "ilus", component: DetalleIlusComponent },
    { path: "fotos", component: DetalleFotoComponent },

    { path: '**', redirectTo: '' }
];
