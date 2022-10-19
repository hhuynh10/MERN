import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [team, setTeam] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allTeams')
        .then((res)=> {
            console.log(res)
            setTeam(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=> {
            console.log(res)
            const filterTeam = team.filter((team)=>(team._id !== id))
            setTeam(filterTeam)
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div className='col-8 mx-auto'>
            <table className='table border border-dark border-3 mt-3'>
            <Link to="/player/addplayer" className="text-warning fs-2">Add Player</Link>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Team Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    team.map((team)=>(
                        <tr>
                            <td><Link to={`/players/${team._id}/edit`} className="text-warning fs-4">{team.name}</Link></td>
                            <td className="text-dark fs-4">{team.position}</td>
                            <td><button className='btn btn-danger mt-1' onClick={(e)=>deleteHandler(team._id)}>Delete</button></td>
                        </tr>
                    ))
                }
                    </tbody>
                </table>
            </table>
        </div>
    )
}

export default Home