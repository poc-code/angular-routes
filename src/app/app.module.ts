import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { PessoaModule } from './modules/pessoa/pessoa.module';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent
  ],
  imports: [
    BrowserModule,
    PessoaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
