import React, {Suspense} from'react';
import {createBrowserRouter} from 'react-router-dom';
import { Lazyloading } from '../Components/Lazyloading';

//importacion con carga perezosa para mejor rendimiento ya que carga solo lo necesario
const Home = React.lazy(() => import('../Pages/Home/index'));
const WearDetail = React.lazy(() => import('../Pages/WearDetail/index'));
const Login = React.lazy(() => import('../Pages/Login/index'));
const Signup = React.lazy(() => import('../Pages/Signup/index'));

//importacion clasica pero con carga completa (consume mas memoria porque carga todo)
//import {Home} from '../Pages/Home';
//import {WearDetail} from '../Pages/WearDetail';

export const router = createBrowserRouter([
  {
    path: "/",
    //element: <Home />
    element: (
      <Suspense fallback={<Lazyloading />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: "/wear-detail",
    //element: <WearDetail />
    element: (
    <Suspense fallback={<Lazyloading />}>
      <WearDetail />
    </Suspense>
    )
  },
  {
    path: "/login",
    //element: <WearDetail />
    element: (
    <Suspense fallback={<Lazyloading />}>
      <Login />
    </Suspense>
    )
  },
  {
    path: "/signup",
    //element: <WearDetail />
    element: (
    <Suspense fallback={<Lazyloading />}>
      <Signup />
    </Suspense>
    )
  }
])
