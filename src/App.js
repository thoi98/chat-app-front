import './App.css';

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// import GetRooms from './components/GetRooms';
// import {useState} from 'react';
// import GetChat from './components/Getchat';
import TwoQuery from './components/TwoQuery';

import { InMemoryCache } from "@apollo/client";

import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {

        feed: offsetLimitPagination()
      },
    },
  },
});




const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache:cache,
});



function App() {
  // const [show,setShow] = useState(<p>Nothing</p>);

  return (
    <ApolloProvider client={client}>
      <div>
        {/* <button onClick={()=>{setShow(<GetRooms/>);}}>Fetch</button> */}
        {/* {show} */}
        <TwoQuery/>
      </div>
    </ApolloProvider>
  );
}

export default App;
