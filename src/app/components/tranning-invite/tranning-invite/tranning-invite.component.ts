import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tranning-invite',
  templateUrl: './tranning-invite.component.html',
  styleUrls: ['./tranning-invite.component.css']
})
export class TranningInviteComponent implements OnInit {

  submitted = false;
  tranningForm: FormGroup;

  queryString = Object();

  criteriaList: any[] =
    [
      { value: 'userName', text: 'User Name' },
      { value: 'mobileNo', text: 'Mobile Number' },
      { value: 'shopName', text: 'Shop Name' },
      { value: 'location', text: 'Location' },
      { value: 'pincode', text: 'Pin code' },
    ];

  get f() { return this.tranningForm.controls; }

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  buildForm(): void {
    this.tranningForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.buildForm();
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.tranningForm.invalid)
      return;
  }

}