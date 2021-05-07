import { Pessoa } from './../models/pessoa';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  pessoas = {} as Pessoa[];
  pessoa = {} as Pessoa;

  constructor() {
    this.pessoas = [
      {Id: 1, Nome: 'John Doe', Email: 'johndoe@test.com', Idade: 20, Ativo: true},
      {Id: 2, Nome: 'Jane Doe', Email: 'janedoe@test.com', Idade: 20, Ativo: true}
    ]
   }

  buscarPessoas(): Pessoa[] 
  {
    return this.pessoas;
  }

  addPessoa(pessoa: Pessoa): Pessoa[]{
    this.pessoas.push(pessoa);
    return this.pessoas;
  }

  buscarPessoa(id: number): Pessoa{
    return this.pessoas.filter(function(item){
      return item.Id === id;
    })[0];
  }
}
