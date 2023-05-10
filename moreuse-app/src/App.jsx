import { useState } from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './Routes/Router';
import { Globalstyle } from './globalStyles';
import { MenuContextStore } from './Contexts/MenuContext';
import { UserContextStore } from './Contexts/UserContext';

export const App = () =>
{
  return (
    <>
      <Globalstyle />
      <UserContextStore>
        <MenuContextStore>
          <RouterProvider router={router}/>
        </MenuContextStore>
      </UserContextStore>
    </>
  )
}
