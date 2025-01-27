import react from "react";
import ReactDOM from"react-dom/client"

const num=90

const Component=()=>{
 
    return (
        <div className="title">
            <h1>This is functional component in H1 TAG</h1>
            <h2>This is functional component in H2 TAG</h2>
            <h3>This is functional component in H3 TAG</h3>
            <h4>This is functional component in H4 TAG</h4>

        </div>
    )
    
}
const root=ReactDOM.createRoot(document.getElementById("root3"))
// root.render(<Component/>);

const Hello=()=>{
 
return(
  
    <div>
    <p>Hello this is Deekshitha Whatever the case is.. they won't ask money..even if they provide u internship, u won't learn anything.. it will be like some regular classes.. they'll tell a few things and u will have to do the rest on ur own.. my friends have experienced it.. 
            U can ask others also and cross check</p>
            {num+90}

  <Component/>
  </div>
)
}
const get=ReactDOM.createRoot(document.getElementById("root4"));
get.render(<Hello/>)