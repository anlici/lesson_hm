import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
    HomeTopBarItem,
    PopularDestinationsItem,
    HomeNavBarItem,
    ShareTourItem
} from "../types/home";

export const useHomeStore = defineStore('home', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<HomeTopBarItem[]>([
        {
            title: "门票",
            icon: "coupon-o",
        },
        {
            title: "当地游",
            icon: "location-o",
        },
        {
            title: "酒店",
            icon: "hotel-o",
        },
        {
            title: "跟团游",
            icon: "flag-o",
        },
        {
            title: "自由行",
            icon: "guide-o",
        }
    ])
    const navBarState = ref<HomeNavBarItem[]>([
        {
            title: "自驾频道",
            icon: "logistics",
            msg: "自驾旅游路线"
        },
        {
            title: "特色酒店",
            icon: "shopping-cart-o",
            msg: "京郊度假"
        },
        {
            title: "景点门票",
            icon: "coupon-o",
            msg: "经济实惠"
        }
    ])
    const PopularDestinations = ref<PopularDestinationsItem[]>([

        {
            area: "北京",
            type: "热门精选",
            img:
                "https://img1.baidu.com/it/u=909356894,57412164&fm=253&fmt=auto&app=120&f=JPEG?w=627&h=418",
        },
        {
            area: "江西",
            type: "猜你喜欢",
            img:
                "https://img1.baidu.com/it/u=3793477550,3225034004&fm=253&fmt=auto&app=138&f=JPEG?w=767&h=500",

        },
        {
            area: "成都",
            type: "热门精选",
            img:
                "https://img0.baidu.com/it/u=2419867234,922863221&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",

        },
        {
            area: "厦门",
            type: "夏日精选",
            img:
                "https://img0.baidu.com/it/u=3782716812,1633484649&fm=253&fmt=auto&app=120&f=JPEG?w=757&h=500",

        },
        {
            area: "西安",
            type: "美食精选",
            img:
                "https://img1.baidu.com/it/u=1734126347,1332181300&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",

        },
        {
            area: "杭州",
            type: "当季精选",
            img:
                "https://img1.baidu.com/it/u=3315511307,2621742954&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500",

        },
        {
            area: "长沙",
            type: "美食精选",
            img:
                "https://img0.baidu.com/it/u=4102936641,214246845&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500",
        },
        {
            area: "广州",
            type: "夏季精选",
            img:
                "https://img2.baidu.com/it/u=3703821978,4145555404&fm=253&fmt=auto&app=120&f=JPEG?w=1197&h=800",
        },
    ])
    const ShareTour = ref<ShareTourItem[]>([
        {
            nickName: "九九旅游日记",
            title: "一条视频讲清厦门怎么玩～附攻略",
            img: "https://img2.baidu.com/it/u=1224357212,4252795804&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 9865
        },
        {
            nickName: "穷游特种兵",
            title: "大学生穷游特种兵之杭州两天一夜游",
            img: "https://img1.baidu.com/it/u=124748371,2878554213&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 4750
        },
        {
            nickName: "小张旅游记",
            title: "我宣布！这个夏天我要去这里！",
            img: "https://img0.baidu.com/it/u=1388664807,2615899105&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=692",

            loveNum: 9899
        },
        {
            nickName: "小李爱旅游",
            title: "北京旅游攻略|终于有人一次性说清楚了！",
            img: "https://img1.baidu.com/it/u=1709212598,131203521&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            loveNum: 4315
        },
        {
            nickName: "星星",
            title: "穷游海边城市千万不要错过 甚至一天300",
            img: "https://img1.baidu.com/it/u=1389924459,2280418880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 780
        },
        {
            nickName: "爱旅游的小王",
            title: "可遇不可求的蓝眼泪",
            img: "https://img0.baidu.com/it/u=2302978910,4270623494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 9520
        },
        {
            nickName: "小张旅游记",
            title: "我宣布！这个夏天我要去这里！",
            img: "https://img0.baidu.com/it/u=2302978910,4270623494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 9899
        },
        {
            nickName: "小李爱旅游",
            title: "北京旅游攻略|终于有人一次性说清楚了！",
            img: "https://img1.baidu.com/it/u=1709212598,131203521&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            loveNum: 4315
        },
        {
            nickName: "星星",
            title: "穷游海边城市千万不要错过 甚至一天300",
            img: "https://img1.baidu.com/it/u=1389924459,2280418880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 780
        },
        {
            nickName: "爱旅游的小王",
            title: "可遇不可求的蓝眼泪",
            img: "https://img0.baidu.com/it/u=1388664807,2615899105&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=692",
            loveNum: 9520
        },
        {
            nickName: "穷游特种兵",
            title: "大学生穷游特种兵之杭州两天一夜游",
            img: "https://img0.baidu.com/it/u=2897933825,1666004784&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 4750
        },
        {
            nickName: "九九旅游日记",
            title: "一条视频讲清厦门怎么玩～附攻略",
            img: "https://img2.baidu.com/it/u=1224357212,4252795804&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 9865
        },
    ])
    return {
        topBarState,
        navBarState,
        PopularDestinations,
        ShareTour
    }

})