import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from "./usuario-form/usuario-form.component";

const usuariosRoutes: Routes = [
  { path: 'usuarios', component: UsuariosComponent, pathMatch: 'full' },
  { path: 'usuarios/novo', component: UsuarioFormComponent },
  { path: 'usuarios/:id', component: UsuarioFormComponent }
];

export const usuariosRouting = RouterModule.forChild(usuariosRoutes);