import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/service/data.service';




@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent
implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked {

  constructor(private _dataService: DataService) { }

  @Input() text: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  onButtonClick(){
    this.buttonClicked.emit("change from childrean");
  }
  setHiValue(){
    this.text ='qweqweqw';
    this._dataService.setTextFromHello(this.text);
  }
  // onButtonChildrenClick(){
  //   this.text="children change"
  // }
  ngOnInit(): void {
    this._dataService.setTextFromHello(this.text);
  }
  ngOnChanges(changes: SimpleChanges):void{

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
