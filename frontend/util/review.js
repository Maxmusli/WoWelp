export const createReview = review => (
  $.ajax({
    method: 'post',
    url: 'api/reviews',
    data: { review }
  })
)

export const fetchReview = reviewId => (
  $.ajax({
    method: 'get',
    url: `api/reviews/${reviewId}`
  })
)

export const updateReview = review => {
  debugger

  return (
    $.ajax({
      method: 'patch',
      url: `api/reviews/${review.id}`,
      data: { review }
    })
  )
}

export const removeReview = reviewId => (
  $.ajax({
    method: 'delete',
    url: `api/reviews/${reviewId}`,
  })
)