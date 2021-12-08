import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

// import styles from './Section.module.scss';

class ContactForm extends Component {
    static propTypes = { title: PropTypes.string };
    state = {
        name: '',
        number: '',
    };

    nameId = shortid.generate();
    numberId = shortid.generate();
    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };
    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleInputChange}
                        id={this.nameId}
                    />
                </label>
                <label htmlFor={this.numberId}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleInputChange}
                        id={this.numberId}
                    />
                </label>
                <button type="sumbit">Add contact</button>
            </form>
        );
    }
}
export default ContactForm;
