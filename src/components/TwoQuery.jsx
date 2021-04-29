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
    const {loading:l1,data:d1} = useQuery(GET_ROOMS);

    const {loading:l2,data:d2} = useQuery(GET_CHAT,{
        variables:{
            roomId: "608851227be4796a8463607a",
        },
    });

    
    if(l1 || l2) return <p>loading...</p>;


    const res1 = d1.AllRooms.map(({_id,name})=>(
        <div key={_id}>
            <p>
                {name}
            </p>
        </div>
    ));

    const res2 = d2.getChat.chat.map(txt => <p>{txt}</p>);
    
    return [res1,res2];
}

export default TwoQuery;