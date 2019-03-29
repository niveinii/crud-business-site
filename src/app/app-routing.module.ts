import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "business/create", component: AddComponent},
  {path: "business", component: GetComponent},
  {path: "business/edit/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
