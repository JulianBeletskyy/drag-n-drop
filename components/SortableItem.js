import React from 'react'
import { sortableElement, sortableHandle } from 'react-sortable-hoc'
import { toggleModal } from '../actions/ui'
import { useDispatch } from 'react-redux'

const DragHandle = sortableHandle(() => <div className="block-handle"></div>)

const Form = ({closeMe}) => {
  return (
    <form>
    </form>
  )
}

const SortableItem = ({value: {title, type} }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(toggleModal(true, title, <Form />)).then(() => {
      console.log('modal close')
    })
  }
  return (
    <div className="d-flex p-2 drag-item" onClick={handleClick}>
      <div className="position-relative w-100">
        <DragHandle />
        <div className="drag-content">
          {
            (type => {
              switch (type) {
                case 'avatar':
                  return  (
                    <div className="text-center">
                      <img src="//s.taplink.cc/a/3/d/e/9/194cc1.jpg?2" className="img-fluid profile-avatar mb-2" />
                      <div>{title}</div>
                    </div>
                  )
                case 'text':
                  return (
                    <div className="text-left">
                      {title}
                    </div>
                  )
                default:
                  return null
              }
            })(type)
          }
        </div>
      </div>
    </div>
  )
}
  

export default sortableElement(props => <SortableItem {...props} />)
