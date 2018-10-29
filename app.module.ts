import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/common/home/home.component';
import { ProgrammerComponent } from './components/sale/programmer/programmer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { RememberpasswordComponent } from './components/security/login/rememberpassword/rememberpassword.component';
import { QuotationComponent } from './components/sale/quotation/quotation.component';
import { ModalQuotationComponent } from './components/sale/modals/modal-quotation/modal-quotation.component';

// Services
import { ValidateRoutesService } from './services/common/validate-routes.service';
import { CallingRestServices } from './services/common/calling-rest.services';
import { ProductSelectService } from './services/quotation/product-select.service';
import { PriceProductMockService } from './services/quotation/price-product-mock.service';
import { PrintMockDataService } from './services/quotation/printMock.service';

// Router
import { app_routing } from './app.routes';

// External libraries
import { NgxCaptchaModule } from 'ngx-captcha';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    HomeComponent, 
    QuotationComponent,
    NavbarComponent, 
    RememberpasswordComponent, 
    ProgrammerComponent,
    ModalQuotationComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    NgSelectModule, 
    ReactiveFormsModule, 
    app_routing,
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: '6LeVS2MUAAAAALzPW7i5pXXCu7dtLPe-TP4hpbl5'
    }), 
    NgbModule.forRoot(), 
    LoadingBarHttpClientModule,
    CommonModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ChartsModule
  ],
  providers: [
    ValidateRoutesService, 
    CallingRestServices, 
    ProductSelectService,
    PriceProductMockService, 
    PrintMockDataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalQuotationComponent
  ]
})
export class AppModule { }
