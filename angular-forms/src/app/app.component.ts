import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm: FormGroup;
  post: any;
  designation: string = '';
  name: string = '';
  alertTitle: string = 'Name is required';
  countries: string[] = ['India', 'Japan', 'Canada'];
  country: string = '';
  gender: string = '';
  // default: string = '';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'designation': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])],
      'validate': '',
      'country': [null, Validators.required],
      'gender': [null, Validators.required]
    });
  }

  // Form Submit Method //
  addPost(post) {
    this.designation = post.designation;
    this.name = post.name;
    this.country = post.country;
    console.log(post);
  }
  changeCountry(e){
    alert(e);
    console.log(typeof e);
  }
  ngOnInit() {
    // this.rForm.controls['country'].setValue(this.default, {onlySelf: true});
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.alertTitle = "You must specify 3 characters as part of name";
        }
        else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
    this.rForm.get('country').valueChanges.subscribe(
      (country) => {
        if (country != '') {
          this.country = this.rForm.controls['country'].value
        }
        else {
          this.rForm.get('country').setValidators(Validators.required);
        }
      }
    )
  }
}
