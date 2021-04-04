import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Fackbook extends Component {
    componentClicked = () => {
        console.log('click')
    }
    responseFacebook = (response) => {
        console.log(response);
    }
    render() {
        return (
            <div>
                <FacebookLogin
                    appId="175110907668100"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            </div>)
    }
}