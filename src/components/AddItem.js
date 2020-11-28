import React from 'react';

const AddItem = ({ handleAddItem }) => {

    const textRef = React.useRef(null)

    return (
        <div>
            <input type="text" ref={textRef} />
            <button onClick={() => {
                handleAddItem(textRef.current.value);
                textRef.current.value = "";
            }}>Add</button>
        </div>
    )
}

export default AddItem;