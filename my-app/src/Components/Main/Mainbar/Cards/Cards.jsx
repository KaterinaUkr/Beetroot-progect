import { MonthlyRevenue } from './Monthly_Revenue/MonthlyRevenue'
import { NewOrders } from './New_Orders/NewOrders'
import { PendingReviews } from './Pending_Reviews/PendingReviews'
import { NewCustomers } from './New_Customers/NewCustomers'


import './Cards.scss'
export const Cards = () => 
	<div className="cards gap-4">
		<MonthlyRevenue></MonthlyRevenue>
		<NewOrders></NewOrders>
		<PendingReviews></PendingReviews>
		<NewCustomers></NewCustomers>
	</div>
		
	
	