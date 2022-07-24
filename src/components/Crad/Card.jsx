import React, { useState } from "react";
import "./Card.css";
import data from "./data.json";
import { CircularProgressbar } from 'react-circular-progressbar';
import DonutChart from 'react-donut-chart';
import { useNavigate } from 'react-router-dom';
// import prof from "./profile.jpg";

const Card = () => {
    const [count, setCount] = useState(4000);
    const [value, setValue] = useState(2500);
    const inc = () => {
        setCount(count + 500);
        setValue(value + 100);
    }
    const dec = () => {
        if (count > 500)
            setCount(count - 500);
        if (value > 100)
            setValue(value - 100);
    }

    const navigate = useNavigate()

    const workout = () => {
        navigate("/workout");

    }
    const nutrition = () => {
        navigate("/nutrition")
    }
    return (
        <div className="box w-auto h-auto">
            <div className="card h-100 p-4 m-5 " >
                <div className="card-body">
                    <div className="c-card">
                        <div className="card-text m-3 text-white">
                            {data.users.map((user) => (
                                <div className="col p-3 m-4 d-flex justify-content-between align-items-center">
                                    <div className="image  mb-2">
                                        <img src={user.image} alt="user" className="img-fluid" width={50} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h5 className="card-title">{user.name}</h5>
                                        <p className="card-t">{user.email}</p>
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center">
                                        <CircularProgressbar
                                            className=" w-25 h-25 text-white"
                                            value={user.steps[0].walked}
                                            maxValue={user.steps[0].target}
                                            text={`${user.steps[0].walked}`}
                                        />
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <button className="plus btn text-white" onClick={inc} >
                                                <i className=" icon fa fa-plus  " ></i>
                                            </button>
                                            <p className="mb-0 px-4 pt-3 ">{count}</p>
                                            <p className="card-t px-4 ">target</p>
                                            <button className=" plus btn " onClick={dec}>
                                                <i className="fa fa-minus  "></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center align-items-center">
                                        <div className="d-flex flex-column">
                                            <p className="card-text ">
                                                <i className="fa fa-user m-2" />
                                                {user.date[0].perfoemedDate}</p>
                                            <p className="card-text ">
                                                <i className="fa fa-calendar m-2" />
                                                {user.date[0].scheduleDate}
                                            </p>
                                        </div>
                                        <div className="m-2 p-2">
                                            <button className="btn  h-100 w-50 py-4" >
                                                <i className="fa fa-chevron-right " onClick={workout} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center">
                                        <DonutChart
                                            className=" w-50 h-25 text"
                                            data={[
                                                { label: "Protein", value: user.protein[0].proteinIntake, color: '#C13C37' },
                                                { label: "Carbs", value: user.carbs[0].carbsIntake, color: '#6A2135' },
                                                { label: "Fat", value: user.fat[0].fatIntake, color: '#00ff00' },
                                            ]}
                                        />
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <button className="plus btn text-white" onClick={inc} >
                                                <i className=" icon fa fa-plus  " ></i>
                                            </button>
                                            <p className="mb-0  pt-3 ">{value}</p>
                                            <p className="card-t ">target</p>
                                            <button className=" plus btn " onClick={dec}>
                                                <i className="fa fa-minus  "></i>
                                            </button>
                                        </div>
                                        <div className="m-2 p-2">
                                            <button className="btn  h-100 w-50 py-4" onClick={nutrition}>
                                                <i className="fa fa-chevron-right " />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="notification">
                                        <button className="noti btn " onClick={dec}>
                                            <i className="fa fa-bell-o"></i>
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;