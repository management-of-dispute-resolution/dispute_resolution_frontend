import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.css';
import {useFormWithValidation} from '../../../hook/useForm'
import { useAuth } from '../../../hook/useAuth';

const LoginForm = ({ onLogin, loginStatus,isLoading }) => {
	// eslint-disable-next-line no-unused-vars
	const { values, handleChange, errors,isValid, resetForm
		//  , resetForm
	 } = useFormWithValidation();
	 const {
		setLoginStatus,loginServerError, setloginServerError} = useAuth();
	//  const [values, setValues] = useState({});

	// function handleChange(evt) {
	// 	const { name, value } = evt.target;
	// 	setValues((prev) => ({ ...prev, [name]: value }));
	// }

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onLogin(values);
	
	};

	const onChange = (evt) => {
		evt.preventDefault();
		setLoginStatus('')
		setloginServerError('')
		handleChange(evt);
	
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
						pattern='[a-zA-Z0-9\-\.]+@[a-z\-\.]+\.{1,1}[a-z]{1,}'
						minLength= {5}
						maxLength={64}
						onChange={onChange}
						required
						error={errors.email || loginStatus}
						value={values.email || ''}
						
					/>
			
					<Input
						label="Пароль"
						name="password"
						id="userPassword"
						onChange={onChange}
						placeholder="Пароль"
						type="password"
						pattern='[0-9a-zA-Z\!\@\#\$\%\.]{8,32}'
						required
						minLength= {8}
						maxLength={32}
						error={errors.password || loginStatus}
						value={values.password ||''}
					/>
				</div>
				<span className='auth__form-error'>
				{loginServerError}
					</span>
				<Button backgroundColor="blueLagoon" label="Продолжить" type="submit" disabled={!isValid || isLoading || loginStatus!=='' || loginServerError !=='' }/>
			</form>
		</section>
	);
};

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
	loginStatus: PropTypes.string.isRequired,
	isLoading:PropTypes.bool.isRequired
};

export default LoginForm;
