import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FundamentoTSComponent } from './fundamento-ts/fundamento-ts.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { PadreMedicoComponent } from './padre-medico/padre-medico.component';
import { HijoMedicoComponent } from './hijo-medico/hijo-medico.component';
import { PadrePacientesComponent } from './padre-pacientes/padre-pacientes.component';
import { HijoPacientesComponent } from './hijo-pacientes/hijo-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentoTSComponent,
    DirectivasComponent,
    PadreMedicoComponent,
    HijoMedicoComponent,
    PadrePacientesComponent,
    HijoPacientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
