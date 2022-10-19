import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div className="list col-12 no-gutter fluid pt-1 pb-2 bg-dark">
            <h1 className="text-light">Team Manager</h1>
            <NavLink to="/players" className="text-warning fs-4">Manage Players</NavLink> | <NavLink to="/players/status" className="text-warning fs-4">Manage Players Status</NavLink>
        </div>
    )
}

export default Header