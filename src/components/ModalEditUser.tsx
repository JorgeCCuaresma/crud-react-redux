import { useUserAction } from "../hooks/useUserAction";
import { UserWithId } from "../store/users/slice";
import { Button, TextInput } from "@tremor/react";
import { type FC, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "sonner";

interface Props {
	user: UserWithId;
}

export const ModalEditUser: FC<Props> = ({ user }) => {
	const { editUser } = useUserAction();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);
		let name = formData.get("name") as string;
		let email = formData.get("email") as string;
		let github = formData.get("github") as string;
		const id = user.id;

		if (!name && !email && !github) {
			toast.error("Please fill in at least one field");
			return;
		}

		if (!name) {
			name = user.name;
		}
		if (!email) {
			email = user.email;
		}
		if (!github) {
			github = user.github;
		}

		const userUpdate = {
			id,
			name,
			email,
			github,
		};
		console.log(userUpdate);
		editUser(userUpdate);
		handleClose();
		toast.success("User updated");
	};

	return (
		<>
			<button onClick={handleShow} type="button">
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
						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
					/>
				</svg>
			</button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleUpdate}>
						<TextInput name="name" placeholder={user.name} />
						<TextInput name="email" placeholder={user.email} />
						<TextInput name="github" placeholder={user.github} />
						<div style={{ marginTop: "12px" }}>
							<Button
								style={{ marginRight: "12px" }}
								type='submit'
								variant="primary"
							>
								Update
							</Button>
							<Button type="button" variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};
