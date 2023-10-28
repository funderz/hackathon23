import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {AuthModule} from "./auth/auth.module";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "main",
        pathMatch: "full",
      },
      {
        path: "auth",
        loadChildren: () =>
          import("./auth/auth.module").then(
            m => m.AuthModule
          ),
        //canActivate: [AuthGuard],
      },
      {
        path: "main",
        loadChildren: () =>
          import("./main/main.module").then(m => m.MainModule),
        //canActivate: [MainGuard],
      },
      {
        path: "**",
        redirectTo: "404",
      },
      {
        path: "404",
        component: NotFoundComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
