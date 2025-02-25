import { Component } from "react";

// 
const route = {
    path:'/',
    component:require('./index.tsx').default,
    children:[
        {
            path:'/',
            component:require('./index.tsx').default
        }
    ]
}
export default route;