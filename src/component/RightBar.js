import React from 'react';
import './css/RightBar.scss';
import Reservation from './img/icon-reservation.png';
import Img_ai from './img/img_ai.png';
import Img_mb from './img/img_mb.png';
import Img_wx from './img/img_wx.png';

class RightBar extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[
				{
					icon:Reservation,
					txt:"网上预约"
				},
				{	
					icon:Img_ai,
					txt:"AI客服"
				},
				{	
					icon:Img_mb,
					txt:"微信端"
				},
				{	
					icon:Img_wx,
					txt:"咨询投诉"
				}
			]
		}
	} 
	render(){
		const list = this.state.list.map((item,index) => {
			return(<li key={index}>
					<img src={item.icon} />
					<p>{item.txt}</p>
				   </li>);
		})
		return(
			<div className="RightBar">
				<ul>
					{list}
				</ul>
		    </div>
		)
	}
} 
export default RightBar;