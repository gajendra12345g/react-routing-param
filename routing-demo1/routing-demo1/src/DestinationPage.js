import { useLocation } from 'react-router-dom';
const DestinationPage = () => {
    // Retrieve the query parameters from the location object
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get('name');
    // const age = params.get('age');
    return (
      <div>
        <h2>Name: {name}</h2>
        {/* <h2>Age: {age}</h2> */}
      </div>
    );
  };
  export default DestinationPage;