import React from 'react';
import ReactDOM from 'react-dom';
import './newsListStyles.css';

const NewsListItem = () =>{
    return(
        <div className="parentContainer">
            <div className="mainContainer">
                <img
                src="https://images.firstpost.com/wp-content/uploads/2018/02/Bitcoin-Social.jpg" 
                alt=""
                width="125px"
                height="125px" />
                <div className="textWrapper">
                    <p className="newsDescription">` Cryptocurrency still does not have a blanket ban in India but a
           draft is being worked upon</p>
           <p clssName="newsDescription">A ban on crypto had come into effect on 6 July last year via a
           circular issued by the RBI. The post Cryptocurrency still does not
           have a blanket ban in India but a draft is being worked upon
           appeared first on</p>
           <p>-tech2 News Staff</p>
                </div>
            </div>
        </div>
    );
};

export default NewsListItem;