import { Component, OnInit } from '@angular/core';
import { PhoneContactService } from './phone-contact.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrls: ['./phone-contact-list.component.css']
})
export class PhoneContactListComponent implements OnInit {
  contacts: { name: string, phoneNumber: string, email: string }[] = [];
  newContact = { name: '', phoneNumber: '', email: '' };

  constructor(private phoneContactService: PhoneContactService) {}

  ngOnInit() {
    this.contacts = this.phoneContactService.getContacts(); // Fetch initial contact list
  }

  // Add a new contact
  addContact() {
    if (this.newContact.name.trim() && this.newContact.phoneNumber.trim() && this.newContact.email.trim()) {
      this.phoneContactService.addContact({ ...this.newContact }); // Add via service
      this.newContact = { name: '', phoneNumber: '', email: '' }; // Reset the form
      this.contacts = this.phoneContactService.getContacts(); // Refresh the list
    } else {
      alert('Please enter valid details for the contact.');
    }
  }

  // Remove a contact by name
  removeContact(contactName: string) {
    this.phoneContactService.removeContact(contactName); // Remove via service
    this.contacts = this.phoneContactService.getContacts(); // Refresh the list
  }
}
