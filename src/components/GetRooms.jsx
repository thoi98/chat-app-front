import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ROOMS = gql`{
    AllRooms{
        _id
        name
    }
}`;


function GetRooms(){
    
    const {loading,error,data,fetchMore} = useQuery(GET_ROOMS,{
        variables:{
            offset:0,
            limit:2,
        },
        pollInterval:2000,
    });

    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error :(</p>;
    console.log(data)
    return data.AllRooms.map(({_id,name})=>(
        <div key={_id}>
            <p>
                {name}
            </p>
        </div>
    ));
}

export default GetRooms;