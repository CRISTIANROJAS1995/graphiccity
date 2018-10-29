import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rememberpassword',
  templateUrl: './rememberpassword.component.html',
  styleUrls: ['./rememberpassword.component.css']
})
export class RememberpasswordComponent implements OnInit {


  rememberForm:FormGroup;
  
  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.rememberForm = this.form.group({
      username:['',Validators.required]
    })
  }

  checkFunction(){
    console.log(this.rememberForm.value.username);
  }

}
