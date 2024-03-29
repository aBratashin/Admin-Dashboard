import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'

const Team = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const columns = [
		{ field: 'id', headerName: 'ID' },
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
			field: 'accessLevel',
			headerName: 'Статус',
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width="60%"
						p="5px"
						display="flex"
						justifyContent="center"
						backgroundColor={
							access === 'admin'
								? colors.redAccent[600]
								: access === 'manager'
									? colors.redAccent[700]
									: colors.redAccent[700]
						}
						borderRadius="4px"
					>
						{access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
						{access === 'manager' && <SecurityOutlinedIcon />}
						{access === 'user' && <LockOpenOutlinedIcon />}
						<Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
							{access}
						</Typography>
					</Box>
				)
			}
		}
	]

	return (
		<Box m="20px">
			<Header title="Команда" subtitle="Управление членами команды" />
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
					}
				}}
			>
				<DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	)
}

export default Team