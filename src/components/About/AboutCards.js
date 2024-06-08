import React from 'react'
import "./About.css";
export const AboutCards = (props) => {
  return (
    <div className='about-plantcards'>
      <div className='about-image'>
        <div className='green-background'>
          <div className='aboutcard-image'>
            <img src={props.val.img} />
          </div>
        </div>

      </div>
      <div className="aboutSecondaryContainer">
        <div className='aboutcard-details'>
          {
            props.val.data.map((datas) => {
              return (
                <p key={Math.random()} className='about-para'><span className='bold'>{datas.name}:</span> {datas.value} </p>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}
