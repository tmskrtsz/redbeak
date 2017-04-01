import React from 'react'
import { Link } from 'react-router'

export default class GalleryItem extends React.Component {
    render(){
        return(
            <Link
                className="gallery-item"
                to={this.props.slug + '/'}>
                <img src={this.props.slug + '/index.jpg'} />
            </Link>
        )
    }
}