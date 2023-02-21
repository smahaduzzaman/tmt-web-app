import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { GoPlus } from "react-icons/go";
import { motion } from 'framer-motion';

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    }
};

const Todos = (props) => {
    const [todo, setTodo] = useState("");
    // console.log("Todos", todo)
    // console.log("Props come from store: ", props);

    const handleChange = (e) => {
        // e.preventDefault();
        setTodo(e.target.value);
    }

    const add = () => {
        if (todo === "") {
            alert("Please enter a task");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            })
            setTodo("");
        }
    };

    return (
        <div className='addTodos'>
            <input
                type="text"
                className='todo-input'
                onChange={e => handleChange(e)}
                value={todo}
            />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='add-btn'
                onClick={() => add()}
            ><GoPlus /></motion.button>
            <br />
        </div >
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);