import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutModule } from './checkout/checkout.module';
import { HomeModule } from './home/home.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MovieModule } from './movie/movie.module';

const routes: Routes = [
  { path: 'checkout', loadChildren: () => CheckoutModule },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // pathMatch: "full" => kiểm tra path phải khớp 100%
      { path: '', pathMatch: 'full', loadChildren: () => HomeModule },
      { path: 'movie/:movieId', loadChildren: () => MovieModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
