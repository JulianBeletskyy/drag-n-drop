import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import { toggleModal, closeModal } from '../../actions/ui'
import cn from 'classnames'
import './modal.css'

const CustomModal = ({dispatch, show, content, title, className, resolver}) => {
	const onCloseModal = ({success, result}) => {
		dispatch(closeModal())
		resolver(success, result)
	}
	const clearModal = () => {
		dispatch(toggleModal())
	}
	return (
		<Modal
			center
			open={show}
			onClose={onCloseModal}
			onExited={clearModal}
			classNames={{
				modal: cn('modal-body', className),
				overlay: 'custom-modal-overlay',
			}}>
			{ title && <h3>{title}</h3> }
    	{content && <content.type closeMe={onCloseModal} />}
    </Modal>
	)
}

const mapStateToProps = ({modal}) => ({
	...modal
})

export default connect(mapStateToProps)(CustomModal)