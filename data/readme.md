# talk in data

nba 赛季统计投篮设计 设计shot表，设计哪些字段
## 设计shot表字段
- 球员 (player_id, player_name) shot_made(bool 投中/未投中) shot_type(string 投中几分 2rd|3rd|free throw|layup)
- 球队 (team_id, team_name)
- 时间 (game_id, period, time) 
- eventType (string 进攻/防守 ThrowIn/Catch 罚球 篮板)
- actionType (string Layup 上篮 | Dunk 扣球)
- left (分、秒) 重要性

## AI模型设计
- 输入：shot表 数据助理
- prompt 提示词，coding过程
    - 指定角色 role
    - 指定任务 task
    - 约束条件 constraint，不用做什么

- 输出：shot表
- 训练：训练模型
  请包含赛事、球队、队员、得分等
  请返回SQL，并给出原因