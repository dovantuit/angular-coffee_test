import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'trang-chu'
      },
      {
        path: 'trang-chu',
        component: HomeComponent,
        data: { title: 'Trang chủ' }
      },

      // {
      //   path: 'class-item/:platformId',
      //   canActivate: [IsAuthenticatedUser],
      //   component: ClassItemComponent,
      //   data: {title: 'Platform detail '}
      // },

      // {
      //   path: 'internal-error',
      //   component: InternalServerErrorComponent,
      //   data: {
      //     title: '500 -Internal Serve'
      //   }
      // },

      // {
      //   path: 'time-out',
      //   component: InternalServerErrorComponent,
      //   data: {
      //     title: '401 -Time out'
      //   }
      // },

      // {
      //   path: '**',
      //   component: NotFoundComponent,
      //   data: {title: 'Page not found'}
      // },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
