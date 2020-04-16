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
    <app-hello  [text]="title" (buttonClicked)="onChangeFromChildren($event)"></app-hello>

    <br>
    <h3>Hi component</h3>
    <app-hi></app-hi>
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
  onChangeFromChildren(event){
    this.title = event;
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

  }
  ngOnChanges(changes:SimpleChanges):void{

  }

  ngOnDestroy():void{

  }
  ngAfterViewInit():void{

  }
  ngAfterViewChecked():void{

  }
  ngAfterContentChecked():void{

  }


}
//databinding
//propertyBinding
//Eventbinding
