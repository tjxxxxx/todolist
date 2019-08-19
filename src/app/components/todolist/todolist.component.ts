import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public keyword:any;
  public todolist:any=[];

  constructor(public storage:StorageService) {
   
   }

  ngOnInit() {
    var todolist = this.storage.get('todolist');
    if(todolist){
      this.todolist=todolist;
    }
  }
  doAdd(event){
   
    console.log(this.keyword);
    
    if(event.keyCode==13){
      if(!this.todolistalreadyhas(this.todolist,this.keyword)){
           this.todolist.push({
             title:this.keyword,
             status:0   //0 means want to do, 1 means had already finish
           });
            console.log(this.todolist);
            this.keyword='';

            this.storage.set('todolist',this.todolist);
      }
      else{
        alert('already exist');
      }
      
     
    }
  }
  deletelist(key){
    this.todolist.splice(key,1);
    this.storage.set('todolist',this.todolist);

  }
  //if the array has keyword, return true.
  todolistalreadyhas(todolist,keyword){
    // todolist.array.forEach(value => {
    //   if(value.title==keyword){
    //     return true
    //   }
      
    // });
    // return false;
    if(!keyword){
      return false;
    }
    for(var i=0;i<todolist.length;i++){
      if(todolist[i].title==keyword){
        return true;
      }
    }
    return false;

  }

checkBoxChange(){
  this.storage.set('todolist',this.todolist);

}
}
