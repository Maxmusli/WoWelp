import React, { Component } from 'react'

export default class temp extends Component {
  // componentDidUpdate() {
  //   let five = document.getElementById('five');
  //   let four = document.getElementById('four');
  //   let three = document.getElementById('three');
  //   let two = document.getElementById('two');
  //   let one = document.getElementById('one');
  // }

  handleEventListener(e, type, star) {
    e.preventDefault()

    let five = document.getElementById('five');
    let four = document.getElementById('four');
    let three = document.getElementById('three');
    let two = document.getElementById('two');
    let one = document.getElementById('one');

    if (type === 'mouseover') {
      star.addEventListener('mouseover', () => {
        five.style.backgroundColor = '#dd050b';
        four.style.backgroundColor = '#dd050b';
        three.style.backgroundColor = '#dd050b';
        two.style.backgroundColor = '#dd050b';
        one.style.backgroundColor = '#dd050b';
      })
    }

    if (type === 'mouseout') {
      star.addEventListener('mouseout', () => {
        five.style.backgroundColor = '';
        four.style.backgroundColor = '';
        three.style.backgroundColor = '';
        two.style.backgroundColor = '';
        one.style.backgroundColor = '';
      })
    }
  }

  render() {
    return (
      <div>
        <input
          type="radio" name="rating" className="one"
          value={5} onChange={this.handleInput('rating')}
          checked={this.state.rating === 5 ? true : false}
          onMouseOver={e => this.handleEventListener(e, 'mouseover', one)}
          onMouseOut={e => this.handleEventListener(e, 'mouseout', one)}
        />
        <label id="one" >
          <i className="far fa-star"></i>
        </label>

        <input
          type="radio" name="rating" className="two"
          value={4} onChange={this.handleInput('rating')}
          checked={this.state.rating === 4 ? true : false}
          onMouseOver={e => this.handleEventListener(e, 'mouseover', two)}
          onMouseOut={e => this.handleEventListener(e, 'mouseout', two)}
        />
        <label id="two" >
          <i className="far fa-star"></i>
        </label>

        <input
          type="radio" name="rating" className="three"
          value={3} onChange={this.handleInput('rating')}
          checked={this.state.rating === 3 ? true : false}
          onMouseOver={e => this.handleEventListener(e, 'mouseover', three)}
          onMouseOut={e => this.handleEventListener(e, 'mouseout', three)}
        />
        <label id="three" >
          <i className="far fa-star"></i>
        </label>

        <input
          type="radio" name="rating" className="four"
          value={2} onChange={this.handleInput('rating')}
          checked={this.state.rating === 2 ? true : false}
          onMouseOver={e => this.handleEventListener(e, 'mouseover', four)}
          onMouseOut={e => this.handleEventListener(e, 'mouseout', four)}
        />
        <label id="four" >
          <i className="far fa-star"></i>
        </label>

        <input
          type="radio" name="rating" className="five"
          value={1} onChange={this.handleInput('rating')}
          checked={this.state.rating === 1 ? true : false}
          onMouseOver={e => this.handleEventListener(e, 'mouseover', five)}
          onMouseOut={e => this.handleEventListener(e, 'mouseout', five)}
        />
        <label id="five" >
          <i className="far fa-star"></i>
        </label>
      </div>
    )
  }
}
