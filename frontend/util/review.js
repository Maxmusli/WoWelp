export const createReview = review => (
  $.ajax({
    method: 'post',
    url: 'api/reviews',
    data: { review }
  })
)