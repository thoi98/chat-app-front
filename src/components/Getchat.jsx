import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_CHAT = gql`
    query ($roomId:ID!)
    {
        getChat(roomId:$roomId)
        {
            chat
        }
    }`;
function Getchat(){
    const {loading,error,data} = useQuery(GET_CHAT,{
        variables:{
            roomId: "608851227be4796a8463607a",
        },
    });

    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error :(</p>;
    console.log(data)
    return data.getChat.chat.map(txt => <p>{txt}</p>);
}

export default Getchat;