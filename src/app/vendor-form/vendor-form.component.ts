import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { VendorServiceService } from '../service/vendor-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit {
 vendor: Vendor = new Vendor();
  submitted = false;

  constructor(private vendorService: VendorServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  newVendor(): void {
    this.submitted = false;
    this.vendor = new Vendor();
  }

  save() {
    this.vendorService.createVendor(this.vendor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vendor = new Vendor();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  
  gotoList() {
    this.router.navigate(['/vendors']);
  }
}