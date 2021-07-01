import React, {Component} from 'react';

import {ElasticGrid, Header, Text} from '@abc/protonpack'

import './index.css'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'

const items = [
    {
        pic: one,
        text: 'FITNESS has everything I need in one place. I’ll never pay for a studio membership again!',
        name: 'Floyd Miles',
        date: '2 Year Member'
    }, {
        pic: two,
        text: 'You have a super clean gym - your equipment is state of the art. Your locker rooms are bar none the cleanest and nicest in the city. Friendly staff who engage with the customer.',
        name: 'Brooklyn Simmons',
        date: '1 Year Member'
    }, {
        pic: three,
        text: 'FITNESS has given me the motivation and focus that I need to keep working out during this difficult time. I’m thankful! The location, layout, equipment, design and impeccable service are top notch!',
        name: 'Marvin McKinney',
        date: '2 Year Member'
    }, {
        pic: four,
        text: 'Well kept and placed equipment, extremely clean, never an off smell or damp locker room, friendly staff, high end touches, and the gym is never over crowded.',
        name: 'Bessie Cooper',
        date: '2 Year Member'
    },
]

export class Feedback extends Component {
    render() {
        return (
            <div className="feedback">
                <Header as="h2">What Our Clients Say About Us</Header>

                <ElasticGrid abcId="" displayData={items} labelledBy="" minimalColumnWidth="540px"
                             renderItem={(item) => (<>
                                 <img src={item.pic} alt=""/>
                                 <div>
                                     <Text as="p">{item.text}</Text>
                                     <Header as="h4" color="textTertiary" weight={800}>{item.name}</Header>
                                     <Header as="h5" color="textTertiary" weight={600}>{item.date}</Header>
                                     <a href="#">Facebook Profile</a>
                                 </div>
                             </>)}/>
            </div>
        );
    }
}

