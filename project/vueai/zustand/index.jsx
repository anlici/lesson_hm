import React from 'react';
import s from './style.module.less'
import { TabBar } from 'zarm';
import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'
import CustomIcon from '@/components/CustomIcon';

// 页面底部 编程导航
const  NavBar = ({showNav}) => {
    const [activeKey, setActiveKey] = React.useState('/');
    const navigate = useNavigate();// 路由跳转
    const changeTab = (key) => {
        navigate(key);
        setActiveKey(key)
    }
    return (
        <TabBar className={s.tab}
         visible={showNav} 
         activeKey={activeKey} onChange={changeTab}>
            <TabBar.Item 
                itemKey={'/'}
                title={'账单'}
                icon={ <CustomIcon type={'zhangdan'} />}
            />
            <TabBar.Item 
                itemKey={'/data'}
                title={'统计'}
                icon={ <CustomIcon type={'tongji'} />}
            />
            <TabBar.Item 
                itemKey={'/user'}
                title={'我的'}
                icon={ <CustomIcon type={'wode'} />}
            />
        </TabBar>
    )
}
// 校验
NavBar.propTypes = {
    showNav: PropTypes.bool
}
export default NavBar;