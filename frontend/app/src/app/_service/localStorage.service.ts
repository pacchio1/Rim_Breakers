import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageChangeSubject = new Subject<string>();

  getStorageChangeObservable(): Observable<string> {
    return this.storageChangeSubject.asObservable();
  }

  triggerStorageChange(): void {
    this.storageChangeSubject.next('storageChanged');
  }
}
