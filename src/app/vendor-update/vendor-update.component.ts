import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../service/vendor-service.service';

@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {
  vendorId: number;
  vendor: Vendor;

  constructor(private route: ActivatedRoute,private router: Router,
    private vendorService: VendorServiceService) { }

  ngOnInit() {
    this.vendor= new Vendor();

    this.vendorId = this.route.snapshot.params['id'];
    
    this.vendorService.getVendor(this.vendorId)
      .subscribe(data => {
        console.log(data)
        this.vendor = data;
      }, error => console.log(error));
  }

  updateVendor() {
    this.vendorService.updateVendor(this.vendorId, this.vendor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vendor= new Vendor();
    this.gotoList();
  }

  onSubmit() {
    this.updateVendor();    
  }

  gotoList() {
    this.router.navigate(['/vendors']);
  }
}