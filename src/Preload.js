import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkLogin } from './actions/authAction';

// import { Container } from './styles';

class Preload extends Component {

    constructor(props) {
        super(props);
        this.state = {}; 
      }


    render() {
        return (
            <div>
                <h5>carregando...</h5>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {

  };
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);

export default PreloadConnect;
