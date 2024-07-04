// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { Story, Fatrows, PresentionChart } from 'iconsax-react';

// TYPE
import { NavItemType } from 'types/menu';

// ICONS
const icons = {
  widgets: Story,
  statistics: Story,
  data: Fatrows,
  chart: PresentionChart
};

// ==============================|| MENU ITEMS - WIDGETS ||============================== //

const widget: NavItemType = {
  id: 'group-widget',
  title: <FormattedMessage id="widgets" />,
  icon: icons.widgets,
  type: 'group',
  children: [
    {
      id: 'statistics',
      title: <FormattedMessage id="statistics" />,
      type: 'item',
      url: '/widget/statistics',
      icon: icons.chart
    },
    {
      id: 'data',
      title: <FormattedMessage id="data" />,
      type: 'item',
      url: '/widget/data',
      icon: icons.data
    },
    {
      id: 'Genarate Legal Document',
      title: <FormattedMessage id="Genarate Legal Document" />,
      type: 'item',
      url: '/widget/chart',
      icon: icons.statistics
    }
  ]
};

export default widget;
