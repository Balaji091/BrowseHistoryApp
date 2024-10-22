import { Component } from 'react';
import './index.css';

class HistoryItem extends Component {
  render() {
    const { item,deleteHistory} = this.props;
    const { id,timeAccessed, logoUrl, domainUrl, title } = item;

    return (
      <li className="list-item">
        <p className="time">{timeAccessed}</p>
        <div className="title-domain">
          <img src={logoUrl} alt="logo" />
          <p>{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete-icon"
          className="delete-icon" onClick={()=>{deleteHistory(id)}}
        />
      </li>
    );
  }
}

export default HistoryItem;
