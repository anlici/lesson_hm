import React, {
  useState
} from "react"
import s from './style.module.less'
import { Icon } from 'zarm'
import BillItem from '@/components/BillItem'

const Home = () => {
  const [list, setList] = useState([
    {
      date: '2020-12-20',
      bills: [
        {
          amount: "21.53",
          date: "2020-12-20T00:00:00",
          id: 1,
          pay_type: 1,
          remark: "",
          type_id: 1,
          type_name: "餐饮"
        },
        {
          amount: "11.78",
          date: "2020-12-20T22:28:00",
          id: 2,
          pay_type: 1,
          remark: "",
          type_id: 1,
          type_name: "餐饮"
        },
        {
          amount: "9.75",
          date: "2020-12-20T22:28:00",
          id: 3,
          pay_type: 1,
          remark: "",
          type_id: 1,
          type_name: "餐饮"
        },
        {
          amount: "25.80",
          date: "2020-12-20T22:35:00",
          id: 4,
          pay_type: 2,
          remark: "",
          type_id: 11,
          type_name: "工资"
        }
      ]
    },
    {
      date: '2020-12-09',
      bills: [
        {
          amount: "25.00",
          date: "2020-12-09T09:59:00",
          id: 5,
          pay_type: 1,
          remark: "我是备注",
          type_id: 1,
          type_name: "餐饮"
        },
        {
          amount: "2508.00",
          date: "2020-12-09T00:00:00",
          id: 6,
          pay_type: 1,
          remark: "",
          type_id: 6,
          type_name: "学习"
        }
      ]
    }
  ]);

  return (
    <div className={s.home}>
      <div className={s.header}>
        <div className={s.dataWrap}>
          <span className={s.expense}>总支出:<b>$200</b></span>
          <span className={s.income}>总收入:<b>$500</b></span>
        </div>
        <div className={s.typeWrap}>
          <div className={s.left}>
            <span className={s.title}>类型<Icon className={s.arrow} type="arrow-bottom"/></span>
          </div>
          <div className={s.right}>
            <span className={s.time}>2025-02<Icon className={s.arrow} type="arrow-bottom"/></span>
          </div>
        </div>
      </div>
      <div className={s.contentWrap}>
        {
          list.map((item) => <BillItem key={item.date} bill={item}/>)
        }
      </div>
    </div>
  )
}

export default Home