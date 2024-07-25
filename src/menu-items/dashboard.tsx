// third-party
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

// assets
import { Home3, HomeTrendUp, Box1 } from 'iconsax-react';

// types
import { NavItemType } from 'types/menu'; // Make sure NavItemType is correctly imported from your types/menu module

import { useGetMenu } from 'api/menu';

const icons = {
  dashboard: HomeTrendUp,
  components: Box1,
  loading: Home3
};

const loadingMenu: NavItemType = {
  id: 'group-dashboard-loading',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  icon: icons.loading,
  children: [
    {
      id: 'dashboard1',
      title: <FormattedMessage id="dashboard" />,
      type: 'collapse',
      icon: icons.loading,
      children: [
        {
          id: 'default1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'analytics1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/analytics',
          breadcrumbs: false
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - API ||============================== //

export const MenuFromAPI = () => {
  const { menu, menuLoading } = useGetMenu();
  const [newDashboardForm, setNewDashboardForm] = useState({ appName: '', secretCode: '', email: '' });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDashboardForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleAddDashboard = () => {
    // Construct new dashboard item
    const newDashboardItem: NavItemType = {
      id: `dashboard-${menu?.children?.length || 1}`, // Generate unique ID
      title: newDashboardForm.appName,
      type: 'item',
      url: `/dashboard/${newDashboardForm.appName.toLowerCase().replace(/\s/g, '-')}`, // URL based on appName
      breadcrumbs: false
    };

    // Add new dashboard item to menu
    const updatedMenu = {
      ...menu!,
      children: [
        ...(menu?.children || []), // Existing children if any
        newDashboardItem
      ]
    };

    // Update the menu state or context here using your API or state management system
    // Example:
    // updateMenu(updatedMenu);
    // Where updateMenu is a function to update the menu state

    // Clear the form after adding
    setNewDashboardForm({ appName: '', secretCode: '', email: '' });
  };

  if (menuLoading) return loadingMenu;

  const subChildrenList = (children: NavItemType[]): NavItemType[] => {
    return children?.map((subList: NavItemType) => {
      return fillItem(subList);
    }) || [];
  };

  const itemList = (subList: NavItemType): NavItemType => {
    let list = fillItem(subList);

    // if collapsible item, we need to fill its children as well
    if (subList.type === 'collapse') {
      list.children = subChildrenList(subList.children!);
    }
    return list;
  };

  const childrenList: NavItemType[] = menu?.children?.map((subList: NavItemType) => {
    return itemList(subList);
  }) || [];

  let menuList = fillItem(menu!, childrenList);
  return menuList;
};

function fillItem(item: NavItemType, children?: NavItemType[]): NavItemType {
  return {
    ...item,
    title: <FormattedMessage id={`${item?.title}`} />,
    // @ts-ignore
    icon: icons[item?.icon],
    ...(children && { children })
  };
}


/*
// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { Home3, HomeTrendUp, Box1 } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

import { useGetMenu } from 'api/menu';

const icons = {
  dashboard: HomeTrendUp,
  components: Box1,
  loading: Home3
};

const loadingMenu: NavItemType = {
  id: 'group-dashboard-loading',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  icon: icons.loading,
  children: [
    {
      id: 'dashboard1',
      title: <FormattedMessage id="dashboard" />,
      type: 'collapse',
      icon: icons.loading,
      children: [
        {
          id: 'default1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'analytics1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/analytics',
          breadcrumbs: false
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - API ||============================== //

export const MenuFromAPI = () => {
  const { menu, menuLoading } = useGetMenu();

  if (menuLoading) return loadingMenu;

  const subChildrenList = (children: NavItemType[]) => {
    return children?.map((subList: NavItemType) => {
      return fillItem(subList);
    });
  };

  const itemList = (subList: NavItemType) => {
    let list = fillItem(subList);

    // if collapsible item, we need to feel its children as well
    if (subList.type === 'collapse') {
      list.children = subChildrenList(subList.children!);
    }
    return list;
  };

  const childrenList: NavItemType[] | undefined = menu?.children?.map((subList: NavItemType) => {
    return itemList(subList);
  });

  let menuList = fillItem(menu, childrenList);
  return menuList;
};

function fillItem(item: NavItemType, children?: NavItemType[] | undefined) {
  return {
    ...item,
    title: <FormattedMessage id={`${item?.title}`} />,
    // @ts-ignore
    icon: icons[item?.icon],
    ...(children && { children })
  };
}

*/