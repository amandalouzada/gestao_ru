import { Routes, RouterModule } from '@angular/router';

import { ClassesComponent } from './classes.component';
import { ClasseFormComponent } from "./classe-form/classe-form.component";

const classesRoutes: Routes = [
  { path: 'classes', component: ClassesComponent, pathMatch: 'full' },
  { path: 'classes/novo', component: ClasseFormComponent },
  { path: 'classes/:id', component: ClasseFormComponent }
];

export const classesRouting = RouterModule.forChild(classesRoutes);