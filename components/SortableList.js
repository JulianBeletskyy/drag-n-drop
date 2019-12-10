import React from 'react'
import { sortableContainer } from 'react-sortable-hoc';
import SortableItem from './SortableItem'

const SortableList = ({items}) => 
  <div className="pt-5 px-2 flex-fill">
    {
      items.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value} />
      )
    }
  </div>

export default sortableContainer(props => <SortableList {...props} />)
