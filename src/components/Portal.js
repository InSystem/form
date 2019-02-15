import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './Portal.css'

const modalRoot = document.getElementById('modal-root');

class Portal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

export default Portal