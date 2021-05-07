import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPessoaComponent } from '../pages/add-pessoa/add-pessoa.component';
import { ListPessoaComponent } from '../pages/list-pessoa/list-pessoa.component';
import { ShowPessoaComponent } from '../pages/show-pessoa/show-pessoa.component';
import { HomePessoaComponent } from '../pages/home-pessoa/home-pessoa.component';

const pessoaRoutes : Routes = [
  { path:'', component: HomePessoaComponent,
    children: [
      { path:'add', component: AddPessoaComponent },
      { path:'list', component: ListPessoaComponent},
      { path:'show', component: ShowPessoaComponent},
      { path:'home', component: HomePessoaComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pessoaRoutes)
  ],
})
export class PessoaRoutingModule { }
