import React, { Component } from 'react'

export class Test extends Component {

state ={
    test : 'test'
}


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>This is test</h1>
            </div>
        )
    }
}

export default Test
