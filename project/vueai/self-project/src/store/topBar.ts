import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { HouseTopBar,HouseNewsCard,HouseMenu} from '../types/house'
import type { newsCards } from '../types/news'

export const useTopStore = defineStore('house', ()=> {
    const topBarState = ref<HouseTopBar[]>([
        {
            title: '新房',
            icon: 'shop-o'
        },
        {
            title: '二手房',
            icon: 'wap-home-o'
        },
        {
            title: '租房',
            icon: 'wap-home'
        },
        {
            title: '商铺写字楼',
            icon: 'shop'
        },
        {
            title: '我要卖房',
            icon: 'manager'
        }
    ])

    const menuFirstBarState = ref<HouseTopBar[]>([
        {
            title: '装修建材',
            icon: 'like'
        },
        {
            title:'找小区',
            icon: 'star'
        },
        {
            title: '出租',
            icon: 'comment'
        },
        {
            title: '搬家',
            icon: 'fire'
        },
        {
            title: '房贷计算',
            icon: 'gold-coin'
        }
    ])
    const menuSecondBarState = ref<HouseTopBar[]>([
        {
            title: '装修建材',
            icon: 'like'
        },
        {
            title:'找小区',
            icon: 'star'
        },
        {
            title: '出租',
            icon: 'comment'
        },
        {
            title: '搬家',
            icon: 'fire'
        },
        {
            title: '房贷计算',
            icon: 'gold-coin'
        },
        {
            title: '新房',
            icon: 'shop-o'
        },
        {
            title: '二手房',
            icon: 'wap-home-o'
        },
        {
            title: '租房',
            icon: 'wap-home'
        },
        {
            title: '商铺写字楼',
            icon: 'shop'
        },
        {
            title: '我要卖房',
            icon: 'manager'
        }
    ])
    const recentlyViewedState =  ref<HouseNewsCard[]>([
        {
            title:'楼盘热搜',
            router:'/renderPage',
            img:['https://img2.baidu.com/it/u=266167928,1758382584&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1722963600&t=1b4916631684b814e9e6be29f06ce79a',
                'https://img0.baidu.com/it/u=915991286,98713981&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1722963600&t=50a759dadc5ec7ca45b4350dfd6b24c8'
            ],
            content:'近一周人气榜'

        },
        {
            title:'楼盘热搜',
            router:'/renderPage',
            img:['https://img1.baidu.com/it/u=1570582468,3699468930&fm=253&fmt=auto&app=120&f=JPEG?w=522&h=377',
                'https://img2.baidu.com/it/u=2681564380,2939224897&fm=253&fmt=auto&app=138&f=JPEG?w=693&h=500'
            ],
            content:'近一周人气榜'

        },
        {
            title:'楼盘热搜',
            router:'/renderPage',
            img:['https://img2.baidu.com/it/u=3187125700,4002027356&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=407',
                'https://img2.baidu.com/it/u=595874756,4164471840&fm=253&fmt=auto&app=138&f=JPEG?w=569&h=390'
            ],
            content:'近一周人气榜'

        },
        {
            title:'楼盘热搜',
            router:'/renderPage',
            img:['https://img1.baidu.com/it/u=1334145719,1502262857&fm=253&fmt=auto&app=120&f=JPEG?w=930&h=427',
                'https://img2.baidu.com/it/u=3247186098,936450932&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
            ],
            content:'近一周人气榜'

        },
        {
            title:'楼盘热搜',
            router:'/renderPage',
            img:['https://img1.baidu.com/it/u=3914022884,810148435&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=332',
                'https://img1.baidu.com/it/u=1108120285,826118105&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
            ],
            content:'近一周人气榜'

        }

    ])
    const newsCardsState = ref<newsCards[]>([
        {
            oldPrice:6208,
            newPrice:7266,
            newsTitle:['房价地图|7月份部分热点城市二手房价格持续下跌,是好是坏','房东置换新房愿高位，今年杭州房子如此好卖？'],
            newsLink:['/newsPage','/newsPage']
         

        }
    ])
    
    return { topBarState,menuFirstBarState,menuSecondBarState,recentlyViewedState,newsCardsState}
})