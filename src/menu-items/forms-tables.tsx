// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { Book, PasswordCheck, Next, RowVertical, CpuCharge, TableDocument, Subtitle } from 'iconsax-react';

// TYPE
import { NavItemType } from 'types/menu';

// ICONS
const icons = {
  formsTable: Book,
  validation: PasswordCheck,
  wizard: Next,
  layout: RowVertical,
  plugins: CpuCharge,
  reactTables: TableDocument,
  muiTables: Subtitle
};

// ==============================|| MENU ITEMS - FORMS & TABLES ||============================== //

const formsTables: NavItemType = {
  id: 'group-forms-tables',
  title: <FormattedMessage id="forms-tables" />,
  icon: icons.formsTable,
  type: 'group',
  children: [
    {
      id: 'validation',
      title: <FormattedMessage id="forms-validate-example" />,
      type: 'item',
      url: '/forms/validation',
      icon: icons.validation
    },
    {
      id: 'wizard',
      title: <FormattedMessage id="demo-payment-form" />,
      type: 'item',
      url: '/forms/wizard',
      icon: icons.wizard
    },
    {
      id: 'forms-layout',
      title: <FormattedMessage id="layout" />,
      type: 'collapse',
      icon: icons.layout,
      children: [
        {
          id: 'basic',
          title: <FormattedMessage id="basic" />,
          type: 'item',
          url: '/forms/layout/basic'
        },
        {
          id: 'multi-column',
          title: <FormattedMessage id="multi-column" />,
          type: 'item',
          url: '/forms/layout/multi-column'
        },
        {
          id: 'action-bar',
          title: <FormattedMessage id="action-bar" />,
          type: 'item',
          url: '/forms/layout/action-bar'
        },
        {
          id: 'sticky-bar',
          title: <FormattedMessage id="sticky-bar" />,
          type: 'item',
          url: '/forms/layout/sticky-bar'
        }
      ]
    },
    {
      id: 'forms-plugins',
      title: <FormattedMessage id="plugins-demos" />,
      type: 'collapse',
      icon: icons.plugins,
      children: [
        {
          id: 'mask',
          title: <FormattedMessage id="mask" />,
          type: 'item',
          url: '/forms/plugins/mask'
        },
        {
          id: 'clipboard',
          title: <FormattedMessage id="clipboard" />,
          type: 'item',
          url: '/forms/plugins/clipboard'
        },
        {
          id: 'editor',
          title: <FormattedMessage id="editor" />,
          type: 'item',
          url: '/forms/plugins/editor'
        },
        {
          id: 'dropzone',
          title: <FormattedMessage id="dropzone" />,
          type: 'item',
          url: '/forms/plugins/dropzone'
        }
      ]
    },
    {
      id: 'react-tables',
      title: <FormattedMessage id="Demo-of-tables" />,
      type: 'collapse',
      icon: icons.reactTables,
      children: [
        {
          id: 'rt-table',
          title: <FormattedMessage id="basic" />,
          type: 'item',
          url: '/tables/react-table/basic'
        },
        {
          id: 'rt-sorting',
          title: <FormattedMessage id="sorting" />,
          type: 'item',
          url: '/tables/react-table/sorting'
        },
        {
          id: 'rt-filtering',
          title: <FormattedMessage id="filtering" />,
          type: 'item',
          url: '/tables/react-table/filtering'
        },
        {
          id: 'rt-grouping',
          title: <FormattedMessage id="grouping" />,
          type: 'item',
          url: '/tables/react-table/grouping'
        },
        {
          id: 'rt-pagination',
          title: <FormattedMessage id="pagination" />,
          type: 'item',
          url: '/tables/react-table/pagination'
        },
        {
          id: 'rt-row-selection',
          title: <FormattedMessage id="row-selection" />,
          type: 'item',
          url: '/tables/react-table/row-selection'
        },
        {
          id: 'rt-expanding',
          title: <FormattedMessage id="expanding" />,
          type: 'item',
          url: '/tables/react-table/expanding'
        },
        {
          id: 'rt-editable',
          title: <FormattedMessage id="editable" />,
          type: 'item',
          url: '/tables/react-table/editable'
        },
        {
          id: 'rt-drag-drop',
          title: <FormattedMessage id="drag-drop" />,
          type: 'item',
          url: '/tables/react-table/drag-drop'
        },
        {
          id: 'rt-column-hiding',
          title: <FormattedMessage id="column-hiding" />,
          type: 'item',
          url: '/tables/react-table/column-hiding'
        },
        {
          id: 'rt-column-resizing',
          title: <FormattedMessage id="column-resizing" />,
          type: 'item',
          url: '/tables/react-table/column-resizing'
        },
        {
          id: 'rt-sticky-table',
          title: <FormattedMessage id="sticky" />,
          type: 'item',
          url: '/tables/react-table/sticky-table'
        },
        {
          id: 'rt-umbrella',
          title: <FormattedMessage id="umbrella" />,
          type: 'item',
          url: '/tables/react-table/umbrella'
        },
        {
          id: 'rt-empty',
          title: <FormattedMessage id="empty" />,
          type: 'item',
          url: '/tables/react-table/empty'
        }
      ]
    }

  ]
};

export default formsTables;
