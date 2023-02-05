import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeEmail } from '../../actions/authAction';

// import { Container } from './styles';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.trocarEmail = this.trocarEmail.bind(this);
  }

  trocarEmail() {
    let email = document.getElementById("email").value;

    this.props.changeEmail( email );
  }


  render() {
    return (
      <div>
        Pagina Home...
        <p>E-mail: {this.props.email}</p>
        <input type="email" id="email"/>
        <button onClick={this.trocarEmail}>Trocar Email</button>
        <Link to="/sobre">Ir para pagina sobre</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.authReducer.email,
  pass: state.authReducer.pass,
});

const mapActionsToProps = {
  changeEmail
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
