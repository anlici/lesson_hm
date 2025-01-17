// state（ui jsx）函数使用jsx语法，
import {
    defineComponent,// vue3声明组件函数，
    h,// vue3创建虚拟dom函数，
} from 'vue';

const Hello = defineComponent({
    name: 'Hello',
    props:{
        msg:String,
    },
    setup(props) {// 返回jsx
        return () => (
            <div className="hello">
                {props.msg}
            </div>
        )
    }
})

export default Hello;