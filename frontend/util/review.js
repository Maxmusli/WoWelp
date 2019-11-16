export const createReview = review => (
  $.ajax({
    method: 'post',
    url: 'api/reviews',
    data: { review }
  })
)

export const removeReview = reviewId => (
  $.ajax({
    method: 'delete',
    url: `api/reviews/${reviewId}`,
  })
)