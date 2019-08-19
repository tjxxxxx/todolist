import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyword:string;
  public historyList:any[]=[];
  
  
  
  constructor( public storage:StorageService) {
    
   
  }

  ngOnInit() {
   var searchlist = this.storage.get('searchlist');
   if(searchlist){
     this.historyList=searchlist;
   }
  
  }
  doSearch(){
    if(this.historyList.indexOf(this.keyword)==-1){
      this.historyList.push(this.keyword);
      this.storage.set('searchlist',this.historyList);
    }
    
    console.log(this.keyword);
    this.keyword='';
  }
  deleteHistoryList(key){
  
    this.historyList.splice(key,1);
    this.storage.set('searchlist',this.historyList);
    //alert(key);
  }
  
  
  
  

}
