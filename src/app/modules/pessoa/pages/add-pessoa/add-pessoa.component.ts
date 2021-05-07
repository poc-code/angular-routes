import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { FakeService } from 'src/app/services/fake.service';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html',
  styleUrls: ['./add-pessoa.component.css']
})
export class AddPessoaComponent implements OnInit {

  pessoa = {} as Pessoa;

  constructor(private _service: FakeService) { 
    this.pessoa = _service.buscarPessoa(1);
    console.log(this.pessoa);
  }

  ngOnInit(): void {
  }

}
