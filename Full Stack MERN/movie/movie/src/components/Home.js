import React, {useState, useEffect} from 'react'
import AddMovie from './AddMovie'
import AllMovie from './AllMovie'


const Home = () => {

    return (
        <div>
            <AddMovie />
            <AllMovie />
        </div>
    )
}

export default Home