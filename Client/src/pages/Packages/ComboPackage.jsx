import React from 'react'
import './ComboPackage.css'
import Button from '../../components/Button/Button'

function ComboPackage() {
  return (
    <div className='combo-package__container'>
      <div className="combo-package__wrapper">
        <div className="combo-package__trips">
          <div className="combo-package__trips-container">
            <div className="trips-header">
              <h1>Northen Circuit Safari</h1>
            </div>
            <div className="combo-trips_body">
              <div className="combo-trips_body-item">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">1</span>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <h6>- &nbsp;Tarangire</h6>
                </div>
                <div className="trips-body_item-text">
                  Drive to Tarangire National Park for game drive, enjoy viewing groups of
                  Elephants and other animals’ dinner and overnight at booked Lodge in Karatu town.
                </div>
              </div>
              <div className="combo-trips_body-item-xtra">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">2</span>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <h6>- &nbsp;Serengeti</h6>
                </div>
                <div className="trips-body_item-text">
                  After your breakfast with picnic lunch for full day game drive, we will
                  drive to Serengeti national park via Ngorongoro crater main gate, enjoy
                  viewing the vast natural wildness sanctuary, migrating herds of wild bests,
                  Hartebeest, Zebras, Buffalo, Elephants, Lions stalking their prey, huge
                  ostriches, Dinner and overnight at booked Lodge/ Camp site.
                </div>
              </div>
              <div className="combo-trips_body-item">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">3</span>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <h6>- &nbsp;Full day game drive at Serengeti</h6>
                </div>
                <div className="trips-body_item-text">
                  After breakfast full day safari experience in Serengeti national park with your
                  picnic lunch until late evening return back to the lodge/Camp site for dinner and
                  overnight stay.
                </div>
              </div>
              <div className="combo-trips_body-item">
                <div className="trips-body_item-header">
                  <h6>Day</h6> <span className="item-count">4</span>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <h6>- &nbsp;Ngorongoro</h6>
                </div>
                <div className="trips-body_item-text">
                  After breakfast you will drive to Ngorongoro crater where you will be able to
                  Descending down the creator floor, for a exploration with your picnic lunch,
                  around afternoon ascend from the creator and back to Arusha.
                </div>
              </div>
              <div className="trips-body__button-container">
                <Button type='btn-wide' content='Book now' />
              </div>
            </div>
          </div>
        </div>
        <div className="combo-package__card">
          <div className="combo-card__container">
            <div className="combo-card_bcg" />
            <div className="card-footer">
              <p className="card-footer-text">
                3 - 4 Days Package
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComboPackage