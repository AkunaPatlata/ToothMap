import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./start-page/start-page.module').then((m) => m.StartPageModule),
  },
  {
    path: 'cabinet',
    loadChildren: () =>
      import('./personal-cabinet/personal-cabinet.module').then(
        (m) => m.PersonalCabinetModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about-page/about-page.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'log-in',
    loadChildren: () =>
      import('./log-in-form/log-in-form.module').then((m) => m.LogInFormModule),
  },
  {
    path: 'mouth',
    loadChildren: () =>
      import('./mouth/mouth.module').then((m) => m.MouthModule),
  },
  {
    path: 'mouth/:id',
    loadChildren: () =>
      import('./mouth/mouth.module').then((m) => m.MouthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
