# WoWelp

[Live Demo!](https://wowelp.herokuapp.com/#/)

WoWelp is a web application clone of Yelp with World of Warcraft theme that helps users to find businesses based on categories and locations and allows users to write reviews for the businesses.

## Technologies

* Frontend: React/Redux, HTML5, CSS
* Backend: Ruby on Rails, PostgreSQL, Jbuilder
* [Google Map API](https://developers.google.com/maps/documentation/)

## Features

* Frontend to Backend user authentication using BCrypt
* Allow search for businesses based on name, location, categories
* Display business location on map on index page and individual show page
* Users are able to view, create, edit, and delete reviews for businesses

## Homepage

Users can search businesses by name, location, or categories. They can also view businesses by clicking categories or cities.

![homepage](gifs/homepage.gif)

On the backend, there are two attributes, near and find, taken from filter params. Near representing location and find representing category. When user enters a location or catergory, business will be selected if it has the matching attribute. Attributes are stored on the client's computer with cookies so that search results remain the same when user refreshes the page.

```javascript
Business.where(
  "lower(city) LIKE ? or lower(address) LIKE ?", 
  "%#{location.downcase}%", 
  "%#{location.downcase}%"
)

Business.where(
  "lower(category) LIKE ? or lower(sub_category) LIKE ? or lower(name) LIKE ?",
  "%#{category[1..3].downcase}%", 
  "%#{category[1..3].downcase}%", 
  "%#{category[1..3].downcase}%"
)
```
```javascript
cookies[:near] = params[:filters][:near]
cookies[:find] = params[:filters][:find]

@business = Business.near_location(cookies[:near])
@matches = Business.find_business(cookies[:find])
@businesses = @business.select { |business| @matches.include?(business) }
```

## Business Index Page

A list of businesses that matches the search attributes will be displayed on the index page. Users filter the list of businesses with price range and other attributes such as reservation.

![indexpage](gifs/indexpage.gif)

Local state was used to keep track of the selected filter attributes. Once filter attribute is selected, function `handleFilter` will be used to select the matching businesses and update the list of businesses to only contain the matching businesses. 

```javascript
handleFilter(e, type) {
  e.preventDefault();

  let selectedBusinesses = [];
  let filterAttrs = this.state.attrs;
  let priceAttrs = this.state.priceArr;
  
  businesses.map(business => {
  priceAttrs.forEach(attr => {
    if (business.price_range === attr && !selectedBusinesses.includes(business)) {
      if (filterAttrs.every(
        sub => {
          return business[sub] === 'Yes'
        }
      )) {
        selectedBusinesses.push(business)
        }
     }
    })
  })
 }
```

## Business Show Page

Show page will display informations about the specific business. 

![showpage](gifs/show_page.gif)

## Write/Edit/Delete Review

Users can read reviews about the business and write a review for the business. Users can also edit or delete their own reviews. Edit/delete review button will only appear when the current user matches the author of that review.

![review](gifs/review.gif)
