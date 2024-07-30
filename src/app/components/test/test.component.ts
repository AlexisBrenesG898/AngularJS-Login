import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

   loginForm = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
   })

   constructor(private fb: FormBuilder){}

   get email() { return this.loginForm.controls['email']}
   get password() { return this.loginForm.controls['password']}

}
