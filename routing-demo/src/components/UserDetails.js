// import React, { useEffect } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';

// function UserDetails() {
//   const { userId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);
//   const name = searchParams.get('name');
//   const [data, setData] = React.useState('');

//   useEffect(() => {
//     const input = document.querySelector('#user-input');
//     if (input) {
//       input.value = data;
//     }
//   }, [data]);

//   const handleChange = (event) => {
//     setData(event.target.value);
//   };

//   const handleClick = () => {
//     const encodedName = encodeURIComponent(data);
//     searchParams.set('name', encodedName);
//     const nextPageUrl = `/user/${userId}?name=${encodedName}`;
//     navigate(nextPageUrl);
//     console.log(data)
//   };
  
  

//   return (
//     <div>
//       <h1 className="text-indigo-600 m-12">User {userId}</h1>
//       <h1>name {name}</h1>
//       <input
//         id="user-input"
//         type="text"
//         onChange={handleChange}
//         value={data}
//       />
//       <button onClick={handleClick}>setSearchParams</button>
//     </div>
//   );
// }

// export default UserDetails;