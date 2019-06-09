## git
### 初始化
`git init`
### 配置用户名
`git config -g user.name "xxx"`
### 配置邮箱
`git config -g user.mail "xxx"`
### 将远端仓库克隆到本地
`git clone 'ssh' 或者 'url'`
### 生成密钥(默认储存在C:/user/用户名/.ssh)
`ssh-keygen -t rsa -C "已配置邮箱"`
### 查看状态
`git status`
### 将代码添加到暂存区
`git add .`
### 将代码提交到版本库
`git commit -m "xxx"`
### 将本地版本库中的代码推送至远端仓库中
`git push`
### 拉取远端仓库最新资源,拉取后再提交
`git pull`
### 忽略文件(在文件夹中创建.gitignore文件,使用编辑器打开填写需要忽略的文件名)
### 查看已提交的日志
`git log`
### 一行显示提交日志
`git log --oneline`
### 查看对版本库操作的历史记录
`git reflog`
### 回退版本
`git reset --hard Head~0`
### 创建一个dev分支
`git branch dev`
### 查看当前分支
`git branch`
### 切换分支
`git checkout`
### 创建并切换分支至dev
`git checkout -b dev`
### 将dev分支合并到当前分支
`git merge dev`
### 删除dev分支
`git branch -d dev`
### 在开发中创建了分支远端仓库没有新创建的分支
```
git push --set-upstream origin feature
在GitHub中打开branch,点击feature分支右侧的new pull request 打开RP合并代码到主分支上
```
