import React, {Component} from 'react';
import './index.css'

import {Confirmation} from '@abc/protonpack'

class Promo extends Component {
    state = {joined: false}

    render() {
        return (
            <div className="promo">

                <h4>You are One Step Away from</h4>
                <h3>Perfect Body</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className="form">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Phone Number"/>
                    <button onClick={() => this.setState({joined: true})}>Request a
                        Guest Pass</button>
                </div>

                <Confirmation abcId="" open={this.state.joined} onCancel={() => this.setState({joined: false})}>
                    Thank You! We will contact you shortly…
                </Confirmation>
            </div>
        );
    }
}

export default Promo;