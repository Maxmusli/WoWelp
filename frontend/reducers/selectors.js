export const asArray = ({ businesses }) => (
  Object.keys(businesses).map(key => businesses[key])
);