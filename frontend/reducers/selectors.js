export const selectReviewsForBusiness = ({ businesses, reviews }, business) => {
  
  return business.reviewIds.map(reviewId => reviews[reviewId]);
};

export const selectBusiness = ({ businesses }, businessId) => {
  return businesses[businessId] || { reviewIds: [] };
};

export const selectBusinesses = (busiensses, attrs) => {
  let selectedBusinesses = [];

  businesses.map(business => {
    if (attrs.every(val => business.siteFeatures[val])) {
      selectBusinesses.push(business)
    }
  })
};