import React from 'react'

export default class WorkIntro extends React.Component {
  render () {
    return (
        <div className="work__intro">
            <div className="work__desc">
                <h6>Description</h6>
                <p>{this.props.desc}</p>
            </div>
            <div className="work__meta">
                <div className="work__meta--item">
                    <h6>Client</h6><span>{this.props.client}</span>
                </div>
                <div className="work__meta--item">
                    <h6>Roles</h6><span>{this.props.roles}</span>
                </div>
            </div>
        </div>
    )
  }
};