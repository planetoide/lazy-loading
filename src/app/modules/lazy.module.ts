import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyChildrenComponent } from './lazy-children/lazy-children.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';

const routes: Routes = [
  {
    path: 'load-me',
    component: LazyParentComponent
  }
]

@NgModule({
  declarations: [LazyParentComponent, LazyChildrenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
