import React,{useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {GlobalContext} from '../GlobalContext';
import AddItem from '../components/AddItem';
import Item from '../components/Item';

const TodoList = () => {

    const [items, setItems] = useState([])
    const {endpoint} = useContext(GlobalContext);

    const requestList = () => {
        axios.get(`${endpoint}/list/`).then((data) => {
            setItems(data.data);
            console.log(data.data);
        });
    }

    useEffect(() => {
        try {
            requestList();
        } catch (e) {
            console.error(e);
        }
    }, [])

    function handleAddItem(title) {
        try {
            axios.post(`${endpoint}/list/add`, { title: title }).then(() => {
                requestList();
            });
        } catch (e) {
            console.error(e);
        }
    }

    function handleRemoveItem(title) {
        try {
            axios.post(`${endpoint}/list/remove`, { title: title }).then(() => {
                requestList();
            });
        } catch (e) {
            console.error(e);
        }
    }

    function handleEditRequest(oldTitle, newTitle) {
        try {
            axios.put(`${endpoint}/list/edit`, { oldTitle: oldTitle, newTitle: newTitle }).then(() => {
                requestList();
            });
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1>Todo list App</h1>
            <AddItem handleAddItem={handleAddItem} />
            <ul className="List">
                {items.length ? items.map((item) => {
                    return <Item
                        key={item._id}
                        title={item.title}
                        handleRemoveItem={handleRemoveItem}
                        handleEditRequest={handleEditRequest}
                    />
                }) : null}
            </ul>
        </>
    )
}

export default TodoList;