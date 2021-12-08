import React from "react";

function Container(props){
    return(
        <div className="note">
            {props.child}
        </div>
    );
}

export default Container;