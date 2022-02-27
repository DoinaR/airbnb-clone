import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'

export default function Card({ item }) {
  const { title, description, coverImg, price, openSpots, location } = item
  const { rating } = item.stats
  const { reviewCount } = item.stats

  let badgeText
  if (openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={coverImg} className='card--image' />
      <div className='card--stats'>
        <img src='' /> <AiTwotoneStar className='star' />
        <span>{rating} </span>
        <span className='gray'>({reviewCount}) • </span>
        <span className='gray'>{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className='bold'>From ${price}</span> / person
      </p>
    </div>
  )
}
