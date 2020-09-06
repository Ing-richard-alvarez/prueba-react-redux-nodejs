import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Swal from 'sweetalert2';

import { Header } from './components/Header';
import CreateMessage  from './components/CreateMessage';
import { getAllMessage, createMessage } from './services/serviceMessage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: {},
      messages: [],
      numberOfMessages: 0
    };
  }

  createMessage = ( e ) => {
    createMessage(this.state.message)
      .then( response => {
        
        let data = response.msg;

        console.log(data);

        this.setState({numberOfMessages: this.state.numberOfMessages + 1});

        if(typeof data.message === 'string') {
          
            console.log(typeof data.message);

            Swal.fire({
                title: 'Do you want see the message?',
                text: "You can see the message",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, do it!'
            }).then((result) => {
                if (result.value) {
                Swal.fire(
                    'It is your message!',
                    data.message,
                    'success'
                )
                }
            })

        } else if(typeof data.message === 'object') {
            console.log(Object.keys(data.message).length);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a message'
            })
        }

    });
  };

  getAllMessage = () => {
    getAllMessage()
      .then( messages => {
        console.log(messages);
        this.setState({messages: messages, numberOfMessages: messages.length});
      });
  }

  onChangeForm = ( e ) => {

    let message = this.state.message;
    
    if(e.target.id === 'message') {
      message = e.target.value;
    }

    this.setState({ message });
  }

  render() {
    return(
      <div className="App"> 
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                      <CreateMessage
                        message={this.state.message}
                        onChangeForm={this.onChangeForm}
                        createMessage={this.createMessage}
                      >

                      </CreateMessage>
                    </div>
                </div>
            </div>
      </div>
    );
  }

}

// https://github.com/bbachi/react-nodejs-example/blob/master/my-app/src/App.js
export default App;
