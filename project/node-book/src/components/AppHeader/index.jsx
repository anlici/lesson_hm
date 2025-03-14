import React from 'react';
import s from './style.module.less'
import {
  useNavigate
} from 'react-router-dom'
import PropTypes from 'prop-types';
import {
  NavBar, 
  Icon
} from 'zarm';

const AppHeader = (props) => {
    const navigate = useNavigate()
    const { title, showBack, showNav } = props // ui 变简单
  return (
    <div className={s.headerWarp}>
      <div className={s.block}>
        <NavBar 
          className={s.header}
          left={<Icon 
              type="arrow-left" 
              theme="primary" 
              onClick={() => navigate(-1)}
          />}
          title={title}
        /> 
      </div>
    </div>
  )
}
AppHeader.propTypes = {
    title: PropTypes.string.isRequired // 必须 传递标题
}
export default AppHeader;