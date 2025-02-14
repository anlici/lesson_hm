export type HouseTopBar = {
    title: string;
    icon: string;
}
export type HouseNewsCard = {
    title:string;
    router:string;
    img:Array<string>;
    content:string;
}
export type HouseMenu = {
    title:string;
}
export type HouseDetail ={
    name:string;
    img:string;
    price:number;
    describe:string;
}