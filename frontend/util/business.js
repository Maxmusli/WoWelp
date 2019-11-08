export const fetchBusinesses = (data) => {
  debugger
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