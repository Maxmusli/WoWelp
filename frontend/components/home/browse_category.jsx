import React from 'react';
import { withRouter } from 'react-router-dom';

class BrowseCategory extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e, filter) {
    e.preventDefault();
    
    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', filter)
          .then(() => { this.props.history.push(`/search?find=${filter}&near=${this.props.near}`) })
      });
  };
  // handleRestaurants(e) {
  //   e.preventDefault();
    
  //   if (!this.props.near) {
  //     this.props.near = 'Dalaran';
  //   }
    
  //   this.props.changeFilter('near', this.props.near)
  //     .then(() => {
  //       this.props.changeFilter('find', 'Restaurant')
  //         .then(() => { this.props.history.push('/search?find=Restaurant&near=Dalaran') })
  //     });
  // };

  render () {
    
    return (
      <div className="browse-category">
        <div className="browse-category-wrapper">
          <div className="browse-category-title">
            Browse Businesses by Category
            </div>
          <ul className="browse-categories level-1">
            <li className="browse-nav-category">
              <a onClick={(e) => this.handleFilter(e, 'Restaurant')}>
                <img src="https://i.imgur.com/2HCTLcU.png" alt="" />
                <h3>Restaurants</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={(e) => this.handleFilter(e, 'Blacksmithing')}>
                <img src="https://i.imgur.com/xQHZCsP.png" alt="" />
                <h3>Blacksmithing</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={(e) => this.handleFilter(e, 'Barber')}>
                <img src="https://i.imgur.com/Hs6T4to.png" alt="" />
                <h3>Beauty & Barber</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={(e) => this.handleFilter(e, 'Bars')}>
                <img src="https://i.imgur.com/Mwtuz2p.png" alt="" />
                <h3>Bars</h3>
              </a>
            </li>
          </ul>
          <ul className="browse-categories level-2">
            <li className="browse-nav-category">
              <a onClick={(e) => this.handleFilter(e, 'Mechanic')}>
                <img src="https://i.imgur.com/TdKKEKn.png" alt="" />
                <h3>Mechanic</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={(e) => this.handleFilter(e, 'Jewelry Shop')}>
                <img src="https://i.imgur.com/Lhrytji.png" alt="" />
                <h3>Jewelry Shops</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={(e) => this.handleFilter(e, 'Tailoring')}>
                <img src="https://i.imgur.com/geQLRuc.png" alt="" />
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

export default withRouter(BrowseCategory);