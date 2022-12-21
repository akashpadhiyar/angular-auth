import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  myurl = "https://akashsir.in/myapi/crud/todo-add-api.php";

  constructor(public http:HttpClient) { }

  SubmitData(myForm:any){
   
  }

  ngOnInit(): void {
  }

}
