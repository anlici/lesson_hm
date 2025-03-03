import React from 'react';
import s from './style.module.less';
import PropTypes from 'prop-types';
import { Cell } from 'zarm';
import { typeMap } from '@/utils';
import CustomIcon from '@/components/CustomIcon';

const BillItem = ({ bill }) => {
  const [expense, setExpense] = React.useState(0);
  const [income, setIncome] = React.useState(0);
  const goToDetail = (item) => {
    console.log(item);
  } 

  return (
    <div className={s.item}>
      <div className={s.headerDate}>
        <div className={s.date}>{bill.date}</div>
        <div className={s.money}>
          <span>
            <img src="//s.yezgea02.com/1615953405599/zhi%402x.png" alt='支' />
            <span>¥{ expense.toFixed(2) }</span>
          </span>
          <span>
            <img src="//s.yezgea02.com/1615953405599/shou%402x.png" alt="收" />
            <span>¥{ income.toFixed(2) }</span>
          </span>
        </div>
      </div>
      {
        bill && bill.bills.length && bill.bills.map( item => (
          <Cell
            key={item.id}
            className={s.bill}
            onClick={() => goToDetail(item)}
            title={
              <>
                <CustomIcon 
                  className={s.itemIcon}
                  type={item.type_id? typeMap[item.type_id].icon: 1}
                />
                <span>{ item.type_name }</span>
              </>
            }
            description={
              (
                <span style={{color: item.pay_type == 2 ? 'red': '#39be77'}}>
                {`${item.pay_type == 1 ? '-' : '+'}${item.amount}`}
                </span>
              )
            }
            help={<div>{item.date}</div>}
          >

          </Cell>
        ))
      }
      
    </div>
  )
}

BillItem.propTypes = {
  bill: PropTypes.object
}

export default BillItem;