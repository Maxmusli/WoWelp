import React from 'react';

export default class BrowseCategory extends React.Component {

  render () {
    return (
      <div className="browse-category">
        <div className="browse-category-wrapper">
          <div className="browse-category-title">
            Browse Businesses by Category
            </div>
          <ul className="browse-categories level-1">
            <li className="browse-nav-category">
              <a href="">
                <img src="restaurant_icon.png" alt="" />
                <h3>Restaurants</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a href="">
                <img src="blacksmithing_icon.png" alt="" />
                <h3>Blacksmithing</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a href="">
                <img src="barber_icon.png" alt="" />
                <h3>Beauty & Barber</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a href="">
                <img src="beer_icon.png" alt="" />
                <h3>Bars</h3>
              </a>
            </li>
          </ul>
          <ul className="browse-categories level-2">
            <li className="browse-nav-category">
              <a href="">
                <img src="mechanic_icon.png" alt="" />
                <h3>Mechanic</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a href="">
                <img src="jewelry_icon.png" alt="" />
                <h3>Jewelry Shops</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a href="">
                <img src="tailoring_icon.png" alt="" />
                <h3>Tailoring</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a className="more-cate" href="">
                <i className="fas fa-ellipsis-h"></i>
                <h3>More Categories</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}