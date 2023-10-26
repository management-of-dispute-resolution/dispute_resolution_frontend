import React from 'react';
import './PasswordChangeForm.css';
import Input from '../Input/Input';
import { PopupWrapper } from '../PopupWrapper/PopupWrapper';
import Button from '../Button/Button';

export const PasswordChangeForm = () => (
	<PopupWrapper isOpen="{true}" type="form">
		{' '}
		<form className="password-edit-form">
			<h1 className="password-edit-form__title"> Смена пароля</h1>
			<div className="password-edit-form__inputs">
				<Input
					name="Password"
					label="Текущий пароль"
					placeholder="Текущий пароль"
					error="sss"
					type="password"
				/>
				<Input
					name="Password"
					label="Новый пароль"
					placeholder="Новый пароль"
					type="password"
				/>
				<Input
					name="Password"
					label="Подтвержите новый пароль"
					placeholder="Подтвердите новый пароль"
					type="password"
				/>
			</div>

			<h4>Требования к паролю</h4>
			<ul className="password-edit-form__list">
				<li className="password-edit-form__list-item">
					Буквы только латинского алфавита
				</li>
				<li className="password-edit-form__list-item">Не менее 6 символов</li>
				<li className="password-edit-form__list-item">Цифры</li>
			</ul>
			<Button
				size="large"
				label="Изменить пароль"
				color="blueLagoon"
				type="submit"
			/>
		</form>
	</PopupWrapper>
);
