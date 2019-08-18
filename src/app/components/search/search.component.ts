import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyword:string;
  public historyList:any[]=[];

  constructor() { }

  ngOnInit() {
  }
  doSearch(){
    if(this.historyList.indexOf(this.keyword)==-1){
      this.historyList.push(this.keyword);
    }
    
    console.log(this.keyword);
    this.keyword='';
  }
  deleteHistoryList(key){
  
    this.historyList.splice(key,1);
    //alert(key);
  }

}
