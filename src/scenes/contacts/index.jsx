import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'

const Contacts = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const columns = [
		{ field: 'id', headerName: 'ID', flex: 0.5 },
		{ field: 'registrarId', headerName: 'ID регистрации' },
		{
			field: 'name',
			headerName: 'Имя',
			flex: 1,
			cellClassName: 'name-column--cell'
		},
		{
			field: 'age',
			headerName: 'Возраст',
			type: 'number',
			headerAlign: 'left',
			align: 'left'
		},
		{
			field: 'phone',
			headerName: 'Номер телефона',
			flex: 1
		},
		{
			field: 'email',
			headerName: 'Почта',
			flex: 1
		},
		{
			field: 'address',
			headerName: 'Адрес',
			flex: 1
		},
		{
			field: 'city',
			headerName: 'Город',
			flex: 1
		},
		{
			field: 'zipCode',
			headerName: 'Индекс',
			flex: 1
		}
	]

	return (
		<Box m="20px">
			<Header
				title="Контакты"
				subtitle="Список контактов для дальнейшего использования"
			/>
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none'
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none'
					},
					'& .name-column--cell': {
						color: colors.redAccent[300]
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: theme.palette.mode === 'dark' ? colors.grey[700] : colors.redAccent[700],
						borderBottom: 'none'
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: theme.palette.mode === 'dark' ? colors.grey[900] : colors.primary[400]
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: theme.palette.mode === 'dark' ? colors.grey[700] : colors.redAccent[700]
					},
					'& .MuiCheckbox-root': {
						color: `${colors.redAccent[200]} !important`
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${colors.grey[100]} !important`
					}
				}}
			>
				<DataGrid
					rows={mockDataContacts}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	)
}

export default Contacts