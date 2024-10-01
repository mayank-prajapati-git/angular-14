import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserVerificationComponent } from '../user-verification/user-verification.component';
export interface PeriodicElement {
  userName: string;
  mobileNo: string;
  shopName: string;
  location: string;
  pincode: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
  { userName: 'Hydrogen', mobileNo: '88888888', shopName: 'Hydrogen Shop', location: 'Nikol', pincode: '382566' },
];


@Component({
  selector: 'app-user-verification-list',
  templateUrl: './user-verification-list.component.html',
  styleUrls: ['./user-verification-list.component.css']
})
export class UserVerificationListComponent implements OnInit {
  criteriaList: any[] =
    [
      { value: 'userName', text: 'User Name' },
      { value: 'mobileNo', text: 'Mobile Number' },
      { value: 'shopName', text: 'Shop Name' },
      { value: 'location', text: 'Location' },
      { value: 'pincode', text: 'Pin code' },
    ];

  search = "";
  displayedColumns: string[] = ['actions', 'userName', 'mobileNo', 'shopName', 'location', 'pincode'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  getUserVerificationList() {

  }

  onClickView(row: any) {
    let dialogRef = this.dialog.open(UserVerificationComponent, {
      disableClose: true,
      width: '40%',
      data: {
        // title: 'Are you sure want to send all the participating Stores?',
        // subTitle: row.campaignName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
      else {
      }
    });
  }
}
