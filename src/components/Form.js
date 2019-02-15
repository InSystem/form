import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import './Form.css'
import ComboBox from './ComboBox'
import renderDatePicker from './DatePicker'

const suggestions = [
    "Иванова Мария Ивановна",
    "Петрова Светлана Александровна",
    "Шемякова Юлия Алексеевна",
]

const suggestions2 = [
    "Долгих Нина Степановна",
    "Смык Дарья Васильевна",
    "Горячева Татьяна Павловна",
    "Иванова Мария Ивановна",
    "Петрова Светлана Александровна",
    "Шемякова Юлия Алексеевна",
]

const required = value => value ? undefined : 'Required'

class SimpleForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        const {values} = this.props.simpleForm
        e.preventDefault()
        console.log(values)
    }

    render() {
        const {pristine, reset, submitting, input} = this.props
        const placeholder = 'Начните набирать или выберите из списка'
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <h4>Реквизиты</h4>
                <fieldset>
                <div>
                    <Field
                        options={suggestions}
                        component={ComboBox}
                        label="Выберите Сеть*"
                        className="col-md-6"
                        name="networks"
                        validate={[required]}
                        placeholder={placeholder}
                    />
                </div>
                <div>
                    <Field
                        options={suggestions2}
                        component={ComboBox}
                        label="Выберите объект*"
                        className="col-md-6"
                        name="objects"
                        validate={[required]}
                        placeholder={placeholder}
                    />
                </div>
                <div>
                    <Field
                        component={renderDatePicker}
                        name="date"
                        label="Выберите дату"
                        validate={[required]}
                    />
                </div>
                <div>
                    <button type="submit"
                            disabled={pristine || submitting}
                    >
                        Создать заявку
                    </button>
                </div>
                </fieldset>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    simpleForm: state.form.main,
});

SimpleForm = connect(
    mapStateToProps
)(SimpleForm);

export default reduxForm({
    form: 'main'
})(SimpleForm)