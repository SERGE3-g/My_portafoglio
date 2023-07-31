import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] | undefined;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe((contacts: Contact[] | undefined) => this.contacts = contacts);
  }

  addContact(firstName: string, lastName: string, email: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    if (!firstName || !lastName || !email) {
      return;
    }

    const newContact: Contact = { firstName, lastName, email };
    this.contactService.createContact(newContact)
      .subscribe((contact: any) => {
        this.contacts.push(contact);
      });
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id)
      .subscribe(() => {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
      });
  }
}
