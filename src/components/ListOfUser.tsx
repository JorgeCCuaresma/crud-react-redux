import { useAppSelector } from "../hooks/store";
import { useUserAction } from "../hooks/useUserAction";
import { ModalEditUser } from "./ModalEditUser";
import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";


export default function ListOfUser() {
	const users = useAppSelector((state) => state.users);
	const { removeUserById } = useUserAction();

	return (
		<Card style={{ backgroundColor: "#f2f2f2", marginBottom: "12px" }}>
			<Title>
				Usuarios
				<Badge style={{ marginLeft: "10px" }}>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell> Id </TableHeaderCell>
						<TableHeaderCell> Nombre </TableHeaderCell>
						<TableHeaderCell> Email </TableHeaderCell>
						<TableHeaderCell> Acciones </TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell style={{ display: "flex", alignItems: "center" }}>
								<img
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										marginRight: "8px",
									}}
									src={`https://unavatar.io/github/${item.github}`}
									alt={item.name}
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>
								<button onClick={() => removeUserById(item.id)} type="button">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
										/>
									</svg>
								</button>
								<ModalEditUser user ={item}/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
