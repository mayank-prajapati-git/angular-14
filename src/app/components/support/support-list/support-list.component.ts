import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupportComponent } from '../support/support.component';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css']
})
export class SupportListComponent implements OnInit {

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
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onClickQuery() {
    let dialogRef = this.dialog.open(SupportComponent, {
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
