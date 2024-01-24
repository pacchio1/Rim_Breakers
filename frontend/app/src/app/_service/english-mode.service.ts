import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {

  isEnglishMode: boolean = false;
  storedValue: string | null = ''
  parsedValue: boolean = false;

  toggleLanguage(): void {
    this.isEnglishMode = !this.isEnglishMode;
    console.log('isEnglishMode', this.isEnglishMode)
    localStorage.setItem('englishMode', this.isEnglishMode.toString())
  }

  themeSettled(): boolean {
    this.storedValue = localStorage.getItem('englishMode')
    console.log(this.storedValue)
    if(this.storedValue) {
      this.parsedValue = JSON.parse(this.storedValue);
      console.log('en', this.parsedValue)

      if(this.parsedValue) {
        console.log('en', this.isEnglishMode)
        this.isEnglishMode = this.parsedValue;          
      }           

    }

    return this.isEnglishMode
      
  }
  
}
