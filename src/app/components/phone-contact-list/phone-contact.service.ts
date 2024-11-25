import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneContactService {
  private contacts: { name: string, phoneNumber: string, email: string }[] = [
    { name: 'John Doe', phoneNumber: '09123456789', email: 'john.doe@example.com' },
    { name: 'Jane Smith', phoneNumber: '09234567890', email: 'jane.smith@example.com' },
  ];

  // Retrieve the list of contacts
  getContacts() {
    return this.contacts;
  }

  // Add a new contact
  addContact(contact: { name: string, phoneNumber: string, email: string }) {
    this.contacts.push(contact);
  }

  // Remove a contact by name
  removeContact(contactName: string) {
    this.contacts = this.contacts.filter(contact => contact.name !== contactName);
  }
}
