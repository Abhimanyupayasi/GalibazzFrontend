// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import { User, useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import Header from './components/Header';
import Home from './components/Home';
import GaliBazz from './components/GaliBazz';
import OurGoal from './components/OurGoal';
import Phone from './components/Phone';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';
import AllPostPage from './pages/AllPostPage';



function App() {

    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    useEffect(() => {
        if(user){
            setIsAuthenticated(true);
        }
        }, [user]);


    
console.log(isAuthenticated);


 return(
 <>
<Header/>
 <HomePage/>




{/* <LoginButton /> */}
 </>
 );
  
}
 

 export default App;

// src/App.jsx
// src/App.jsx
// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// function App() {
//   const { loginWithRedirect, logout, isAuthenticated, getIdTokenClaims } = useAuth0();

//   const handleVerifyToken = async () => {
//     try {
//       const token = await getIdTokenClaims();
//       console.log('Token:', token.__raw);

//       const response = await fetch('http://localhost:3000/verify-token', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token.__raw}`
//         },
//         body: JSON.stringify({ token: token.__raw })
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error verifying token:', error);
//     }
//   };

//   return (
//     <div>
//       {!isAuthenticated ? (
//         <button onClick={() => loginWithRedirect()}>Log In</button>
//       ) : (
//         <>
//           <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
//           <button onClick={handleVerifyToken}>Verify Token</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;



// import React from 'react'
// import AuthComponent from './components/AuthComponent'
// import LoginButton from './components/Buttons/LoginButton'
// import { GlobeDemo } from './components/GlobeDemo'

// function App() {
//   return (
//     <div>
//         {/* <AuthComponent/> */}
//         <LoginButton/>
        
//     </div>
//   )
// }

// export default App