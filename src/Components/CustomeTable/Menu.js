import React from 'react';

import { FaEye } from 'react-icons/fa';

const PopoverMenu = {
  listAction: [
    {
      id: 1,
      name: 'View',
      subIcon: <FaEye className='fitIcon' />,
      route: '/View_Edit/view'
    },
    {
      id: 2,
      name: 'Edit',
      subIcon: <FaEye className='fitIcon' />,
      route: '/View_Edit/edit'
    }
  ],

};

export default PopoverMenu;
