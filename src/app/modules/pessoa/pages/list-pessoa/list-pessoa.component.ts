import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { FakeService } from 'src/app/services/fake.service';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css']
})
export class ListPessoaComponent implements OnInit {

  pessoas = {} as Pessoa[];
  pessoa = {} as Pessoa;

  constructor(private _service : FakeService) { 
    this.pessoas = _service.buscarPessoas();
  }

  ngOnInit(): void {
  }

}
