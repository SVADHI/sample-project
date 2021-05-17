import React, { useEffect, useState } from "react";
import './StateWise.css'
const StateWise = () => {
  const [data, setData] = useState([]);
  const [filteredText,setFilteredText] = useState([])
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualdata = await res.json();
    console.log("acutaldata", actualdata.statewise);
    setData(actualdata.statewise);
  };
  useEffect(() => {
    getCovidData();

    const jilla= {
      name:"my name is nullish collisoing",
     // money:55
     vehicle :{
       year:2020
     }
    }
    let text = `hello ${jilla.name || "ramesh" } you have $${jilla.money || 200}in your account `
    console.log(text);
    //nullish collishining operatior
    console.log(jilla?.vehicle?.year ?? 1987)
  }, []);

  const searchInput =(e)=>{
    const filtered = data.filter(item =>{
      return item.state.toLowerCase().includes((e.target.value).toLowerCase())
    }) 
     setFilteredText(filtered)
    console.log(filtered);
  }
 
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 caption-background">
            <span className="font-wieght-bold"> INDIA </span> COVID 19 DASH
            BOARD
          </h1>
          <input type ="text" className ="search-input"  placeholder ="search for the state" onChange ={searchInput}/>
        </div>
        <div className="table-responsive">
          <table className="table table-hover text-center">
            <thead className="thead-dark">
              <tr >
                <th className="text-center">STATE</th>
                <th className="text-center"> CONFIRMED</th>
                <th className="text-center">RECOVERED</th>
                <th className="text-center">DEATHS</th>
                <th className="text-center">ACTIVE</th>
                <th className="text-center">UPDATED</th>
              </tr>
            </thead>
            <tbody>
              {filteredText.map((curEle, index) => {
                return (
                  <tr key={index}>
                    <td>{curEle.state}</td>
                    <td>{curEle.confirmed}</td>
                    <td>{curEle.recovered}</td>
                    <td>{curEle.deaths}</td>
                    <td>{curEle.active}</td>
                    <td>{curEle.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;
