import styles from './Heading.module.scss'

type TProps = {
	title: string
}

export default function Heading ({ title }: TProps) {
	return (
		<h1 className="text-3xl font-bold">{title}</h1>
	)
}