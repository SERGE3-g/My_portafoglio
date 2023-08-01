import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

interface Contact {
  id?: number;
  nome: string;
  cognome: string;
  telefono?: string; 
  indirizzo?: string; 
  citta?: string; 
  provincia?: string; 
  cap?: string; 
  nazioneForm?: string; 
  email?: string; 
  messaggio?: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

nazione =['Italia','Francia','Germania','Spagna','Inghilterra','Stati Uniti',
'Cina','Giappone','Russia','Brasile','Argentina','Australia','Canada','Messico','India',
'Sudafrica','Egitto','Marocco','Tunisia','Kenya','Tanzania','Etiopia','Nigeria','Senegal',
'Ghana','Camerun','Congo','Madagascar','Mauritius','Seychelles','Nuova Zelanda','Polinesia Francese',
'Thailandia','Cambogia','Vietnam','Indonesia','Filippine','Malesia','Singapore','Myanmar','Laos','Corea del Sud',
'Giordania','Israele','Emirati Arabi Uniti','Qatar','Arabia Saudita','Oman','Kuwait','Bahrein','Iran','Turchia','Grecia',
'Croazia','Portogallo','Svizzera','Austria','Svezia','Norvegia','Danimarca','Finlandia','Olanda','Belgio','Lussemburgo','Irlanda',
'Islanda','Romania','Bulgaria','Ungheria','Repubblica Ceca','Slovacchia','Polonia','Ucraina','Bielorussia','Lituania','Lettonia',
'Estonia','Moldavia','Albania','Montenegro','Serbia','Bosnia ed Erzegovina','Macedonia del Nord','Kosovo','Slovenia','Cipro','Malta',
'Libia','Algeria','Mauritania','Guinea','Guinea Bissau','Guinea Equatoriale','Sierra Leone','Liberia','Costa d\'Avorio','Burkina Faso',
'Lesotho','Botswana','Namibia',]

currentYear = new Date().getFullYear();


/* contactForm: FormGroup;

constructor(private fb: FormBuilder, private contactService: ContactService) {
  this.contactForm = this.fb.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    telefono: [''],
    indirizzo: [''],
    citta: [''],
    provincia: [''],
    cap: [''],
    nazioneForm: [''],
    email: ['', Validators.email],
    messaggio: ['']
  });
}

submitContactForm() {
  this.contactService.saveContact(this.contactForm.value).subscribe((_response: any) => {


  });
} */

  name!: string;
  email!: string;
  message!: string;

  constructor(private contactService: ContactService) {}

  submitForm() {
    const contactData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.contactService.saveContact(contactData).subscribe(response => {
      
    });

    // Opzionale: ripristina i valori del modulo
    this.name = '';
    this.email = '';
    this.message = '';
  }

}