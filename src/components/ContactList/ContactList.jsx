import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.scss';

class ContactList extends Component {
    static propTypes = { title: PropTypes.string };
    state = {
        name: '',
        number: '',
    };
    render() {
        const { contacts, onDelete } = this.props;
        return (
            <ul className={styles.contact_list}>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
                        <button
                            type="button"
                            onClick={() => {
                                onDelete(contact.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}
export default ContactList;
