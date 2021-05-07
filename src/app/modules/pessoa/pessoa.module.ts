import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPessoaComponent } from './pages/add-pessoa/add-pessoa.component';
import { ListPessoaComponent } from './pages/list-pessoa/list-pessoa.component';
import { ShowPessoaComponent } from './pages/show-pessoa/show-pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing/pessoa-routing.module';
import { HomePessoaComponent } from './pages/home-pessoa/home-pessoa.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddPessoaComponent,
    ListPessoaComponent,
    ShowPessoaComponent,
    HomePessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
