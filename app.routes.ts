import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/common/home/home.component';
import { QuotationComponent } from './components/sale/quotation/quotation.component';
import { RememberpasswordComponent } from './components/security/login/rememberpassword/rememberpassword.component';
import { ProgrammerComponent } from './components/sale/programmer/programmer.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quatation', component: QuotationComponent },
    { path: 'rememberpassword', component: RememberpasswordComponent },
    { path: 'programmer', component: ProgrammerComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(routes, {useHash: true});
