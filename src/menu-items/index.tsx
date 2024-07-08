// PROJECT IMPORTS
import applications from './applications';
import widget from './widget';
import formsTables from './forms-tables';

import pages from './pages';

// TYPES
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [widget, applications, formsTables, pages]
};

export default menuItems;
