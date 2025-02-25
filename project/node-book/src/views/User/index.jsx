import React from 'react'
import s from './user.module.scss'
const User = () => {
  return (
    <div className={s.user}>
      <div className={s.head}>
        <div className={s.info}>
          <span>昵称：</span>
          <span>
            <image src="" alt="" />
          </span>
          <b>这家伙很懒，什么也没有留下</b>
        </div>
      </div>
    </div>
  )
}

export default User