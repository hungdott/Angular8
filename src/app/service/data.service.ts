import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private _textFromHellosubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  textFromHello$:Observable<string>= this._textFromHellosubject.asObservable();

  setTextFromHello(text: string) {
   this._textFromHellosubject.next(text);
  }
}
