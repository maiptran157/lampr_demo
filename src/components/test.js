import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    formatPostData(obj) {
        const dataToSend = new URLSearchParams(); //take a key value pair
        for (let [key, value] of Object.entries(obj)) {
            //Object.entries return an array of array. 
            //Destructring the array and use Object.entries
            dataToSend.append(key, value);
        }
        return dataToSend;
    }

    async componentDidMount() {
        // const resp = await axios.get('/api/index.php');
        // const user = this.formatPostData({
        //     name: 'Mia',
        //     email: 'learnsPHP@mail.com',
        //     age: '1000'
        // })

        const user = {
            name: 'Mia',
            email: 'learnsPHP@mail.com',
            age: '1000'
        }
        const resp = await axios.post('/api/index.php', user);
        console.log('Server Response:', resp);
    }
    render() {
        return <h1>API Test Component</h1>
    }
}

export default Test;