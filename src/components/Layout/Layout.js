import React from 'react';


const layout=(props)=>(
    <div>
        <div> Toolbar,Sidebar,Backdrop </div>
        <main>
            {props.children}
        </main>
    </div>

);
export default layout;