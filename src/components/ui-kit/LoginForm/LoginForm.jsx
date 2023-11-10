import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.css';
import {useFormWithValidation} from '../../../hook/useForm'

const LoginForm = ({ onLogin }) => {
	const { values, handleChange, errors,isValid
		//  , resetForm
	 } = useFormWithValidation();
	//  const [values, setValues] = useState({});

	// function handleChange(evt) {
	// 	const { name, value } = evt.target;
	// 	setValues((prev) => ({ ...prev, [name]: value }));
	// }

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onLogin(values);
	};

	return (
		<section className="auth__container">
			<form className="auth__form" onSubmit={handleSubmit}>
				<h1 className="auth__title">Вход в Concordia</h1>
				<div className="auth__form-input-area">
					<Input
						label="Электронная почта"
						name="email"
						id="userEmail"
						placeholder="Электронная почта"
						type="email"
						autocomplete="off"
						pattern='[a-zA-Z0-9]+@[a-z]+\.{1,1}[a-z]{2,}'
						onChange={handleChange}
						required
						error={errors.email}
						value={values.email}
						
					/>
					{console.log(errors.email)}
					<Input
						label="Пароль"
						name="password"
						id="userPassword"
						onChange={(evt) => {
							handleChange(evt);
						}}
						placeholder="Пароль"
						type="password"
						required
					/>
				</div>
				<Button backgroundColor="blueLagoon" label="Продолжить" type="submit" disabled={!isValid}/>
			</form>
		</section>
	);
};

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
