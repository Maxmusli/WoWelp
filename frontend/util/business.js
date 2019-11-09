export const fetchBusinesses = (data) => {
  return (
    $.ajax({
      url: '/api/businesses',
      method: 'get',
      data
    })
  )
}

export const fetchBusiness = id => (

  $.ajax({
    url: `/api/businesses/${id}`,
    method: 'get',
  })
  
)

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);