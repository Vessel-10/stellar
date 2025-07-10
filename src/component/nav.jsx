import React,{useEffect} from "react";
function Nav(){
    useEffect(()=>{
        const active = document.querySelector(".active")
        if(active){
            active.addEventListener('click',(e)=>{
                e.target.style.color = "green"
            });
        }
    },[])
    
    return(
        <div className="nav">
            <div className="container">
                <ul>
                    <li><a href="#intro" className="active">intro</a></li>
                    <li><a href="#first-section">first section</a></li>
                    <li><a href="#second-section">second section</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;