import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {
  
  myurl = "https://akashsir.in/myapi/crud/todo-list-api.php";
  myarray:any = [];
  constructor(public http:HttpClient) {  }

  getData(){
      this.http.get(this.myurl).subscribe((response)=>{
        //console.table(response);
        this.myarray = response;
      })
  }

  ngOnInit(): void {
    this.getData();
  }

}
