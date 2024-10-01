import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tranning',
  templateUrl: './tranning.component.html',
  styleUrls: ['./tranning.component.css']
})
export class TranningComponent implements OnInit {

  submitted = false;
  tranningForm: FormGroup;

  queryString = Object();
  trannngId: any = "";

  get f() { return this.tranningForm.controls; }

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  buildForm(): void {
    this.tranningForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.queryString = this.activatedRoute.snapshot.queryParams;
    this.trannngId = this.queryString.ID ? this.queryString.ID : "";
    this.buildForm();
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.tranningForm.invalid)
      return;
  }

  onClickCancel() {
    this.router.navigate(['tranning']);
  }
}
