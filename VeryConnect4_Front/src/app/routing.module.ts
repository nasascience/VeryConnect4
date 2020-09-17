import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Components
import { TimelineComponent } from './components/timeline/timeline.component';

const routes: Routes = [
  {
    path: "",
    component: TimelineComponent,
    data: { title: "Timeline" }
  },
  {
    path: "**",
    redirectTo: ""
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
