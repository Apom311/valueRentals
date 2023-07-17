import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Headlines:</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src={require('../assets/snapLogo.png')}
                    text='Buy now, Pay later with Snap Financing!'
                    label='Financing'
                    path='/services'
                    />
                    <CardItem
                    src={require('../assets/snapLink.png')}
                    text='Apply Today!'
                    label='Application'
                    path='/services'
                    />
                    <CardItem
                    src={require('../assets/AWF-logo2.png')}
                    text='NEW DELIVERIES EVERY WEEK!'
                    label='Warehouse'
                    path='/services'
                    />
                    <CardItem
                    src={require('../assets/kingBed.png')}
                    text='Example Product'
                    label='Product'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    
                    <CardItem
                    src={require('../assets/AWF-logo2.png')}
                    text='NEW DELIVERIES EVERY WEEK!'
                    label='Warehouse'
                    path='/services'
                    />
                    <CardItem
                    src={require('../assets/kingBed.png')}
                    text='Example Product'
                    label='Product'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards