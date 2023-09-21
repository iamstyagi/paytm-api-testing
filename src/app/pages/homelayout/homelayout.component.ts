import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.scss']
})
export class HomelayoutComponent implements OnInit {
pageCount:number = 30; // for using showing data per page 
itemPerPage:number = 1; // for using page data start with number
categoryId:any = 9632;
paytmData:any = [];
products:any = [];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
this.getPaytmData()  // api data load while page load

// this function for using get data from local file assets
this.http.get("assets/paytmdata.json").subscribe(data => {
    this.products = data;
})
  }
  // using function for get data from paytm api from server side
getPaytmData(){
 let url = `https://search.paytm.com/v2/search?page_count=${this.itemPerPage}&items_per_page=${this.pageCount}&category=${this.categoryId}`
  this.http.get(url).subscribe((res)=>{
this.paytmData  = res['grid_layout']
  })
}
}
