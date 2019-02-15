import React, {Component} from 'react';
import EventListener from 'react-event-listener'

import Portal from './Portal'

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleCloseOutside, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleCloseOutside, false)
    }

    handleCloseOutside = (e) => {
        e.preventDefault()
        const eventTarget = e.target
        const exceptionClass = e.target.classList.contains("react-datepicker__day")

        const isClickInside = this.node !== null && this.node.contains(eventTarget)

        if (!isClickInside && !exceptionClass) {
            this.props.onClose()
        }
    }

    handleKeyDown = (ev) => {
        if (ev.key === 'Escape') {
            this.props.onClose()
        }
    }

    render() {
        return (
            <EventListener target="window" onKeyDown={this.handleKeyDown}>
                <Portal>
                    <div className="overlay">
                        {/*<div style={{backgroundColor: 'white', width: '100%',height:'100%'}}>*/}
                        <div className="dialog"
                            style={{backgroundColor: 'white'}}
                            ref={childRef => this.node = childRef}
                        >
                            {this.props.children}
                            <button onClick={this.props.onClose}>Close</button>
                        </div>
                    </div>
                </Portal>
            </EventListener>
        );
    }
}

export default Modal;