export const selectReviewsForBusiness = ({ businesses, reviews }, business) => {
  
  return business.reviewIds.map(reviewId => reviews[reviewId]);
};

export const selectBusiness = ({ businesses }, businessId) => {
  return businesses[businessId] || { reviewIds: [] };
};

export const selectBusinesses = (businesses, attrs) => {
  let selectedBusinesses = [];

  businesses.map(business => {
    if (attrs.every(
      sub => {
        if (sub === 'cheap') {
          business[price_rang] === 'cheap'
        } else if (sub === 'medium') {
          business[price_rang] === 'medium'
        } else if (sub === 'expensive') {
          business[price_rang] === 'expensive'
        } else if (sub === 'luxury') {
          business[price_rang] === 'luxury'
        } else {
          business[sub] === 'Yes'
        }
      })) {
      selectedBusinesses.push(business)
    }
  })
};