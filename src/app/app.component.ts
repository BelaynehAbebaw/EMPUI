import { Component, HostListener } from '@angular/core';

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hospital Management System';
  isScreenLarge = window.innerWidth > 768;
  
  patients: Patient[] = [
    {id: 'P-1001', name: 'John Smith', age: 45, gender: 'Male', condition: 'Hypertension', status: 'Stable'},
    {id: 'P-1002', name: 'Emily Johnson', age: 32, gender: 'Female', condition: 'Diabetes', status: 'Monitoring'},
    {id: 'P-1003', name: 'Michael Brown', age: 68, gender: 'Male', condition: 'Arthritis', status: 'Recovering'},
    {id: 'P-1004', name: 'Sarah Davis', age: 29, gender: 'Female', condition: 'Migraine', status: 'Stable'},
    {id: 'P-1005', name: 'Robert Wilson', age: 55, gender: 'Male', condition: 'Heart Disease', status: 'Monitoring'}
  ];

  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'condition', 'status', 'actions'];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isScreenLarge = event.target.innerWidth > 768;
  }
}