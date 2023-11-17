/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentForm.css';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import { NewDisputeFileUpload } from '../NewDisputeFileUpload/NewDisputeFileUpload'
import { FilePreview } from '../FilePreview/FilePreview';

function CommentForm({ user, onSend }) {
	const [commentData, setCommentData] = useState({content: '', file: []}); 
	const [fileList, setFileList] = useState([]);
	const [fileAdd, setFileAdd] = useState(false);
	
	const handleCommentChange = (evt) => {
		const {value} = evt.target;
		setCommentData((prev) => ({ ...prev, 'content': value }));
	}
	const handleSend = () => {
		onSend(commentData); 
	};
	
	// Установка стейта загружаемых файлов
	const updateFileList = (updatedList) => {
		setFileList(updatedList);
		setCommentData((prev) => ({ ...prev, 'file': updatedList }));
	};
	// Удаление файла из массива для загрузки
	const handleDeleteFile = (item) => {
		const updatedList = [...fileList];
		updatedList.splice(fileList.indexOf(item), 1);
		setFileList(updatedList);
		setCommentData((prev) => ({ ...prev, 'file': updatedList }));
	};
	const handleAddFile = () => {
		setFileAdd(!fileAdd)
	}


	return (
		<div className='comment'>
			<div className="comment-form">
				<div className={`user-avatar ${user.role === 'mediator' && 'user-avatar_mediator'}`}>
					<p className="user-name">{user.last_name[0] ?? ''}</p>
				</div>
				<TextArea rows={1} error="" value={commentData.content} handleChange = {handleCommentChange}>
					<button label="" aria-label="attache file" type="button" onClick={handleAddFile} className='comment-pipe' />
				</TextArea>
				<Button
					size="micro"
					label=""
					color="transperent"
					type="button"
					before="send"
					onClick={handleSend}
					disabled = {!commentData.content}
				/>
			</div>
			{fileAdd ? (
				<div className='file-conteiner'>
					{/* Блок рабооты с файлами */}
					<div className="new-dispute-file new-dispute-form__item-wrapper">
						<div className="new-dispute-form__item-title-wrapper_large">
							<h3 className="new-dispute-form__item-title">Прикрепите файлы</h3>
							<p className="new-dispute-form__item-title new-dispute-form__item-title_subtext">
								Допустимый формат файлов: JPG, PDF
							</p>
						</div>
						<NewDisputeFileUpload
							fileList={fileList}
							updateFileList={updateFileList}
						/>
					</div>

					{/* Блок кнопки submit'а и выбранных файлов */}
					<div className="new-dispute-footer new-dispute-form__item-wrapper">
						<span />
						<div className="new-dispute-footer__used-zone">
							{/* Отображение загруженных файлов */}
							<div className="file-preview">
								{fileList.map((item, index) => (
									<FilePreview
										key={`${item.name}_${item.type}`}
										item={item}
										index={index}
										onDeleteFile={handleDeleteFile}
									/>
								))}
							</div>
						</div>
					</div>
				</div>) : null}
		</div>
	);
}

CommentForm.propTypes = {
	user: PropTypes.objectOf(CommentForm),
	onSend: PropTypes.func,
};

CommentForm.defaultProps = {
	user: {},
	onSend: () => { },
	onSend: () => { },
};

export default CommentForm;
