import React,{ useState} from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
const List = () => {


  const location= useLocation();
  const [destination,setDestination]=useState(location.state.destination);
  const [date,setDate]=useState(location.state.date);
  const [options,setOptions]=useState(location.state.options);




  return (

    <div>
      <Navbar />
      <Header type="List" />
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="ListSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" name="" id="" />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in-Date</label>
              <input type="text" name="" id="" />
            </div>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="ListResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
