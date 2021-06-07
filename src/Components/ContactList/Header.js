import React ,{useState} from 'react'

export default function Header({searchTable}) {
    const [searchTerm,setSearchTerm] = useState("")

    const sendSearchData=()=>{
        searchTable(searchTerm)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Contacts</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

   <div className ="">
   <input type ="text" placeholder ="search"  value ={searchTerm} onChange ={(e)=>setSearchTerm(e.target.value)}/>
   <button onClick ={sendSearchData}>search</button>
   </div>
</nav>


        </div>
    )
}
