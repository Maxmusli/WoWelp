import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review_actions'
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

const mapDispatchToProps = dispatch => ({
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)