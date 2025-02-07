//RouteRecordRow 由vue-router提供的
//自定义类型约束
//pinia 用到的状态都加类型约束，数据是核心
//type 声明类型
export type HomeTopBarItem ={
    title:string;
    icon:string;
}

export type HomeNavBarItem ={
    title:string;
    icon:string;
    msg:string;
}

export type PopularDestinationsItem={
    area:string;
    type:string;
    img:string;
}

export type ShareTourItem={
    nickName:string;
    title:string;
    img:string;
    loveNum:number;
}