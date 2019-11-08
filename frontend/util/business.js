export const fetchBusinesses = (data) => {
  return (
  $.ajax({
    url: 'api/businesses',
    method: 'get',
    data
  })
  )
}