import { Component } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  
  public languages = [
    {
      name: 'English',
      code: 'en',
      description: 'Parlo la lingua inglese con livello B2 dal 2018 e ho ottenuto la certificazione IELTS con punteggio 8,0'
    },
    {
      name: 'Italiano',
      code: 'it',
      description: 'Parlo la lingua italiana come madrelingua'
    },
    {
      name: 'Français',
      code: 'fr',
      description: 'Je parle la langue française est ma langue maternelle'
    },
    {
      name: 'Deutsch',
      code: 'de',
      description: 'Ich spreche die deutsche Sprache mit Niveau B seit 2018 und habe die IELTS-Zertifizierung mit 6,5 Punkten erhalten'
    }
   
  ];

  // Variable to hold the selected language code
  public selectedLanguage: string;

  constructor() {
    this.selectedLanguage = 'en';
  }

  public setLanguage(code: string): void {
    this.selectedLanguage = code;
  }

}
