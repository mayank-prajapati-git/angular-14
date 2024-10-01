import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tranning-list',
  templateUrl: './tranning-list.component.html',
  styleUrls: ['./tranning-list.component.css']
})
export class TranningListComponent implements OnInit {

  trannngId: any = 1;
  criteriaList: any[] =
    [
      { value: 'userName', text: 'User Name' },
      { value: 'mobileNo', text: 'Mobile Number' },
      { value: 'shopName', text: 'Shop Name' },
      { value: 'location', text: 'Location' },
      { value: 'pincode', text: 'Pin code' },
    ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickAdd() {
    this.router.navigate(['tranning/detail/']);
  }

  onClickEdit() {
    this.router.navigate(['tranning/detail/'], { queryParams: { ID: this.trannngId } });
  }
}
