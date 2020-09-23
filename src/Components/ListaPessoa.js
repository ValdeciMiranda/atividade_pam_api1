import React from 'react';
import axios from 'axios';

export default class ListaPessoa extends React.Component {
    state = {
        pessoas: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
            this.setState({ pessoas: res.data });
        })
    }

    render() {
        return (
            <ul>
                { this.state.pessoas.map(pessoa => <li>{pessoa.name}</li>) }
            </ul>
        )
    }

}