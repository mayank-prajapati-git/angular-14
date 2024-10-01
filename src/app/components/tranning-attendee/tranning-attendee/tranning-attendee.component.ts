import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  pgmName: string;
  accountNo: string;
  mobileNo: string;
  city: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { pgmName: 'Hydrogen', mobileNo: '88888888', accountNo: 'Bt-85887', city: 'Nikol' },
  { pgmName: 'Hydrogen', mobileNo: '88888888', accountNo: 'Bt-85887', city: 'Nikol' },
  { pgmName: 'Hydrogen', mobileNo: '88888888', accountNo: 'Bt-85887', city: 'Nikol' },
  { pgmName: 'Hydrogen', mobileNo: '88888888', accountNo: 'Bt-85887', city: 'Nikol' },
  { pgmName: 'Hydrogen', mobileNo: '88888888', accountNo: 'Bt-85887', city: 'Nikol' },
  { pgmName: 'Hydrogen', mobileNo: '88888888', accountNo: 'Bt-85887', city: 'Nikol' },
];

@Component({
  selector: 'app-tranning-attendee',
  templateUrl: './tranning-attendee.component.html',
  styleUrls: ['./tranning-attendee.component.css']
})
export class TranningAttendeeComponent implements OnInit {

  criteriaList: any[] =
    [
      { value: 'userName', text: 'User Name' },
      { value: 'mobileNo', text: 'Mobile Number' },
      { value: 'shopName', text: 'Shop Name' },
      { value: 'location', text: 'Location' },
      { value: 'pincode', text: 'Pin code' },
    ];

  statusList: any[] =
    [
      { value: 1, text: 'Invited' },
      { value: 2, text: 'Updated' },
      { value: 3, text: 'Interested' },
      { value: 4, text: 'Confirmed' },
      { value: 5, text: 'Completed' },
      { value: 6, text: 'Absent' },
    ];

  attendeestatusList: any[] =
    [
      { value: 5, text: 'Completed' },
      { value: 6, text: 'Absent' },
    ];

  displayedColumns: string[] = ['actions', 'pgmName', 'accountNo', 'mobileNo', 'city'];
  dataSource = ELEMENT_DATA;

  status: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  getUserVerificationList() {

  }

  onChangeStatus() {
  }

  onChangeAttendeeStatus(row: any) {
    debugger
  }
}
