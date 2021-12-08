import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';
import ContactListItem from '../ContactListItem/';

class ContactList extends Component {
    static propTypes = { title: PropTypes.string };
    state = {
        contacts: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    };
    render() {
        const { contacts, onDelete } = this.props;
        return (
            <ul className={styles.contact_list}>
                {contacts.map(contact => (
                    <ContactListItem
                        key={contact.id}
                        contact={contact}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        );
    }
}
export default ContactList;
