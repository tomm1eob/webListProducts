import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import PreviewIcon from '@mui/icons-material/Preview';

import type { Product } from '../types/product';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 400 },
  {
    field: 'price',
    headerName: 'Price',
    width: 130,
    renderCell: (params) => <span>${params.value}</span>
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 130,
    renderCell: (params) => <img src={params.value} height={60} width={60} />
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => (
      <Link to={`/products/${params.row.id}`}>
        <PreviewIcon />
      </Link>
    ),
  }
];

const paginationModel = { page: 0, pageSize: 5 };

type ProductsTableProps = {
  products: Product[];
  loading: boolean;
}

export default function ProductsTable({ products, loading }: ProductsTableProps) {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        loading={loading}
      />
    </Paper>
  );
}
