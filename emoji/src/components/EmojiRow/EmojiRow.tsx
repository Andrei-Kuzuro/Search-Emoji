import styles from './EmojiRow.module.css'

interface IProps {
	title: string
	symbol: string
}


export const EmojiRow = ( { title, symbol, }: IProps ) => {
	
	return (
		<div className={styles.emoji}>
			<p>{symbol}</p><p>{title}</p>
		</div>
	)
}