import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
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

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly url: string = 'http://localhost:3000/contacts'; 

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url, contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    const url = `${this.url}/${contact.id}`;
    return this.http.put<Contact>(url, contact);
  }

  deleteContact(id: number): Observable<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete<void>(url);
  }

  saveContact(contactData: any) {
    return this.http.post(this.url, contactData);
  }
}
