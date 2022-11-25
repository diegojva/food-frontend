import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-register-sale',
  templateUrl: './register-sale.component.html',
  styleUrls: ['./register-sale.component.css']
})
export class RegisterSaleComponent implements OnInit {

  options = this._formBuilder.group({
    color: this._formBuilder.control('primary' as ThemePalette),
    fontSize: this._formBuilder.control(16, Validators.min(10)),
  });

  constructor(private _formBuilder: NonNullableFormBuilder) {}

  ngOnInit(): void {
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize || 0);
  }

}
