- git 有哪些命令？
  - git init 创建新的本地创库
  - git config user.name "your name" 用户名
  - git config user.email "you@example.com"
  - git clone   克隆
  - git status 查看当前仓库状态
  - git add . 添加所有更改的文件到暂存区
  - git commit -m "message" 提交从暂存区更改到本地仓库
  - git log 查找历史
  - git branch 列出所有分支
  - git branch <branch-name> 创建新分支
  - git checkout <branch-name> 切换分支
  - git merge feature-1  切换分支 ，假设你当前在 main 分支上，并且你想将 feature-1 分支的更改合并到 main 分支
  - 远程仓库
    查看远程仓库 git remote -v
    添加远程     git remote add <remote-name> <repository-url>
    推送本地更改到远程 git push <remote-name> <branch-name>
    从远程拉取更改 git pull <remote-name> <branch-name>
  - 撤销操作
    git checkout -- <file> 撤销工作目录更改
    git reset <file> 撤销已暂存的更改


  - git 
  -git help -a  ：k向上，j向下，q退出
  - vi 编辑器 

- 如何了解git命令作用和参数

## 代码仓库
   文件夹 -> 开发目录（网站） -> 代码仓库
   - 好处
     项目代码版本
     多人协作
     .git 目录 就是空的仓库 相关东西./git 目录下
     cd .git 进入仓库
     ls 展开（Mac），.
     config 配置，
     # 设置全局用户名
   git config --global user.name "John Doe"

# 设置全局邮箱
    git config --global user.email "john.doe@example.com"
    如果你没有看到.git目录，那是因为这个目录默认是隐藏的，用ls -ah命令就可以看见
   - untracked file 未跟踪的文件 还没纳入版本管理
   - on branch main主分支上 默认分支master
    git log
    代码提交记录
   -- oneline 一行显示

   - 暂存区 仓库
    - 一次性多个文件多次加入暂存区，可以回退，组成一个提交逻辑
    - 一次commit -m 要规范 讲清楚任务 围绕