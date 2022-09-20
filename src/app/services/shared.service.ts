import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private accountId: BehaviorSubject<string> = new BehaviorSubject<string>('');
  data: Observable<string> = this.accountId.asObservable();
  constructor() { }

  sendData(data: string) {
    this.accountId.next(data);
  }
}
