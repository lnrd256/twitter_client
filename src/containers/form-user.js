import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
class FormUser extends Component{

	render(){
		const {handleSubmit}=this.props;
		console.log(handleSubmit)
		return(
			<form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" className="form-control"/>
              <hr/>
              <label>Username</label>
              <input type="text" name="email" placeholder="Username" className="form-control"/>
              <hr/>
              <p className="text_right">
                 <button className="btn btn-success btn-fill pull-right" type="submit">Guardar</button>
              </p>
            </form>
			)
	}
}

export default reduxForm({
  form:'UserForm',
  fields:['name','email']
})(FormUser)