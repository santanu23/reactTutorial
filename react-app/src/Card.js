import React, { Component } from 'react';

class Card extends Component {
  render(){
    return (
    <div className="card">
      <div className="card-image">
        <img src={this.props.imageUrl} alt={"Company Logo of " + this.props.cardTitle}/>
        <span className="card-title">{this.props.cardTitle}</span>
      </div>
      <div className="card-content">
        {this.props.children}
      </div> 
      <div className="card-action">
        <a href={this.props.actionUrl}>{this.props.actionText}</a>
      </div>       
    </div>)
  }
}

export default Card;