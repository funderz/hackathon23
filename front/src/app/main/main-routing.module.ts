import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {MainComponent} from "./main.component";
import {CompainComponent} from "./compain/compain.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "home",
        component: LandingPageComponent,
        //canActivate: [MainGuard],
      },{
        path: "campaign",
        component: CompainComponent,
        //canActivate: [MainGuard],
      },
    ]
  }

  //{
  //       path: 'emballage',
  //    loadChildren: () =>
  //      import('./emballage/emballage.module').then(m => m.EmballageModule),
  //    canActivate: [MainGuard],
  //    },
  //  {
  //    path: 'attestation-exoneration',
  //    component: AttestationExonerationComponent,
//    canActivate: [MainGuard],
  //    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
