import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  datePickerForm: FormGroup;
  // Date Picker Settings //
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy HH:mm:ss a',
    defaultOpen: false
  }
  constructor(private formBuilder: FormBuilder) {
    this.datePickerForm = this.formBuilder.group({
      mydate: ['', Validators.required]
    });
    this.datePickerForm.controls['mydate'].setValue(new Date());
  }

  onclicking(): void {
    alert(this.datePickerForm.controls['mydate'].value);
  }

  onDateSelect(event): void {
    console.log(event);
  }

  ngOnInit(){
  }
}
