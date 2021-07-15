import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/user/services/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },{
    path: 'home',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },

  {path:"users",
  
  loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)
},
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'create-crew-user',
    loadChildren: () => import('./pages/create-crew-user/create-crew-user.module').then( m => m.CreateCrewUserPageModule)
  },
  {
    path: 'update-crew-user',
    loadChildren: () => import('./pages/update-crew-user/update-crew-user.module').then( m => m.UpdateCrewUserPageModule)
  },
  {path:"users/users",
loadChildren:()=>import('./modules/user/pages/users/users.module').then(m=> m.UsersModule)},
  {
    path: 'create-review',
    loadChildren: () => import('./modules/rating/pages/create-review/create-review.module').then( m => m.CreateReviewPageModule)
  },
  {
    path: 'create-review',
    loadChildren: () => import('./modules/ratings/pages/create-review/create-review.module').then( m => m.CreateReviewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
