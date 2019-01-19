import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e, type) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    switch (type) {
      case 'signin':
        this.props.processForm(user);
        break;
      case 'signup':
        this.props.signUp(user);
        break;
      case 'demo':
        user = { username: 'DemoUser', password: 'password' };
        this.props.processForm(user);
        break;
      default:
        return null;
    }
  }


  renderErrors() {
    if (this.props.errors.length >= 1) {
      return (
        <div className="login-errors">
          Invalid Username/Credentials
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="login-form-container">
        {/* onSubmit={this.handleSubmit}  */}
        <form className="login-form-box">
          {this.renderErrors()}
          <br />
          <div className="login-youtube-logo"><img src="https://image.freepik.com/free-icon/youtube-logo_318-33597.jpg" alt="" height="60" width="60" /></div>
          <div className="login-form">
            <br />
            <div onClick={this.props.closeModal} className="login-close-button">X</div>
            <label>
              <input
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <button onClick={e => this.handleSubmit(e, 'signin')} className="submit-button">SIGN IN</button>
            <div className="signup-demo-buttons">
              <button onClick={e => this.handleSubmit(e, 'signup')} className="submit-button">SIGN UP</button>
              <button onClick={e => this.handleSubmit(e, 'demo')} className="submit-button" id="demo">DEMO LOGIN</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
