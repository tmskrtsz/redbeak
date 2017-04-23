import React from 'react'

export default class WorkFull extends React.Component {
  render () {
    let hasParagraph
    let hasImage

    if (this.props.subtitle) {
        hasParagraph = (
        <div className="work--item">
            <h6>{this.props.subtitle}</h6>
            <p>{this.props.text}</p>
        </div>
        )
    }

    if (this.props.image) {
        hasImage = (
            <figure>
                <img src={this.props.image} alt={this.props.alt} /> 
                <figcaption>{this.props.caption}</figcaption> 
            </figure>
        )
    }

    return (
        <div className="work__full">
            { hasParagraph }
            { hasImage }
            { this.props.children }
        </div>
    )
  }
};