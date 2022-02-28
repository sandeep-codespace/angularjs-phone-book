class PhoneBookCtrl {
  constructor($log, $http) {
    'ngInject';
    this.name = 'spme test value';
    this.$log = $log;
    this.$http = $http;
    this.srchTxt = '';
    this.contacts = [];
    this.apiHost =
      'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts';
    this.getContacts();
  }
  getIdForContact() {
    return Math.max(...this.contacts.map((o) => o.id), 0) + 1;
  }
  getContacts() {
    return this.$http.get(this.apiHost).then((response) => {
      this.contacts = response.data;
      return response.data;
    });
  }
  addNewContact() {
    var newId = Math.max(...this.contacts.map((o) => o.id), 0) + 1;
    var contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      id: newId,
    };
    this.contacts.push(contact);
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
  }
  getContactList(contactService) {
    return contactService.getContacts().then((data) => {
      this.contacts = data;

      return this.contacts;
    });
  }
  editContact(contact) {
    contact.isEditing = true;
  }
  deleteContact(index) {
    this.contacts.splice(index, 1);
  }
  showMe(indx) {
    if (indx == ind) {
      return true;
    }
  }
  save(contact) {
    contact.isEditing = false;
    };
  }
}
export default PhoneBookCtrl;
