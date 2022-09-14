import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksTableComponent } from './tasks-table/tasks-table.component';

const routes: Routes = [
  {path: '', component: TasksTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
