import './App.css';

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import GetUsers from './components/GetUsers';

import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const client = new ApolloClient({
  uri: 'http://localhost:4000',
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <GetUsers/>
      </div>
    </ApolloProvider>
  );
}

export default App;
