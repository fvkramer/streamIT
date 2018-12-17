import React from 'react';
import { Link } from 'react-router-dom';

class MastHeadSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(e) {
    this.setState({
      searchQuery: e.target.value
    })
  }

  render() {
    return (
      <div className="masthead-search">
        <form className="masthead-search-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={(e) => this.update(e)}/>
          <Link to={`/results/${this.state.searchQuery}`}>
            <button id="search-icon-legacy"
              className="masthead-search-button"
              aria-label="Search"><i id="i-tag" className="fa fa-search"></i></button>
          </Link>
        </form>
      </div>
    )
  }
}

export default MastHeadSearch;