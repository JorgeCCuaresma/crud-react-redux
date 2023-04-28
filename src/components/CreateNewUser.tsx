import { useUserAction } from "../hooks/useUserAction";
import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";

export default function CreateNewUser() {
	const { addUser } = useUserAction();
	const [result, setResult] = useState<"ok" | "error" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if ((!name || !email || !github)) {
			setResult("error");
			return;
		}

		addUser({ name, email, github })
        setResult("ok");
        form.reset()
;
	};
	return (
		<Card style={{ width: "400px", backgroundColor: "#f2f2f2" }}>
			<Title>Create New User</Title>
			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Type Name" />
				<TextInput name="email" placeholder="Type Email" />
				<TextInput name="github" placeholder="Type Github" />
				<div style={{ marginTop: "12px" }}>
					<Button type='submit'>Submit</Button>
                    <span style={{marginLeft:'10px'}}>
                        {result === "ok" && <Badge color="green">User Created</Badge>}
                        {result === "error" && <Badge color="red">Empty fields error</Badge>}
                    </span>
                    
				</div>
			</form>
		</Card>
	);
}
