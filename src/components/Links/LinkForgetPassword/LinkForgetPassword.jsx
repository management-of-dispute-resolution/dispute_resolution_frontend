import React from 'react';
import { Link } from 'react-router-dom';
import './LinkForgetPassword.css';

function LinkForgetPassword() {
	return (
		<section className="forget-password">
			<Link to="/recovery-password" className="forget-password__link">
				Забыли пароль?
			</Link>
		</section>
	);
}

export default LinkForgetPassword;
