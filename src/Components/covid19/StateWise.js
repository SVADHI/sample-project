import React, { useEffect, useState } from "react";
import './StateWise.css'


const StateWise = () => {
  const [data, setData] = useState([]);
  const [posts,setPosts] = useState([])
  const [filteredText,setFilteredText] = useState([])
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualdata = await res.json();
    
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
    
  function  hoisting() {
    console.log(hoist);
    var what = "variable and function declaration";
    console.log("what is hoisted",what);

    var hoist = "to lift or raise up";
    console.log("hoist means",hoist);

  }
    hoisting();

    const onDeleteRecords =(deaths)=>{
   
      let covidData = [...data]
       covidData.filter((items,index) =>{
        if (items.deaths === deaths) {
         covidData.splice(index, 1);
        }
        return covidData;
      })
      console.log("afterdel",covidData);
      setFilteredText({covidData});
   
     
    }

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 caption-background">
          <span><img src ="https://www.gstatic.com/webp/gallery3/3.png"  style ={{height:"50px",width:"50px"}} alt="test"/></span>
            <span className="font-wieght-bold"> INDIA </span> COVID 19 DASH
            BOARD
            <span><img src ="https://www.gstatic.com/webp/gallery3/2_webp_ll.png"  style ={{height:"50px",width:"50px"}} alt="test"/></span>
          </h1>
          <p className ="notes">Note:search by state name in the search.</p>
          <input type ="text" className ="search-input"  placeholder ="search for the state" onChange ={searchInput}/> 
        </div>
       
        <div className="table-responsive">
          <table className="table table-hover text-center">
            <thead className="thead-dark">
              <tr >
              <th className="text-center">NO</th>
                <th className="text-center">STATE</th>
                <th className="text-center"> CONFIRMED</th>
                <th className="text-center">RECOVERED</th>
                <th className="text-center">DEATHS</th>
                <th className="text-center">ACTIVE</th>
                <th className="text-center">UPDATED</th>
                
              </tr>
            </thead>
            <tbody>
              { filteredText.length > 0 ?filteredText.map((curEle, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{curEle.state}</td>
                    <td>{curEle.confirmed}</td>
                    <td>{curEle.recovered}</td>
                    <td>{curEle.deaths}</td>
                    <td>{curEle.active}</td>
                    <td>{curEle.lastupdatedtime}</td>
                    {/* <td><button onClick ={()=>onDeleteRecords(curEle.deaths)}>DELETE</button></td> */}
                  </tr>
                );
              }):
              <tr>
                <td className ="text-center"><p>no data to display</p></td>
                </tr>}
            </tbody>
          </table>
         
        </div>
      </div>
    </>
  );
};

export default StateWise;
