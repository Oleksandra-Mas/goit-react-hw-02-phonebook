import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

// import styles from './Section.module.scss';

class Filter extends Component {
    static propTypes = { filter: PropTypes.string };
    handleFilterChange = event => {
        const { value } = event.target;
        this.props.onChange(value);
    };
    filterId = shortid.generate();
    render() {
        const { filter, title } = this.props;
        return (
            <label htmlFor={this.filterId}>
                <span>{title}</span>
                <input
                    type="text"
                    name="filter"
                    required
                    value={filter}
                    onChange={this.handleFilterChange}
                    id={this.filterId}
                />
            </label>
        );
    }
}
export default Filter;
