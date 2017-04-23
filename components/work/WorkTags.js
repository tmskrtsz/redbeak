import React from 'react'

export default class WorkTags extends React.Component {
  render () {
    var tagStr = [this.props.tag]

    const tagsList = tagStr.toString().split(", ")

    return (
        <div className="work__tags">
            {tagsList.map(function(tag, index){
                return <span key={ index }>{ tag }</span>;
            })}
        </div>
    )
  }
};