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