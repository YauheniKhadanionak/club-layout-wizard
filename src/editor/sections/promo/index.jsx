import React, {Component} from 'react';
import './index.css'
import bg from './bg.png'

class Promo extends Component {
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
                    <button>Request a Guest Pass</button>
                </div>
            </div>
        );
    }
}

export default Promo;