import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';

const Locations = () => {
    const [locationsData, setLocationsData] = useState([])
    useEffect(() => {
        axios.get("./logements.json")
        .then(res => setLocationsData(res.data))
    })
    return (
        <main>
            {locationsData.map((location, id) => (
                <Card key={id} location={location}/>
            ))}
        </main>
    )
}
export default Locations
