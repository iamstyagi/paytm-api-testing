import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.scss']
})
export class HomelayoutComponent implements OnInit {
pageCount:number = 10; // for using showing data per page 
itemPerPage:number = 1; // for using page data start with number
categoryId:any = 9642;
paytmData:any = [];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
this.getPaytmData()  // api data load while page load
this.getPaytmHistory()
  }
  // using function for get data from paytm api 
getPaytmData(){
 let url = `https://search.paytm.com/v2/search?page_count=${this.itemPerPage}&items_per_page=${this.pageCount}&category=${this.categoryId}`
  this.http.get(url).subscribe((res)=>{
this.paytmData  = res['result_type']
  })
}

getPaytmHistory(){
  const httpOptions = {
    headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Access-Control-Allow-Origin' : 'localhost:4200',
     'Access-Control-Allow-Credentials': 'true'
    })};
 let url = `https://search.paytm.com/v2/search?page_count=${this.itemPerPage}&items_per_page=${this.pageCount}&category=${this.categoryId}`
  
  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin' , '*');
  this.http.get(url,httpOptions).toPromise().then((res)=>{
      console.log("reading response....")
      console.log(res);
});
}


}
