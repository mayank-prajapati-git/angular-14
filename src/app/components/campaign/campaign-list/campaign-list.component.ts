import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  submitted = false;
  retailStoreForm: FormGroup;

  get f() { return this.retailStoreForm.controls; }

  constructor(private formBuilder: FormBuilder) { }

  buildForm(): void {
    this.retailStoreForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.buildForm();
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.retailStoreForm.invalid)
      return;
  }
}
