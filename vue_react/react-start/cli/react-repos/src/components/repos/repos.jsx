import { useState } from 'react'
import './repos.css'
function Repos() {
  
  // js 区域 
  // 使用一个响应式数据状态
  // 返回数组 解构，数组的第一项是当前的状态，数组的第二项是修改状态的方法
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true);
  fetch('https://api.github.com/users/anlici/repos')
     .then(res => res.json())
     .then(data => {
        setLoading(false)
        setRepos(data)
     })
  return (
    
    // html? react 发明了 JSX 语法 js 写HTML
    // JS  
    <div className="github-repos">
      {/* 注释 */}
      
      <h2>Github Repositories</h2>
      {loading && <p>loading...</p>}
      <ul>
      {
        repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url}>
                {repo.name}
            </a>
            <span>
                作者：{repo.owner.login}
            </span>
          </li>
        ))
      }
      </ul>
      {!loading && repos.length === 0 && <p>没有repos</p>}
    </div>
  )
}

export default Repos