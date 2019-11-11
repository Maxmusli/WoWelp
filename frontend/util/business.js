export const fetchBusinesses = (filters) => {
  return (
    $.ajax({
      url: '/api/businesses',
      method: 'get',
      data: {filters}
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