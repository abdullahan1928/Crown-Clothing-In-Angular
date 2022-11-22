import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './guard/activate/activate.guard';
import { DeactivateGuard } from './guard/deactivate/deactivate.guard';
import { CategoryComponent } from './routes/category/category.component';
import { CheckoutComponent } from './routes/checkout/checkout.component';
import { ContactComponent } from './routes/contact/contact.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { ShopComponent } from './routes/shop/shop.component';
import { AuthService } from './services/auth/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'login', component: LoginComponent,
    canActivate: [ActivateGuard]
  },
  {
    path: 'register', component: RegisterComponent,
    canActivate: [ActivateGuard]
  },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:title', component: CategoryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
