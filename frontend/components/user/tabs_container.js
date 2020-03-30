import { connect } from 'react-redux';
import Tabs from './tabs.jsx';

const mapStateToProps = (state, ownProps) => {
  const reviews = []
  for (let i in ownProps.userReviews) {
    reviews.push(ownProps.userReviews[i])
  }
  
  return {
    tabSections: [
      { 
        title: 'Profile Overview', 
        content: reviews, 
        businesses: ownProps.reviewBusinesses ,
        user: ownProps.user
      },
      { 
        title: 'Reviews', 
        content: reviews, 
        businesses: ownProps.reviewBusinesses 
      }
    ]
  }
}

export default connect(mapStateToProps)(Tabs)