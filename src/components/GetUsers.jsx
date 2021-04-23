import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_USERS = gql`{
    userList {
        _id
        username
    }
}
`;

function GetUsers(){
        
    const {loading,error,data} = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error :(</p>;
    console.log(data)
        return data.userList.map(({_id,username})=>(
            <div key={_id}>
                <p>
                    {username}
                </p>
            </div>
    ));
}

export default GetUsers;