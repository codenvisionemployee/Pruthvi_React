import React, { useState } from "react";
const Home = (props) => {
    const [search, setSearch] = useState("");
    const [leftData, setLeftData] = useState([]);
    const [rightData, setRightData] = useState([]);
    const Handler = (event) => {
        setSearch(event.target.value);
    };
    const Add = () => {
        var obj = { id: Math.random(), value: search, isSelected: false };
        setLeftData((prevData) => {
            return [...prevData, obj];
        });
        setSearch("");
    };
    const onSelect = (collection, id, side) => {
        collection = collection.map((item) => {
            if (item.id === id) item.isSelected = !item.isSelected;
            return item;
        })
        side === "left" ? setLeftData(collection) : setRightData(collection);
    };
    const LeftToRight = () => {
        var leftCollection = leftData;
        var moveObjCollection = [];
        leftCollection = leftCollection.filter((item) => {
            if (item.isSelected) {
                item.isSelected = false;
                moveObjCollection.push(item);
                return false;
            }
            return true;
        });
        setLeftData(leftCollection);
        setRightData([...rightData, ...moveObjCollection]);
    };
    const RightToLeft = () => {
        var rightCollection = rightData;
        var moveObjCollection = [];
        rightCollection = rightCollection.filter((item) => {
            if (item.isSelected) {
                item.isSelected = false;
                moveObjCollection.push(item);
                return false;
            }
            return true;
        });
        setRightData(rightCollection);
        setLeftData([...leftData, ...moveObjCollection]);
    };
    const AllDataMoveLeftToRight = () => {
        setRightData([...rightData, ...leftData]);
        setLeftData([]);
    };
    const AllDataMoveRightToLeft = () => {
        setLeftData([...leftData, ...rightData]);
        setRightData([]);
    };
    return (
        <div>
            <h1>ToDo App</h1>
            <input type="text" value={search} onChange={Handler} />
            <button className="btn btn-secondary ms-3" onClick={Add}>Submit</button>
            <div className='row mt-5 d-flex justify-content-center'>
                <div className='border border-dark col-3 ms-5 box me-5' >
                    <div className="list">
                        <div className="listbox">
                            <ul>
                                {leftData.map((e) => {
                                    return (
                                        <h3 onClick={() => onSelect(leftData, e.id, "left")}>
                                            <span className={e.isSelected ? "highlight" : ""}>
                                                {e.value}
                                            </span>
                                        </h3>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-1 btn'>
                    <button className='d-block btn1 btn-data mt-3 ms-4' onClick={() => LeftToRight()}>Right</button>
                    <button className='d-block btn1 btn-data mt-3 ms-4' onClick={() => RightToLeft()}>Left</button>
                    <button className='d-block btn1 btn-data mt-3 ms-4' onClick={() => AllDataMoveLeftToRight(leftData, rightData)}>Right all</button>
                    <button className='d-block btn1 btn-data mt-3 ms-4' onClick={() => AllDataMoveRightToLeft(rightData, leftData)}>Left all</button>
                    {/* <button className='d-block btn1 btn-data mt-3 ms-4' onClick={() => AllData(clearData, clearData)}>Clear all</button> */}
                    
                </div>
                <div className='border border-dark col-3 ms-5 box'>
                    <div className="listbox">
                        <ul>
                            {rightData.map((e) => {
                                return (
                                    <h3 onClick={() => onSelect(rightData, e.id, "right")}>
                                        <span className={e.isSelected ? "highlight" : ""}>
                                            {e.value}
                                        </span>
                                    </h3>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <br/>                                                                                                                         <br/><br/> <br/>
        </div>
    );
};
export default Home; 