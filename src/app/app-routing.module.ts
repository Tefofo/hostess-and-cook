import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HCComponent } from './h-c/h-c.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductServicesComponent } from './product-services/product-services.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'h-c', component: HCComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'product-services', component: ProductServicesComponent},
  { path: 'reviews', component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
