import React, { Component } from 'react'

import { Tabs, Card, Button } from '@abc/protonpack'

import './index.css'
import starter from './starter.png'
import fitness from './fitness.png'
import bodybuilder from './bodybuilder.png'
import trx from './trx.png'
import pilates from './pilates.png'
import zumba from './zumba.png'
import promo from './promo.png'

export class Join extends Component {
  render() {
    return (
      <div className="join" id="join">
        <Tabs
          titlesClassName="tabs"
          titleClassName={active => (active ? 'tab active' : 'tab')}
          abcId="tabs"
          items={[
            {
              key: 'plans',
              panel: (
                <div className="plans">
                  <Card abcId="" noPadding={true} shadow={false}>
                    <img src={starter} alt="" />
                    <Button mode="secondary"></Button>
                  </Card>
                  <Card abcId="" noPadding={true} shadow={false}>
                    <img src={fitness} alt="" />
                    <Button mode="secondary"></Button>
                  </Card>
                  <Card abcId="" noPadding={true} shadow={false}>
                    <img src={bodybuilder} alt="" />
                    <Button mode="secondary"></Button>
                  </Card>
                </div>
              ),
              title: 'Plans',
            },
            {
              key: 'Classes',
              panel: (
                <div className="plans">
                  <Card abcId="" noPadding={true} shadow={false}>
                    <img src={trx} alt="" />
                    <Button mode="secondary"></Button>
                  </Card>
                  <Card abcId="" noPadding={true} shadow={false}>
                    <img src={pilates} alt="" />
                    <Button mode="secondary"></Button>
                  </Card>
                  <Card abcId="" noPadding={true} shadow={false}>
                    <img src={zumba} alt="" />
                    <Button mode="secondary"></Button>
                  </Card>
                </div>
              ),
              title: 'Classes',
            },
            {
              key: 'Promo',
              panel: (
                <div style={{ display: 'flex', justifyContent: 'center', width: 1140 }}>
                  <img src={promo} alt="" />
                </div>
              ),
              title: 'Promo',
            },
          ]}
        />
      </div>
    )
  }
}
