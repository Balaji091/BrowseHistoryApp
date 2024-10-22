import {Component} from "react"
import './index.css'
import HistoryItem from '../HistoryItem'
class HistoryList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searchInput: '',
          browseList: this.props.initialHistoryList, // Receiving initialHistoryList as props
        };
      }
    setInput=(event)=>{
        this.setState({searchInput:event.target.value})
    }
    deleteHistory=(id)=>{
        const{browseList}=this.state
        const deleteHistoryList=browseList.filter((item)=>item.id!==id)
        this.setState({browseList:deleteHistoryList})
    }
    render()
    {   
        const{searchInput,browseList}=this.state
        const resultsHistory=browseList.filter((item)=>item.title.toLowerCase().includes(searchInput.toLowerCase()))
        return(
            <div className="container">
                <div className="nav-bar">
                        <img  className="logo"src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png " alt="logo"/>
                        <div className="search">
                            <img  className="search-icon"src="https://assets.ccbp.in/frontend/react-js/search-img.png " alt="search-icon"/>
                            <input type="search"  value={searchInput}placeholder="search here" onChange={this.setInput}/>
                        </div>
                </div>
                <div className="history-list">
                    <ul>
                        {resultsHistory.length>0?(resultsHistory.map((item)=>(<HistoryItem item={item} key={item.id} denleteHistory={this.deleteHistory}/>))):
                        <p>no items found </p>}
                    </ul>
                </div>
            </div>
        )
    }
}
export default HistoryList