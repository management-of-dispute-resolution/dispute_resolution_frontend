import React from 'react';
import './PasswordChangeForm.css';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import { PopupWrapper } from '../PopupWrapper/PopupWrapper';
import Button from '../Button/Button';
import {useFormWithValidation} from '../../../hook/useForm'
import { useAuth } from '../../../hook/useAuth';
import {PASSWORD_TEMPLATE} from '../../../config/constants/variable.constants'

const PasswordChangeForm = ({
	disabled,
	statusMessage,
	isOpen,
	onClose,
	handleChangePassword,
	isLoading
}) => {

	const { values, handleChange, errors,isValid
	 } = useFormWithValidation();

	 const { isPasswordServerError, setIsPasswordServerError } = useAuth();


	const handleSubmit = (e) => {
		e.preventDefault();
		handleChangePassword(values)
	};

	const handleChangeForPass = (e) => {
		e.preventDefault();
		setIsPasswordServerError('')
		handleChange(e)
	};
	
	return (
		
		<PopupWrapper isOpen={isOpen} type="form" onClose={onClose}>
		
			<form className="password-edit-form" onSubmit={handleSubmit}>
				<h1 className="password-edit-form__title"> Смена пароля</h1>
				<div className="password-edit-form__inputs">
					<Input
						id="Password"
						name="password"
						label="Текущий пароль"
						placeholder="Текущий пароль"
						type="password"
						disabled={disabled}
						
						
						pattern={PASSWORD_TEMPLATE}
						required
						minLength= {8}
						maxLength={32}
						error={errors.password || isPasswordServerError}
						value={values.password || ''}
						onChange={handleChangeForPass}
					/>
					<Input
						id="newPassword"
						name="newPassword"
						label="Новый пароль"
						placeholder="Новый пароль"
						type="password"
						disabled={disabled}
						pattern={PASSWORD_TEMPLATE}
						required
						minLength= {8}
						maxLength={32}
						error={errors.newPassword}
						value={values.newPassword || ''}
						onChange={handleChange}
					/>
					<Input
						id="confirmNewPassword"
						name="newPasswordConfirm"
						label="Подтвержите новый пароль"
						placeholder="Подтвердите новый пароль"
						type="password"
						disabled={disabled}
						pattern={PASSWORD_TEMPLATE}
						required
						minLength= {8}
						maxLength={32}
						error={errors.newPasswordConfirm}
						value={values.newPasswordConfirm || ''}
						onChange={handleChange}
					/>
				</div>

				<p
					className={
						disabled
							? 'password-edit-form__list-title disabled'
							: 'password-edit-form__list-title'
					}
				>
					Требования к паролю
				</p>
				<ul
					className={
						disabled
							? 'password-edit-form__list disabled'
							: 'password-edit-form__list'
					}
				>
					<li className="password-edit-form__list-item">
						Буквы только латинского алфавита
					</li>
					<li className="password-edit-form__list-item">Не менее 8 символов</li>
					<li className="password-edit-form__list-item">Цифры</li>
				</ul>
				<span className="password-edit-form__status">{statusMessage}</span>
				<Button
					size="mlarge"
					label="Изменить пароль"
					color="blueLagoon"
					type="submit"
					disabled={!isValid || isLoading || isPasswordServerError!==''}
				/>
			</form>
		</PopupWrapper>
	);
};

PasswordChangeForm.propTypes = {
	statusMessage: PropTypes.string,
	disabled: PropTypes.bool,
	isOpen: PropTypes.bool,
	isLoading: PropTypes.bool,
	onClose: PropTypes.func,
	handleChangePassword: PropTypes.func,
};

PasswordChangeForm.defaultProps = {
	isOpen:false,
	statusMessage: '',
	disabled: false,
	isLoading:false,
	onClose:undefined,
	handleChangePassword:undefined
};

export default PasswordChangeForm;
