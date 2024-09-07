import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Wrapper from './Wrapper';
import Contact from './components/Contact';
import Blog from './components/Blog';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import AuthLayout from './layouts/AuthLayout';
import Feed from './components/Feed';
import Login from './components/Login';
import PrivateData from './components/PrivateData';
import FetchPosts from './components/FetchPosts';
import ViewEditProfile from './components/profileComponent/ViewEditProfile';
import CreatePost from './components/CreatePost';
import FetchUser from './components/FetchUser';
import AllPostPage from './pages/AllPostPage';
import AboutPage from './pages/AboutPage';
import ContectPage from './pages/ContectPage';
import BlogPage from './pages/BlogPage';
import EmailVerify from './components/EmailVerify';
import CreatePostPage from './pages/CreatePostPage';
import ProfilePage from './pages/ProfilePage';
import NoAuth from './layouts/NoAuth';
import SinglePostPage from './components/SinglePostPage';
import FindPublicPost from './components/FindPublicPost';
import GaliyaFetch from './components/Galiya/GaliyaFetch';
import PublicGali from './components/Galiya/PublicGali';
import SinglePublicGali from './components/Galiya/SinglePublicGali';
import AuthSingleGaliPage from './components/Galiya/AuthSinglePage';
import SinglePublicSong from './components/Songs/SinglePublicSong';
import SongHome from './components/Songs/SongHome';
import AuthSong from './components/Songs/AuthSong';
import AuthSingleSong from './components/Songs/AuthSingleSong';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Wrapper/>}>

      <Route path='/' element={<App/>}/>
      <Route path='' element={<NoAuth/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='verify-email' element={<EmailVerify/>}/>
        <Route path='contact' element={<ContectPage/>}/>
        <Route path='blog' element={<BlogPage/>}/>
        <Route path="post/:id" element={<SinglePostPage />} />
        <Route path="gali" element={<PublicGali/>} />
        <Route path="gali/:id" element={<SinglePublicGali />} />
        <Route path='song' element={<SongHome/>}/>
        <Route path='song/:id' element={<SinglePublicSong/>}/>
      </Route>
      <Route path='*' element={<AuthLayout/>}>
        <Route path='posts' element={<AllPostPage/>}/>
        <Route path='posts/:id' element={<FindPublicPost/>}/>
        <Route path='profile' element={<ProfilePage/>}/>
        <Route path='create-post' element={<CreatePostPage/>}/>
        <Route path='galiya' element={<GaliyaFetch/>}/>
        <Route path='galiya/:id' element={<AuthSingleGaliPage/>} />
        <Route path='songs' element={<AuthSong/>}/>
        <Route path='songs/:id' element={<AuthSingleSong/>}/>
        <Route path='*' element={<App/>}/>

      </Route>
      
      

      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);







const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;



const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
<Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
   
  </Auth0Provider>
  </Provider>
);