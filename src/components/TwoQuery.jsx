import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ROOMS = gql`{
    AllRooms{
        _id
        name
    }
}`;

const GET_CHAT = gql`
    query ($roomId:ID!)
    {
        getChat(roomId:$roomId)
        {
            chat
        }
}`;

function TwoQuery(){
    const {loading,error,data} = useQuery(GET_ROOMS);

    const {loading:loadingC,error:errorC,data:dataC} = useQuery(GET_CHAT,{
        variables:{
            roomId: "608851227be4796a8463607a",
        },
    });

    // if (objRooms.loading) return <p>Loading...</p>;
    
    // if (objRooms.error) return <p>Error :(</p>;
    const res1 = data.AllRooms.map(({_id,name})=>(
        <div key={_id}>
            <p>
                {name}
            </p>
        </div>
    ));

    

    // if (objChat.loading) return <p>Loading...</p>;
    
    // if (objChat.error) return <p>Error :(</p>;
    const res2 = dataC.getChat.chat.map(txt => <p>{txt}</p>);
    
    return [res1,res2];
}

export default TwoQuery;