import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-orders',
  templateUrl: './generate-orders.component.html',
  styleUrls: ['./generate-orders.component.css']
})
export class GenerateOrdersComponent implements OnInit {

  formRegister: FormGroup;
  date : Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formRegister = new FormGroup({
      product: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      cant: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      provaider: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      date: new FormControl('', [Validators.required]),
    });
  }
  

}
