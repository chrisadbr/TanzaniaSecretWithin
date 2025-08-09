import React from 'react';
import './MikumiPackage.css';
import Button from '../../components/Button/Button';

function MikumiPackage() {
  return (
    <div className='mikumi-package__container'>
      <div className="mikumi-package__wrapper">
        <div className="mikumi-package__trips">
          <div className="mikumi-package__trips-container">
            <div className="trips-header">
              <h1>Mikumi National Park Safari</h1>
            </div>
            <div className="trips-body">
              <div className="trips-body_item">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">1</span>
                </div>
                <div className="trips-body_item-text">
                  Transfer to Mikumi National Park, Arrive Morogoro then drive to Mikumi
                  National Park check inn then evening Masai Village tour dinner and Overnight
                  at your Booked Lodge.
                </div>
              </div>
              <div className="trips-body_item">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">2</span>
                </div>
                <div className="trips-body_item-text">
                  After breakfast, start a Full day game drive for inside the park have look for the
                  Wildebeest, Elephants and many more, Lunch break in the park, processed with evening
                  game drive back your booked Lodge for Dinner and overnight.
                </div>
              </div>
              <div className="trips-body_item">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">3</span>
                </div>
                <div className="trips-body_item-text">
                  Half day game drive till Lunch time after Lunch drive to Morogoro and head to your next
                  destination.
                </div>
              </div>
              <div className="trips-body__button-container">
                <Button type='btn-wide' content='Book now' />
              </div>
            </div>
          </div>
        </div>
        <div className="mikumi-package__card">
          <div className="card__container">
            <div className="card-bcg" />
            <div className="card-footer">
              <p className="card-footer-text">
                2 - 3 Days Package
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MikumiPackage