import styles from './[slug].module.scss';

export default function Slug ({ params }: { params: { slug: string } }) {
	return (
		<div>
			<h1 className="text-3xl font-bold text-red-500">Slug Page</h1>
			<div>{params.slug}</div>

			
		</div>
	)
}