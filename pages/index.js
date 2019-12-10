import React, { useState, useEffect } from 'react'
import arrayMove from 'array-move'
import Modal from '../components/modal'
import SortableList from '../components/SortableList'

import '../style.css'
import '../app.css'

const Home = () => {
  const [list, setList] = useState([{title: 'Item 1', type: 'avatar'}, {title: 'Item 2', type: 'text'}, {title: 'Item 3', type: 'text'}, {title: 'Item 4', type: 'text'}])
  const onSortEnd = ({oldIndex, newIndex}) => {
    document.body.style.cursor = 'default'
    setList(arrayMove(list, oldIndex, newIndex))
  }
  const onSortStart = () => {
    document.body.style.cursor = 'grabbing'
  }
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-8 px-0 px-sm-3 d-flex justify-content-center">
        <div className="phone">
          <div className="notch" />
          <div className="screen d-flex flex-column">
            <SortableList
              lockToContainerEdges
              useDragHandle
              items={list}
              onSortEnd={onSortEnd}
              onSortStart={onSortStart}
              lockAxis="y"
              lockOffset={["0%", "0%"]} />
          </div>
        </div>
      </div>
      <Modal />
      <style jsx>{`
        
      `}</style>
    </div>
  )
}

export default Home
