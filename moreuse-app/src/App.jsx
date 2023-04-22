import { useState } from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './Routes/Router';
import { Globalstyle } from './globalStyles';
import { MenuContextStore } from './Contexts/MenuContext';

export const App = () =>
{
  return (
    <>
      <Globalstyle />
      <MenuContextStore>
        <RouterProvider router={router}/>
      </MenuContextStore>
    </>
  )
}
