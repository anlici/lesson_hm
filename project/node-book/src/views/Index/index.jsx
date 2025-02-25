
import React from 'react'
import s from './style.module.less' // 直接解构
export default function Index() {
    return (
        // 类名样式 数据
        <div className={s.index}>
            <span>Index</span>
        </div>
    )
}