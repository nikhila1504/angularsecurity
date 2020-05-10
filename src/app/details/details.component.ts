import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../service/vendor-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  vendorId: number;
  vendor: Vendor;

  constructor(private route: ActivatedRoute,private router: Router,
    private vendorService: VendorServiceService) { }

  ngOnInit() {
    this.vendor = new Vendor();

    this.vendorId= this.route.snapshot.params['id'];
    
    this.vendorService.getProducts(this.vendorId)
      .subscribe(data => {
        console.log(data)
        this.vendor= data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['vendors']);
  }
}