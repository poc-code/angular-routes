import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaiComponent } from 'src/app/components/pai/pai.component';
import { FilhoComponent } from 'src/app/components/filho/filho.component';

const appRoutes : Routes = [
  { path: 'pai', component:PaiComponent},
  { path: 'filho', component:FilhoComponent},
  { path: 'pessoa', 
    loadChildren: () => import('src/app/modules/pessoa/pessoa.module')
    .then(m => m.PessoaModule)}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
