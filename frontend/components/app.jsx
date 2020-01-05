import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import BusinessShowContainer from './business/business_show_container';
import BusinessIndexContainer from './business/business_index_container'
import ReviewFormContainer from './reviews/review_form_container';
import UnderConstruction from './home/under_contruction';
import EditReviewFormContainer from './reviews/edit_review_form_container';
import Modal from "./modal/modal";

export default () => {
  
  return (
    <div>
      <Modal />
      <Switch>
        <ProtectedRoute path="/search/:businessId/review" component={ReviewFormContainer}/>
        <ProtectedRoute path="/search/:businessId/reviews/:reviewId/edit" component={EditReviewFormContainer}/>
        <Route exact path="/search/:businessId" component={BusinessShowContainer} />
        <Route exact path="/search" component={BusinessIndexContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path="/underconstruction" component={UnderConstruction} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
};