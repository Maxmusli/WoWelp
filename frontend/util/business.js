export const fetchBusinesses = (data) => {
  return (
    $.ajax({
      url: '/api/businesses',
      method: 'get',
      data
    })
  )
}
// export const fetchBusinesses = (data) => (

//   $.ajax({
//     url: '/api/businesses',
//     method: 'get',
//     data
//   })
  
// )