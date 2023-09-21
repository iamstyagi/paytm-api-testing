import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrated-data',
  templateUrl: './integrated-data.component.html',
  styleUrls: ['./integrated-data.component.scss']
})
export class IntegratedDataComponent implements OnInit {
  pageCount:number = 10; // for using showing data per page 
  itemPerPage:number = 1; // for using page data start with number
  categoryId:any = 9632;
  paytmData:any = [];
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
  this.getPaytmData()  // api data load while page load
    }
    // using function for get data from paytm api 
  getPaytmData(){
    let url = `https://search.paytm.com/v2/search?page_count=${this.itemPerPage}&items_per_page=${this.pageCount}&category=${this.categoryId}`
    this.http.get(url).subscribe((res)=>{
  this.paytmData  = res['result_type']
    })
  }
}
