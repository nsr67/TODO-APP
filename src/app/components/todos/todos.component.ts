import { Component, OnInit } from '@angular/core';
import { todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: todo[];

  inputTodo: string= "";

  constructor() { }

  ngOnInit(): void {
    this.todos= [
      {
        content:'This is sample todo, please remove this!!!',
        completed: false
      }
    ]
  }
  toggleDone(id: number){
    this.todos.map((t,i)=>{
      if(i==id){ 
        t.completed=!t.completed;  
      }
      return t;
    })
  }
  deletetodo(id: number){
    this.todos= this.todos.filter((t,i)=>i!==id);
  }
  addtodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo="";
  }
  clearAll(){
    window.location.reload();
  }
}
