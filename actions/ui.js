export const toggleModal = (show = false, title = '', content = null, className = '') => dispatch => {
	let resolver = null
	const promise = new Promise((resolve, reject) => {
		resolver = resolve
	})
	dispatch({
		type: 'TOGGLE_MODAL',
		data: {show, title, content, className, resolver},
	})
	return promise
}

export const closeModal = () => ({
	type: 'CLOSE_MODAL',
})