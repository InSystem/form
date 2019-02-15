import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error}, label }) => (
    <div>
        {label &&
        <div>
            <label htmlFor={input.name}>
                {label}
            </label>
        </div>}
        <DatePicker
            {...input}
            value={input.value ? moment(input.value).format("MM/DD/YYYY") : null}
        />
        {touched && error && <div style={{color: 'red'}}>{error}</div>}
    </div>
);

export default renderDatePicker