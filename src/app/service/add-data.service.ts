import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {
  listAry :{list: string; isDone: boolean}[] = [];

  addList(list: string){
    this.listAry.push({
      list,
      isDone: false
    });
  }
  constructor() { }

}
