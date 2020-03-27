import React from 'react'

function Overview(props) {
  let recentReviews = props.reviews.slice(-4)
  var businesses = props.businesses
  let content = []
  for (let i = recentReviews.length - 1; i >= 0; i--) {
    let temp = {}
    temp['review'] = recentReviews[i]
    temp['business'] = businesses[recentReviews[i].business_id]
    content.push(temp)
  }
  let display = content.map((info, idx) => {
    return (
      <li key={idx}>
        <div>
          {info.business.name}
        </div>
        <div>
          {info.review.rating}
        </div>
        <div>
          {info.review.body}
        </div>
      </li>
    )
  })
  return (
    <ul>
      <li>Most Recent Activity</li>
      {display}
    </ul>
  )
}

export default Overview