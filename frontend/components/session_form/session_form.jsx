import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    update(field) {
        return e => (
            this.setState({
                [field]: e.target.value
            })
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        Username
                        <input type="text" onChange={this.update("username")} value={this.state.username}/>
                    </label>

                    <label htmlFor="">
                        Password
                        <input type="text" onChange={this.update("password")} value={this.state.password}/>
                    </label>
                </form>
            </div>
        )
    }
}


export default SessionForm;

