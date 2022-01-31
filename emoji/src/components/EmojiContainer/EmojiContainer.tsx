import { EmojiRow } from '../EmojiRow/EmojiRow';
import { emojies } from '../EmojiRow/Emojies';
import { useState } from 'react';
import { Form } from '../Form/Form';
import styles from './EmojiContainer.module.css'

export const EmojiContainer = () => {
	
	const [ text, setText ] = useState<string>('')
	
	const filteredEmoji = emojies.filter(emoji => {
		return emoji.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
	})
	
	return (
		<div className={styles.container}>
			<Form text={text} setText={setText}/>
			{filteredEmoji.map(( emoji, index ) => {
				return (
					<EmojiRow
						key={index}
						title={emoji.title}
						symbol={emoji.symbol}
					/>)
			})}
		</div>
	)
}