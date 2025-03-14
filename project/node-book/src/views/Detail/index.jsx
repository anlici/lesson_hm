import React,{useState,useEffect} from 'react'
import {
    useLocation,
} from 'react-router-dom'
import qs from 'query-string'
import { useParams } from 'react-router-dom'
import {getBillDetail} from '@/api';
import s from './style.module.less'
import AppHeader  from '@/components/AppHeader';
import CustomIcon from '@/components/CustomIcon'
import {typeMap} from '@/utils'
import cx from 'classnames'; // 类名绑定


const Detail = () => { 
  // const {id:id2} = useParams();

  const location = useLocation()
  let {id} = qs.parse(location.search)
  console.log(location)

  const [detail,setDetail] = useState({})
  const getDetail = async () => {
    const result = await getBillDetail({id}).then(res => {
      console.log(res)
    })
    const data = await res.json()
    setDetail(data)
  }
  // 分层
  useEffect(() => {
    getDetail()
    return () => {
    }
  },[])
  return (
    <div className={s.detail}>
        <AppHeader title="账单详情"></AppHeader>
        <div className={s.card}>
          <div className={s.type}>
            <span className={cx(
              {[s.expense]:detail.pay_type==1},
              {[s.income]:detail.pay_type==2}
              )}>

              {/* typeMap全局设置type_id  */}
              <CustomIcon
                  className={s.iconfont}
                  type={detail.type_id? typeMap[detail.type_id].icon: 1}
              />
            </span>
            <span>{detail.type_name}</span>
          </div>
        </div>
    </div>
  )
}
export default Detail