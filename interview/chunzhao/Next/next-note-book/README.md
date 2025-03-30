## noteBOOK
- 
- 深拷贝：不能拷贝函数、有些数据结构（map，set）不能深拷贝
- 
## 亮点
- 包：uuid 处理高并发时唯一id 、 dayjs 格式化时间
- 细粒化组件（无状态组件，方便复用、管理、下线方便）
- 骨架屏 skeleton 用户体验优化方案；
- 动态样式 封装公共组件
- marked markdown转译成html
  dangerouslySetInnerHTML={
      {
          __html: sanitizeHtml(
              marked(Children || ''), {
                  allowedTags,
                  allowedAttributes
              }
          )
      }
  }
- 表演
- 
## react hooks
- useState, useRef, useEffect, useTransition
- useTransition: 方便的切换页面，优化用户体验
- 状态管理控制 flash 动画效果
- next.js 服务器和客户端组件
  - sidebarNoteItemHeader 细粒，拆分称服务器
  - sidebarNoteList 细粒，拆分称服务器 
