import { ChangeEvent } from 'react';
import { Input } from '../Input/Input';
import styles from './Form.module.css'


interface IProps {
	text: string
	setText: ( value: string ) => void
}

export const Form = ( { text, setText,  }: IProps ) => {
	const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {
		setText(event.target.value)
	};
	
	
	return (
		<div className={styles.form}>
			<Input onChange={onChange} value={text}/>
		</div>
	)
}
