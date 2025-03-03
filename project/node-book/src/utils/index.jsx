// 项目中的接口统一管理
import axios from './axios'

export const get = axios.get
export const post = axios.post

export const getUserInfo = async () => {
  return await get('/userInfo')
}

export const typeMap = {
  1: {
    icon: 'canyin'
  },
  2: {
    icon: 'fushi'
  },
  3: {
    icon: 'jiaotong'
  },
  4: {
    icon: 'riyong'
  },
  5: {
    icon: 'gouwu'
  },
  6: {
    icon: 'xuexi'
  },
  7: {
    icon: 'yiliao'
  },
  8: {
    icon: 'lvxing'
  },
  9: {
    icon: 'renqing'
  },
  10: {
    icon: 'qita'
  },
  11: {
    icon: 'gongzi'
  },
  12: {
    icon: 'jiangjin'
  },
  13: {
    icon: 'zhuanzhang'
  },
  14: {
    icon: 'licai'
  },
  15: {
    icon: 'tuikuang'
  },
  16: {
    icon: 'qita'
  }
}
export const imgUrlTrans = (url) => {
    if(!url || typeof url !== 'string') {
      console.log('url is not string',url);
      
      return '';
    }
    // 确保有/
    // url = url.startsWith('/') ? url:`/${url}`;
    return `http://localhost:7001${url}`
}