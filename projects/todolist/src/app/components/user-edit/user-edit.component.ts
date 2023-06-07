import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({});
  private userId : string| null = null;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService : UserService) { }

  ngOnInit(): void {
   
    this.userId = this.route.snapshot.paramMap.get('id');

    console.log('--userId---' , this.userId );

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.userService.getUser(this.userId ).subscribe({
     next : (user) =>{
         console.log('user', user)
         this.userForm.patchValue(user);
     }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted!');
    }
  }

}
