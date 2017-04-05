import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

const usuariosRoutes = [
    {path: '', component: UsuariosComponent,
     children : [
        {path: 'novo', component: UsuarioFormComponent}
        // {path: ':id', component: UsuarioDetalheComponent,
        //     resolve: { usuario : UsuarioDetalheResolver }
        // },
        // {path: ':id/editar', component: UsuarioFormComponent,
        //}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}
