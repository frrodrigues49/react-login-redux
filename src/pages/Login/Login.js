import React, { Component } from 'react';
import CSS from './Login.css';

// import { Container } from './styles';



export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      erroMsg: ''
    };

    this.logar = this.logar.bind(this);
  }
   

  logar() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;

    fetch('https://localhost:3333/auth/authenticate/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' :'*',
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
    .then(json => {

      if (json.error !== ''){
        this.setState({ erroMsg: json.error });
      }
      console.log(json);      
    })


  }


  render() {
    return (
      <div className="container login_area">
        <div className="col-4">
          <div className="form-group">

            <h1>Pagina de Login</h1>
            <p className="error">{this.state.erroMsg}</p>

            <label>Email</label>
            <input type="email" id="email" className="form-control" />

            <label>Senha</label>
            <input type="pass" id="pass" className="form-control" />
            
            <br/>
            <button onClick={this.logar} className="btn btn-success">Logar</button>

          </div>
        </div>
      </div>
    );
  }
}
