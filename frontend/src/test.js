import axios from 'axios';
import React from 'react';


class Test extends React.Component {
    state = {name : 'zain'} 
    onsubmit = (e) => {
        e.preventDefault();

        const Uname = {
            name : this.state.name,
        }

        console.log(this.state.name);

        axios.post('http://localhost:3001/users/name', Uname)
            .then(res => {
                console.log(res.data);
        })

    }

    onChangedName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.onsubmit}>
                    <input type='text' value={this.state.name} onChange={this.onChangedName} />
                    <input type='submit' />
                </form>
            </div>

        );
    }
}
 
export default Test;