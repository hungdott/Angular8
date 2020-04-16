import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent
implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked {

  constructor() { }
  
  @Input() text:string

  ngOnInit(): void {
    console.log('OnInit');
  }
  ngOnChanges(changes: SimpleChanges):void{
    console.log('OnChanges ',{changes});
  }

  ngOnDestroy():void{
    console.log('OnDestroy');
  }
  ngAfterViewInit():void{
    console.log('AfterViewInit');
  }
  ngAfterViewChecked():void{
    console.log('AfterViewChecked');
  }
  ngAfterContentChecked():void{
    console.log('AfterContentChecked');
  }

}
