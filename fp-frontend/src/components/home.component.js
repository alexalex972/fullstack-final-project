import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="text-dark text-center">Welcome to my App!</h2> <br />
                <h4 className="text-dark text-center">This app is build using React, Express and MongoDB</h4> <br />
                <h6 className="text-dark text-center">You can create, update and delete entries in the database. There is also a Weather section which uses the fetch <br />
                    functionality where you can input a name of a city and get information about the current weahter conditions.</h6> <br />
            </div>
        )
    }
}