import React from 'react';

import Button from '../../button/Button';

import PageNotFoundLogo from '../../../Images/PageNotFoundLogo.svg';
import './PageNotFound.css';

const PageNotFound = () => (
	<article className="page-not-found">
		<section className="page-not-found__wrapper">
			<img
				className="page-not-found__img"
				src={PageNotFoundLogo}
				alt="логотип 404"
			/>
			<div className="page-not-found__text-block">
				<h1 className="page-not-found__heading">Страница не найдена</h1>
				<p className="page-not-found__text">
					То, что находится в поиске не существует или пока не открыто
				</p>
			</div>
			<Button
				backgroundColor="#3547E9"
				label="Перейти на главную"
				onClick={() => {}}
				type="link"
				url="/"
			/>
		</section>
	</article>
);

export default PageNotFound;
