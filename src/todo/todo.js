import BigCard from './todoW'
import React from 'react'
import { VscAdd } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai"
import { TiThumbsDown, TiThumbsUp, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';









const Todo = () => {

    const data = useSelector(state => state.tasks);
    const value = useSelector(state => state.value);


    const dispatch = useDispatch();

    const typing = (e) => {
        const action = { type: "TYPING", payload: e.target.value };
        dispatch(action);
    }

    const add = () => {
        if (value.trim() === "") {
            alert("Please write some words !");
            return;
        }
        const action = { type: "ADD_TASK", payload: value };
        dispatch(action);
    }

    const deleteTask = (i) => {
        const action = { type: "DELETE_TASK", payload: i };
        dispatch(action);

    }

    return (
        <BigCard>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h1 className='fw-bold text-light text-center'>Todo App with Redux</h1>
                            <div className='todocard'>
                                <div className='d-flex'>
                                    <input type="text" onChange={typing} value={value} placeholder='Words ...' className='form-control' />
                                    <button onClick={add} className='btn btn-primary ms-2' ><VscAdd /></button>
                                </div>
                                <div>
                                    {data?.map((v, i) => {
                                        return <div key={i} className='d-flex align-items-center justify-content-between p-1'>
                                            <p>{i + 1}) {v.main}</p>

                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div className='d-fle me-1'>
                                                    <button className='btn btn-warning wt'><TiArrowSortedUp /></button>
                                                    <button className='btn btn-warning wt'><TiArrowSortedDown /></button>
                                                </div>
                                                <button className='btn btn-secondary'><TiThumbsDown /></button>
                                                <button className='btn btn-success ms-1'><AiOutlineEdit /></button>
                                                <button onClick={() => deleteTask(i)} className='btn btn-danger ms-1'><BsFillTrashFill /></button>
                                            </div>
                                        </div>

                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </BigCard>
    )
}

export default Todo
