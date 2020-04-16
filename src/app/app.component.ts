import {Component,
        OnInit,
        OnChanges,
        OnDestroy,
        AfterViewInit,
        AfterViewChecked,
        AfterContentChecked,
        SimpleChanges,
        NgModule

        } from '@angular/core';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
  <h1 [ngStyle]="styleObj"
      [ngClass]="classObj"
      (mousemove)="onMouseMove()"
      (mouseleave)="onMouseLeave()"
      >WellCome {{name}}</h1>
  <img [src]="ImgSrc" />
  <button
    (click)="onButtonClick($event)"

    >{{(classObj["with-border"])?'hide':'show'}} button</button>
    <app-hello *ngIf="isShowHello" [text]="title"></app-hello>
    <input type="text" [(ngModel)]="this.title" >
  <!-- <app-hello></app-hello> -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked {
  title = 'TodoApp';

  //propertyBinding

  name ='Will update aaaa';
  ImgSrc='https://www.windows-commandline.com/wp-content/uploads/Logo-18April2019.png';
  textColor ='tomato';
  textColorLeave='blue';
  textBackGround='black';
  isShowHello= true;
  styleObj={
    color:this.textColor,
    //background:this.textBackGround
  };
  withBorder=true;
  classObj={
    'with-border':this.withBorder
  }
  setTittle(){

  }

  //Eventbinding
  onButtonClick(event: MouseEvent){
    this.classObj["with-border"] = !this.classObj["with-border"];
    this.isShowHello= !this.isShowHello;
  }

  onMouseMove(){
    this.styleObj.color=this.textColor
  }
  onMouseLeave(){
    this.styleObj.color=this.textColorLeave
  }
  //life cycle
  ngOnInit():void{
    console.log('OnInit')
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log('OnChanges '+{changes})
  }

  ngOnDestroy():void{
    console.log('OnDestroy')
  }
  ngAfterViewInit():void{
    console.log('AfterViewInit')
  }
  ngAfterViewChecked():void{
    console.log('AfterViewChecked')
  }
  ngAfterContentChecked():void{
    console.log('AfterContentChecked')
  }


}
//databinding
//propertyBinding
//Eventbinding
