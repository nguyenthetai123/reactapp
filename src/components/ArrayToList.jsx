import React from 'react'

function ArrayToList() {
    const num =[1,2,3,4,5,6,7,8,9,10,11]
    const listItems = num.map((number) => 
    <li key={num.toString()}>{number * 2}</li>
);

  return (
    <div>
        ArrayToList
        <ul>
            {listItems}
        </ul>
    </div>
  )
}

export default ArrayToList