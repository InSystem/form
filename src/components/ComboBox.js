import React, {Component} from 'react'

class ComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            userInput: ''
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            suggestions: this.props.options,
        });
    }

    handleFocus = (event) => {
        const { suggestions } = this.state
        const { options } = this.props

        this.props.input.onFocus()
        event.target.select();

        if(suggestions.length === 0) {
            this.setState({
                suggestions: options
            })
        }

    }
    handleChange = (event) => {

        event.preventDefault()
        const userInput = event.currentTarget.value;

        const filteredSuggestions = this.state.suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().startsWith(userInput.toLowerCase()) === true
        );
        this.setState({
            suggestions: filteredSuggestions,
            userInput
        });
        this.props.input.onChange()
    };

    render() {
        const {input, placeholder, label, className, meta: {touched, error}} = this.props
        return (
            <div className={className}>
                {label &&
                <div>
                    <label htmlFor={input.name}>
                        {label}
                    </label>
                </div>}
                <input
                    {...input}
                    list={input.name}
                    value={this.state.userInput}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                />
                <datalist id={input.name}>
                    {this.state.suggestions.map(function (option, i) {
                        return (
                            <option
                                value={option}
                                key={option}
                            >
                            </option>)
                    })}
                </datalist>
                {touched && error && <div style={{color: 'red'}}>{error}</div>}
            </div>
        )
    }
}

export default ComboBox