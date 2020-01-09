# WoWelp

[Live Demo!](https://wowelp.herokuapp.com/#/)

WoWelp is a web application clone of Yelp with World of Warcraft theme that helps users to find businesses based on categoried and location, and allows user to write reviews for the businesses.

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

On the backend, there are two attributes, near and find, taken from filter params. Near representing location and find representing category. When user enters a location or catergory, business will be selected if it has the matching attribute. Attributes are stored on the client's computer with cookies so that search results remain the same when user refreshes the page.

## Business Index Page

A list of businesses that matches the search attributes will be displayed on the index page.



## Business Show Page

## Reviews
