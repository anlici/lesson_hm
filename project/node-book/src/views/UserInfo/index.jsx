import React, { useEffect, useState } from 'react';
import { Button, FilePicker, Input, Toast } from 'zarm';
import { useNavigate } from 'react-router-dom';
// import Header from '@/components/Header';
import axios from 'axios';
import { 
  getUserInfo ,
  updateSignature
} from '@/api'
import { get, post,imgUrlTrans } from '@/utils'
// import { baseUrl } from 'config'
import s from './style.module.less';
const defaultAvatar = 'http://s.yezgea02.com/1615973940679/WeChat77d6d2ac093e247c361f0b8a7aeb6c2a.png'
const UserInfo = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState('')
  const [signature, setSignature] = useState('')
  const token = localStorage.getItem('token')

  useEffect(() => {
    (async () => {
      const { data } = await getUserInfo();
      console.log(data)
      setSignature(data.signature)
    })()
  }, [])

  // 获取用户信息
  // const getUserInfo = async () => {
  //   const { data } = await get('/api/user/get_userinfo');
  //   setUser(data);
  //   setAvatar(imgUrlTrans(data.avatar))
  //   setSignature(data.signature)
  // };
  // 上传头像，初始化
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getUserInfo(); // 获取用户信息
      setAvatar(data.avatar? imgUrlTrans(data.avatar): defaultAvatar); // 初始化
      // setAvatar(data.avatar,imgUrlTrans(data.avatar));// 初始化
    };
    fetchData();
  },[]);
  useEffect(() => {
    console.log('当前头像路径avatar', avatar);
    
  },[avatar])
  const handleSelect = (file) => {
    //console.log('file.file', file.file)
    if (file && file.file.size > 500 * 1024) {
      Toast.show('上传头像不得超过 500 KB！！')
      return
    }
    // 二进制 文件
    let formData = new FormData()
    formData.append('file', file.file)
    axios({
      method: 'post',
      url: `/upload`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token // 携带token
      }
    }).then(res => {
      console.log('完整响应:', res.data);
      if (res.data.code === 200 && res.data.data) { // 添加空值判断
        const fullPath = imgUrlTrans(res.data.data);
        console.log('拼接后路径:', fullPath);
        setAvatar(fullPath);
      } else {
        Toast.show(res.data.msg || '路径缺失');
      }
    })
  }

  const save = async () => {
    const { data } = await updateSignature(signature);

    Toast.show('修改成功')
    navigate.go(-1)
  }

  return <>
    {/* <Header title='用户信息' /> */}
    <div className={s.userinfo}>
      <h1>个人资料</h1>
      {/* 头像修改 */}
      <div className={s.item}>
        <div className={s.title}>头像</div>
        <div className={s.avatar}>
          <img className={s.avatarUrl} src={avatar} alt=""
            onError={(e) => {
              console.error('图片加载失败:', e.target.src);
              e.target.src = defaultAvatar; // 替换为默认图片
            }}
          />
          <div className={s.desc}>
            <span>支持 jpg、png、jpeg 格式大小 500KB 以内的图片</span>
            <FilePicker className={s.filePicker} onChange={handleSelect} accept="image/*">
              <Button className={s.upload} theme='primary' size='xs'>点击上传</Button>
            </FilePicker>
          </div>
        </div>
      </div>
      {/* 个人签名 */}
      <div className={s.item}>
        <div className={s.title}>个性签名</div>
        <div className={s.signature}>
          <Input
            clearable
            type="text"
            value={signature}
            placeholder="请输入个性签名"
            onChange={(value) => setSignature(value)}
          />
        </div>
      </div>
      <Button onClick={save} style={{ marginTop: 50 }} block theme='primary'>保存</Button>
    </div>
  </>
};

export default UserInfo;