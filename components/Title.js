import React from 'react'

module.exports = React.createClass({
  render () {
    let titleInitial = this.props.titleName.slice(0,1).toUpperCase();
    return (
        <section className="title" id={this.props.titleId }>
            <h2 className={"title--" + titleInitial}>{this.props.titleName}</h2>
        </section>
    )
  }
});