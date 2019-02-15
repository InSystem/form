import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Form from './components/Form';
import Modal from './components/Modal'

import store from './store';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            showModal: false
        }
    }

    handleOpen = () => {
        this.setState({
            showModal: true
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }


    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <button onClick={this.handleOpen}>
                        {'Открыть модальное окно'}
                    </button>
                    {this.state.showModal &&
                        <Modal onClose={this.handleClose}>
                            <Form/>
                        </Modal>
                    }
                </div>
            </Provider>
        );
    }
}

export default App;
