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

