import React from 'react';

export default class Loader extends React.Component {

  componentDidMount() {
    const footer = document.querySelector('.footer');
    footer.style.display = 'none'
  }

  componentWillUnmount() {
    const footer = document.querySelector('.footer');
    footer.style.display = ''
  }

  render() {
    return (
      <div className="loader">
        <img src={window.loader} alt="" />
      </div>

    )
  }

}