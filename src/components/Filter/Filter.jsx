import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import styles from './Section.module.scss';

class Filter extends Component {
    static propTypes = { filter: PropTypes.string };
    handleFilterChange = event => {
        const { value } = event.target;
        this.props.onChange(value);
        // this.setState(prevState => ({
        //     [name]: value,
        // }));
    };
    render() {
        const { filter } = this.props;
        return (
            <input
                type="text"
                name="filter"
                required
                value={filter}
                onChange={this.handleFilterChange}
            />
        );
    }
}
export default Filter;
