'use client';

import { useEffect, useMemo, FC, Fragment } from 'react';

// MATERIAL - UI
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Chip from '@mui/material/Chip';

import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { PatternFormat } from 'react-number-format';
import {
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
  usePagination,
  Column,
  HeaderGroup,
  Row,
  Cell,
  HeaderProps
} from 'react-table';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import Avatar from 'components/@extended/Avatar';
import {
  CSVExport,
  HeaderSort,
  IndeterminateCheckbox,
  SortingSelect,
  TablePagination,
  TableRowSelection
} from 'components/third-party/ReactTable';
import CustomerView from 'sections/apps/customer/CustomerView';
import EmptyTables from 'views/forms-tables/tables/react-table/EmptyTable';

import { useGetCustomer } from 'api/customer';
import { renderFilterTypes, GlobalFilter } from 'utils/react-table';

// ASSETS
//import { Add } from 'iconsax-react';

// TYPES
import type { CustomerList } from 'types/customer';

const avatarImage = '/assets/images/users';

interface Props {
  columns: Column[];
  data: CustomerList[];
  renderRowSubComponent: FC<any>;
}

function ReactTable({ columns, data, renderRowSubComponent }: Props) {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const filterTypes = useMemo(() => renderFilterTypes, []);
  const sortBy = { id: 'id', desc: false };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setHiddenColumns,
    allColumns,
    rows,
    page,
    gotoPage,
    setPageSize,
    state: { globalFilter, selectedRowIds, pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
    setSortBy,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 10, hiddenColumns: ['avatar', 'email'], sortBy: [sortBy] }
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect
  );

  useEffect(() => {
    if (matchDownSM) {
      setHiddenColumns(['age', 'contact', 'visits', 'email', 'status', 'avatar']);
    } else {
      setHiddenColumns(['avatar', 'email']);
    }
  }, [matchDownSM]);

  return (
    <>
      <TableRowSelection selected={Object.keys(selectedRowIds).length} />
      <Stack spacing={3}>
        <Stack
          direction={matchDownSM ? 'column' : 'row'}
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 3, pb: 0 }}
        >
          <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
          <Stack direction={matchDownSM ? 'column' : 'row'} alignItems="center" spacing={2}>
            <SortingSelect sortBy={sortBy.id} setSortBy={setSortBy} allColumns={allColumns} />
            <CSVExport
              data={selectedFlatRows.length > 0 ? selectedFlatRows.map((d: Row) => d.original) : data}
              filename={'customer-list.csv'}
            />
          </Stack>
        </Stack>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup: HeaderGroup<{}>, index: number) => (
              <Fragment key={index}>
                <TableRow {...headerGroup.getHeaderGroupProps()} sx={{ '& > th:first-of-type': { width: '58px' } }}>
                  {headerGroup.headers.map((column: HeaderGroup, i: number) => (
                    <Fragment key={i}>
                      <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                        <HeaderSort column={column} sort />
                      </TableCell>
                    </Fragment>
                  ))}
                </TableRow>
              </Fragment>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row: Row, i: number) => {
              prepareRow(row);
              const rowProps = row.getRowProps();

              return (
                <Fragment key={i}>
                  <TableRow
                    {...row.getRowProps()}
                    onClick={() => {
                      row.toggleRowSelected();
                    }}
                    sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                  >
                    {row.cells.map((cell: Cell, index: number) => (
                      <Fragment key={index}>
                        <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                      </Fragment>
                    ))}
                  </TableRow>
                  {row.isExpanded && renderRowSubComponent({ row, rowProps })}
                </Fragment>
              );
            })}
            <TableRow sx={{ '&:hover': { bgcolor: 'transparent !important' } }}>
              <TableCell sx={{ p: 2, py: 3 }} colSpan={9}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
    </>
  );
}

const CustomerList = () => {
  const { customersLoading: loading, customers: lists } = useGetCustomer();

  const columns = useMemo(
    () => [
      {
        title: 'Row Selection',
        Header: ({ getToggleAllPageRowsSelectedProps }: HeaderProps<{}>) => (
          <IndeterminateCheckbox indeterminate {...getToggleAllPageRowsSelectedProps()} />
        ),
        accessor: 'selection',
        Cell: ({ row }: any) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        disableSortBy: true
      },
      {
        Header: '#',
        accessor: 'id',
        className: 'cell-center'
      },
      {
        Header: 'Customer Name',
        accessor: 'name',
        Cell: ({ row }: { row: Row }) => {
          const { values } = row;
          return (
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar alt="Avatar 1" size="sm" src={`${avatarImage}/avatar-${!values.avatar ? 1 : values.avatar}.png`} />
              <Stack spacing={0}>
                <Typography variant="subtitle1">{values.name}</Typography>
                <Typography color="text.secondary">{values.email}</Typography>
              </Stack>
            </Stack>
          );
        }
      },
      {
        Header: 'Avatar',
        accessor: 'avatar',
        disableSortBy: true
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Contact',
        accessor: 'contact',
        Cell: ({ value }: { value: number }) => (
          <PatternFormat displayType="text" format="+1 (###) ###-####" mask="_" defaultValue={value} />
        )
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-center'
      },
      {
        Header: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }: { value: string }) => {
          switch (value.toString()) {
            case '3':
              return <Chip color="error" label="Rejected" size="small" variant="light" />;
            case '1':
              return <Chip color="success" label="Verified" size="small" variant="light" />;
            case '2':
            default:
              return <Chip color="info" label="Pending" size="small" variant="light" />;
          }
        }
      }
    ],
    []
  );

  const renderRowSubComponent = ({ row }: { row: Row<{}> }) => <CustomerView data={lists[Number(row.id)]} />;
  if (loading) return <EmptyTables />;

  return (
    <MainCard content={false}>
      <ScrollX>
        <ReactTable
          columns={columns}
          data={lists}
          renderRowSubComponent={renderRowSubComponent}
        />
      </ScrollX>
    </MainCard>
  );
};

export default CustomerList;
