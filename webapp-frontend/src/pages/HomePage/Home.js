import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector} from 'react-redux'
import MenuBar from "../../components/MenuBar"
import "./Home.css"
import RouteViews from '../../utils/RouteViews'

const Home = () => {

    const authUser = useSelector(state => state.auth)
    return (
        <div>
            <Router>
                <MenuBar authUser={authUser} />
                <div className="container">
                    <RouteViews />
                </div>
                
            </Router>
        </div>
    )
}

export default Home
