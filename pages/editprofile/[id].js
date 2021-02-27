import React from 'react';
import { UserForm } from '../../components/UserForm';

const App = ({ uid }) => {
  return (
    <div className="App">
      <UserForm uid={uid} />
    </div>
  );
};
App.getInitialProps = ({ query }) => {
  const { id } = query;
  return { uid: id };
};
export default App;
