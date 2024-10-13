import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  // Initial list of phone contacts
  contacts: { name: string, phoneNumber: string, email: string }[] = [
    { name: 'John Doe', phoneNumber: '09123456789', email: 'john.doe@example.com' },
    { name: 'Jane Smith', phoneNumber: '09234567890', email: 'jane.smith@example.com' },
  ];

  // Initialize new contact with default values
  newContact = { name: '', phoneNumber: '', email: '' };

  // Add a new contact
  addContact() {
    if (this.newContact.name.trim() && this.newContact.phoneNumber.trim() && this.newContact.email.trim()) {
      this.contacts.push({ ...this.newContact });
      this.newContact = { name: '', phoneNumber: '', email: '' };  // Reset the form
    } else {
      alert('Please enter valid details for the contact.');
    }
  }

  // Remove a contact by name
  removeContact(contactName: string) {
    this.contacts = this.contacts.filter(contact => contact.name !== contactName);
  }
}
