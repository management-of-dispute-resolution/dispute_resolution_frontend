import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
	// const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	const [values, setValues] = useState({});
	const [isDisable, setIsDisable] = useState(true);

	function handleChange(evt) {
		const { name, value } = evt.target;
		setValues((prev) => ({ ...prev, [name]: value }));
		// eslint-disable-next-line no-unused-expressions
		values.Email ? setIsDisable(false) : setIsDisable(true);
		console.log(isDisable);
	}

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
						name="Email"
						onChange={(evt) => {
							handleChange(evt);
						}}
						placeholder="Электронная почта"
						type="email"
						autocomplete="off"
					/>
					<Input
						label="Пароль"
						name="Password"
						onChange={(evt) => {
							handleChange(evt);
						}}
						placeholder="Пароль"
						type="password"
					/>
				</div>
				<Button
					backgroundColor="#00696a"
					label="Продолжить"
					type="submit"
					disabled={isDisable}
				/>
			</form>
		</section>
	);
};

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
