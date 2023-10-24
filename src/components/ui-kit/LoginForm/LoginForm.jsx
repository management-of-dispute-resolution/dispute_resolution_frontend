import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.css';

export const LoginForm = ({ onLogin, onLoading }) => {
	const [values, setValues] = useState({});

	function handleChange(evt) {
		const { name, value } = evt.target;
		setValues((prev) => ({ ...prev, [name]: value }));
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
						pattern="[a-zA-Z0-9]+@[a-z]+\.{1,1}[a-z]{2,}"
						placeholder="Электронная почта"
						type="email"
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
					{/* <input
            value={values.email || ''}
            onChange={handleChange}
            className="auth__form-input"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            value={values.password || ''}
            onChange={handleChange}
            className="auth__form-input"
            type="password"
            placeholder="Пароль"
            name="password"
            required
          /> */}
				</div>
				<Button
					backgroundColor="#00696a"
					label="Продолжить"
					type="submit"
					disabled={onLoading}
				/>
			</form>
		</section>
	);
};

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onLoading: PropTypes.bool.isRequired,
};
