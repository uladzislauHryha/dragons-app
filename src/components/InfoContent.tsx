import { Typography } from "@mui/material";

interface IInfoContent {
	name: string,
	desc: string,
	higher_level: string,
	range: string,
	components: Array<string>,
	material: string,
	ritual: Array<string>,
	duration: Array<string>,
	concentration: Array<string>,
	casting_time: Array<string>,
	level: Array<string>,
	attack_type: Array<string>,
}

export default function InfoContent(props: IInfoContent) {
	const { name, desc, higher_level, range, components } = props;

	return (
		<>
			<Typography>Name</Typography>
			<Typography>{name}</Typography>
		</>
	)
}