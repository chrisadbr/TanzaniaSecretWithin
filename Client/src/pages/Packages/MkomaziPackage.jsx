import React from 'react'
import './MkomaziPackage.css';
import Button from '../../components/Button/Button';

function MkomaziPackage() {
  return (
    <div className='mkomazi-package__container'>
      <div className="mkomazi-package__wrapper">
        <div className="mkomazi-package__card">
          <div className="card__container">
            <div className="card-bcg" />
            <div className="card-footer">
              <p className="card-footer-text">
                2 Days 1 Night Package
              </p>
            </div>
          </div>
        </div>
        <div className="mkomazi-package__trips">
          <div className="mkomazi-package__trips-container">
            <div className="trips-header">
              <h1>Mkomazi National Park Safari</h1>
              <p>Rhino Viewing Tour</p>
            </div>
            <div className="mkomazi-trips_body">
              <div className="mkomazi-trips_body-item">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">1</span>
                </div>
                <div className="trips-body_item-text">
                  Ealy in the Morning pick – up from your hotel and departure to Mkomazi
                  National Park, arrive in time for a full day game viewing, after lunch break,
                  we’ll continue with game viewing until evening back to the Camp dinner and
                  Overnight stay.
                </div>
              </div>
              <div className="mkomazi-trips_body-item">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">2</span>
                </div>
                <div className="trips-body_item-text">
                  After breakfast start a Half Day game viewing taking a packed Lunch to maximize
                  our time most of the animals that you will see are endangered species particularly
                  the black rhino and wild dogs. After an exciting Half Day of wildlife viewing, you will
                  drive to your next destination.
                </div>
              </div>
              <div className="trips-body__button-container">
                <Button type='btn-wide' content='Book now' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MkomaziPackage