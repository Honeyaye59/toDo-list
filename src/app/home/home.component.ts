import { Component, OnInit } from '@angular/core';
import { AddDataService } from '../service/add-data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private addData: AddDataService){}
  ngOnInit(): void {
    this.listAry = this.addData.listAry;
  }

  // checked: boolean = false;
  listAry: any[] = [];
  
  
  // selectedValues = '';
  
  

  

  inputValue = "";

  
  
  addItem(item: string){
    this.addData.addList(item);
    this.inputValue = "";
    
  }

  // checkList(item: any){
  //   item.isDone = !item.isDone;

  // }
  
  
  

}
