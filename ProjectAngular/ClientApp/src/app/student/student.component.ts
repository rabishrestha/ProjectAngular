import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})

export class StudentComponent implements OnInit {
  ngOnInit(): void {
      
  }

  studentForm = new FormGroup({
    firstname: new FormControl("", [Validators.required])
  });

  formSubmit() {
    if (this.studentForm.valid) {
      var value = this.studentForm.get("firstname")?.value;
      alert(value);
    } else
      alert("please enter value");

  }
  get Firstname(): FormControl {
    return this.studentForm.get("firstname") as FormControl;
  }

}
