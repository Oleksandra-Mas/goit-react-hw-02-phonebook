import { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter/';

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = data => {
        this.checkUniqueName(data.name) === -1
            ? this.setState(prevState => ({
                  contacts: [
                      ...prevState.contacts,
                      { id: shortid.generate(), ...data },
                  ],
              }))
            : alert(`${data.name} is already in contacts`);
    };
    deleteContact = id => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts].filter(
                contact => contact.id !== id,
            ),
        }));
    };

    changeFilter = data => {
        this.setState({ filter: data.toLowerCase() });
    };

    checkUniqueName = name => {
        const { contacts } = this.state;
        return contacts.findIndex(contact => contact.name === name);
    };

    getFilteredContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter),
        );
    };

    render() {
        const { filter } = this.state;
        const filteredContacts = this.getFilteredContacts();
        return (
            <div className="App">
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />
                <h2>Contacts</h2>
                <ContactList
                    contacts={filteredContacts}
                    onDelete={this.deleteContact}
                />
                <Filter
                    title={'Find contacts by name'}
                    filter={filter}
                    onChange={this.changeFilter}
                />
            </div>
        );
    }
}
