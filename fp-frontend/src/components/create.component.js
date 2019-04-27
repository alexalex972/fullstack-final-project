import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      acc_name: '',
      user_email:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeUserName(e) {
    this.setState({
      acc_name: e.target.value
    })  
  }
  onChangeEmail(e) {
    this.setState({
      user_email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      acc_name: this.state.acc_name,
      user_email: this.state.user_email
    };
    axios.post('http://localhost:5000/user/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      acc_name: '',
      user_email: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>UserName: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.acc_name}
                      onChange={this.onChangeUserName}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.user_email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register User" className="btn btn-info"/>
                </div>
            </form>
        </div>
    )
  }
}