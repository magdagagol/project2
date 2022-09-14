import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements OnInit {
  data: Task[] = [];
  displayedColumns: string[] = ['work_order_id', 'description', 'received_date', 'assigned_to', 'status', 'priority'];
  dataSource!: MatTableDataSource<Task>;

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe(
      (data) => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      },
      (error) => {
        console.log("Request error", error)
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
