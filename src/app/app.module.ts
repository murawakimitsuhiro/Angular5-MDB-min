import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

/**
 * library
 */
import { MDBBootstrapModule } from 'angular-bootstrap-md';

/**
 * component
 */
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

/**
 * router
 */
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
