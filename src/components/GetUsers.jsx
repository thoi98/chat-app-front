import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ApolloConsumer } from '@apollo/client';

const GET_USERS = gql`{
    AllRooms{
        _id
        name
    }
}
`;

function GetUsers(){
        
    const {loading,error,data} = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error :(</p>;
    
        return data.AllRooms.map(({_id,name})=>(
            <div key={_id}>
                <p>
                    {name}
                </p>
            </div>
    ));
}

export default GetUsers;