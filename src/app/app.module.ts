import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankStatementDetailComponent } from './bank-statement-detail/bank-statement-detail.component';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { PgHeaderComponent } from './pg-header/pg-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BankStatementDetailComponent,
    CreditCardListComponent,
    PgHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
