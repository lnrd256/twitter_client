import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import FormUser from '../containers/form-user';

export default class Index extends Component {

  render() {

    return (
      <div>
      	 <div className="container white login">
          <FormUser/>

         </div>
      </div>
    );
  }
}

