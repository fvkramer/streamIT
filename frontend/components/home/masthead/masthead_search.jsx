import React from 'react';

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
    // e.preventDefault();
    //need to redirect to .com/results
  }

  update() {
    this.setState({
      searchQuery: e.target.value
    })
  }

  render() {
    return (
      <div className="masthead-search">
        <form className="masthead-search-form">
          <input type="text" onChange={this.update}/>
          <button id="search-icon-legacy" 
            className="masthead-search-button" 
            aria-label="Search"><i id="i-tag" className="fa fa-search"></i></button>
        </form>
      </div>
    )
  }
}

export default MastHeadSearch;