import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/customer.model";
import { CustomerService } from '../services/customer.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {
  customerId! : string ;
  customer! : Customer;
  accounts! : any;


  constructor(private route : ActivatedRoute, private router :Router, private customerService:CustomerService,private sharedService:SharedService) {
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];

   this.customerService.getAccountsByCustomerId(+this.customerId).subscribe( (res:any) =>{
       this.accounts = res
       this.customer = res[0]?.customer;
       console.log("accounts--->",this.accounts,this.customer);
       
    })

  }


  deleteAccount(account_id:String):void{
    console.log("delete account===>",account_id);
    
  }
  showAccountOperations(account:any):void{
    this.sharedService.sendData(account);
    console.log("show operations account===>",account);
    this.router.navigate(['accounts'])
    
  }

}
