import React, { useState } from 'react';
import Nav from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState();
  console.log(page);

  return (
    <React.Fragment>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Nav setPage={setPage} />
          <div className="content">{page === 'planets' ? <Planets /> : <People />}</div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
