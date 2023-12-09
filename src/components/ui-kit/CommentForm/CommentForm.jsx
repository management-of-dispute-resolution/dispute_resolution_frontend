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
	const [freeSize, setFreeSize] = useState(10); // Объем свободного места
	
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
	
	const formatBytes = (bytes) => {
		if (!+bytes) return 0;
		const kb = 1024;
		const mb = kb ** 2;
		return parseFloat((bytes / mb).toFixed(2));
	};
	
	const handleDeleteFile = (item) => {
		const updateFilesSize = freeSize + formatBytes(item.size);
		setFreeSize(updateFilesSize)
		const updatedList = [...fileList];
		updatedList.splice(fileList.indexOf(item), 1);
		setFileList(updatedList);
	};
	const handleAddFile = () => {
		setFileAdd(!fileAdd)
	};

	const checkValidSend = () => {
		return !(
			commentData.content.length > 25 && commentData.content.length <= 1000
		);
	};

	return (
		<div className="comment">
			<div className="comment-form">
				<div
					className={`user-avatar ${
						user.role === 'mediator' && 'user-avatar_mediator'
					}`}
				>
					<p className="user-name">{user.last_name[0] ?? ''}</p>
				</div>
				<TextArea
					maxLength={1000}
					minLength={25}
					placeholder='Добавить комментарии не менее 25 символов и не более 1000'
					rows={1}
					error=""
					value={commentData.content}
					handleChange={handleCommentChange}
				>
					<button
						label=""
						aria-label="attache file"
						type="button"
						onClick={handleAddFile}
						className="comment-pipe"
					/>
				</TextArea>
				<Button
					size="micro"
					label=""
					color="transperent"
					type="button"
					before="send"
					onClick={handleSend}
					disabled={checkValidSend()}
				/>
			</div>
			{fileAdd ? (
				<div className="file-conteiner">
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
							freeSize={freeSize}
							setFreeSize={setFreeSize}
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
				</div>
			) : null}
		</div>
	);
}

CommentForm.propTypes = {
	user: PropTypes.shape({
		last_name: PropTypes.string,
		role: PropTypes.string,
	}),
	onSend: PropTypes.func.isRequired,
};

CommentForm.defaultProps = {
	user: {},
	onSend: () => {},
};

export default CommentForm;
