import React, {Component} from 'react';
import {Header} from '@abc/protonpack'
import './index.css'
import map from './map.png'
import loc from './loc.png'
import email from './email.png'
import phone from './phone.png'

export class Location extends Component {
    render() {
        return (
            <div className="location">
                <img src={map} alt=""/>

                <div className="contacts">
                    <Header as="h2">How & Where to Find Us</Header>

                    <ul>
                        <li>
                            <img src={loc} alt=""/>
                            <Header as="h3" color="textSecondary">Location</Header>
                            <Header as="h4" color="textTertiary">40 Berkeley St, Boston, MA 02116</Header>
                        </li>
                        <li>
                            <img src={email} alt=""/>
                            <Header as="h3" color="textSecondary">Email</Header>
                            <Header as="h4" color="textTertiary">fitness.cloud@abcfinancial.com</Header>
                        </li>
                        <li>
                            <img src={phone} alt=""/>
                            <Header as="h3" color="textSecondary">Phone</Header>
                            <Header as="h4" color="textTertiary">+1 617 848 9200</Header>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

