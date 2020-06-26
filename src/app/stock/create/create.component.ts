import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Tournevis', [Validators.required]),
    price: new FormControl(2.34, [Validators.required]),
    qty: new FormControl(100, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
  }
}
