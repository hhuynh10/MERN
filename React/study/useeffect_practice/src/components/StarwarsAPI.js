import React, {useState, useEffect} from 'react'

const StarwarsAPI = () => {

    const [API, setAPI] = useState('people')
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`https://swapi.dev/api//${API}`)
            .then(response => {
                return response.json();
            }).then(response => {
                setItems(response.results);
            }).catch(err=>{
                console.log(err);
            });
    }, [API])

    return (
        <div className='bg mt-4 p-4 col-6 mx-auto'>
            <button className='btn btn-info btn-sm' onClick={()=> setAPI('people')}>People</button> 
            <button className='btn btn-success btn-sm ms-2' onClick={()=> setAPI('starships')}>Starships</button> 
            <button className='btn btn-warning btn-sm ms-2' onClick={()=> setAPI('planets')}>Planets</button>
            {
                items.map((item, index)=> (
                    <p className='text-light mt-2' key={index}>{item.name}</p>
                ))
            }
        </div>
    )
}

export default StarwarsAPI