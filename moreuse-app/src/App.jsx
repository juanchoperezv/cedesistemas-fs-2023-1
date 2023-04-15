import { useState } from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './Routes/Router';
import { Globalstyle } from './globalStyles';

export const App = () =>
{
  return (
    <>
    <Globalstyle />
    <RouterProvider router={router}/>
    </>
  )
}
