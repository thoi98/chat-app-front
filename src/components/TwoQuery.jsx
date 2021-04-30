import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_CHAT = gql`
    query ($roomId:ID!, $cursor:Int, $old:Boolean, $psize:Int)
    {
        getChat(roomId:$roomId,cursor:$cursor,old:$old,psize:$psize)
        {
            chat
            count
            first
            last
        }
    }`;

function TwoQuery(){

    const {loading:l1,data:d1} = useQuery(GET_CHAT,{
        variables:{
            roomId: "608851227be4796a8463607a",
        },
    });
    let cursor=null;
    if(l1) console.log("loading l1");
    else{
        cursor = d1?.getChat?.count-1;
        console.log(cursor);
    }
    


    const {loading:l2,data:d2} = useQuery(GET_CHAT,{
        variables:{
            roomId: "608851227be4796a8463607a",
            cursor: cursor,
            old: false,
        },
        pollInterval: 2000,
        fetchPolicy: 'network-only',
        skip:!cursor,
    });

    
    if(l1 || l2) return <p>loading...</p>;


    const res1 = d1?.getChat?.chat.map(txt => <p>{txt}</p>);

    const res2 = d2?.getChat?.chat.map(txt => <p>{txt}</p>);
    
    return [res1,res2];
}

export default TwoQuery;