import { Component,OnInit,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation:ViewEncapsulation.None
},
           
)
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
 
  userdata: any = {};

  ngOnInit() {
  }
    loginuser(item: any)
    {
      console.warn(item);
      this.userdata = item;
    }
  
}
