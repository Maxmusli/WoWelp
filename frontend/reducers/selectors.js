export const asArray = ({ businesses }) => (
  Object.keys(businesses).map(key => businesses[key])
);

export const selectBusiness = ({ businesses }, businessId) => {
  return businesses[businessId]
}