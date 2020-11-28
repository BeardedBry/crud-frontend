import React from 'react';

const Item = ({ title, handleRemoveItem, handleEditRequest}) => {

    const [editMode, setEditMode] = React.useState(false);
    const [titleState, setTitleState] = React.useState(title);

    const handleTitleState = (event) => {
        setTitleState(event.target.value);
    }

    const handleEditToggle = () => {
        if(editMode && (titleState !== title)){
            handleEditRequest(title, titleState);
        }
        setEditMode(!editMode);
    }

    return (
        <li>
            <span>
            {editMode ? <input type="text" value={titleState} onChange={handleTitleState}/> : <span>{title}</span>}
            </span>
            <div>
                <button onClick={handleEditToggle}>{editMode ? "Save" : "Edit"}</button>
                <button onClick={() => handleRemoveItem(title)}>✘</button>
            </div>
        </li>
    )
}

export default Item;