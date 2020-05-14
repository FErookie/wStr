# wStr
2020微信小程序比赛后端部分

## 接口文档 

### 约定
所有非public route（就是接口route没写public）需要在header中加入token字段做标识

### route名： /public/login

请求类型：post    
请求参数：  
```
{
    code ：wx.login success 回调返回的res.code 
} 
```
  
响应结果:   
```
data:{
    data:{token:"token值"}, 
    err: null, 
    code: 200
}
```

### route名: /auth/updateInfo

请求类型: post  
请求参数:     
```
{  
	"schoolName": "",  
	"wx": "",  
	"qq": "",  
	"phone": ""  
}
```
响应结果  
```
data:{
    data:null, 
    err: null, 
    code: 200
}

```
### route名: /public/getTypes

请求类型: get   
响应结果  
```
data: {
    "code": 200,
    "data": [
        "土木建筑",
        "挑战杯",
        "职业技能",
        "力学",
        "理科",
        "物理",
        "创青春",
        "工程机械",
        "交通车辆",
        "电子&自动化",
        "科技文化艺术节",
        "创业",
        "模特",
        "航空航天",
        "数学",
        "工科",
        "材料高分子",
        "健康生命&医学",
        "计算机&信息技术",
        "演讲主持&辩论",
        "数学建模",
        "社会综合",
        "商业",
        "环保公益",
        "程序设计",
        "综合",
        "化学化工",
        "商科",
        "外语",
        "体育",
        "文体",
        "机器人",
        "环境能源"
    ],
    "err": null
}
```

### route名: /public/getTypes

请求类型: get  
响应结果  
```
data: {
    "code": 200,
    "data": [
        "土木建筑",
        "挑战杯",
        "职业技能",
        "力学",
        "理科",
        "物理",
        "创青春",
        "工程机械",
        "交通车辆",
        "电子&自动化",
        "科技文化艺术节",
        "创业",
        "模特",
        "航空航天",
        "数学",
        "工科",
        "材料高分子",
        "健康生命&医学",
        "计算机&信息技术",
        "演讲主持&辩论",
        "数学建模",
        "社会综合",
        "商业",
        "环保公益",
        "程序设计",
        "综合",
        "化学化工",
        "商科",
        "外语",
        "体育",
        "文体",
        "机器人",
        "环境能源"
    ],
    "err": null
}
```

### route名: /public/getLists

请求类型: post  
请求体:
```
{
    type: "",
    offset: ,//分页用的数字
}
```
响应结果
```
data: {
    "code": 200,
    "data": [

    ],
    "err": null
}
```

### route名: /public/getLists

请求类型: post    
请求体:  
```
{
    type: "",
    offset: ,//分页用的数字
}
```
响应结果  
```
data: {
{
    "code": 200,
    "data": [
        {
            "id": "2e52a6f1-1d9b-48c4-914a-1136689ac152",
            "status": "正在报名",
            "type": "工科",
            "title": "2020年第十届MathorCup高校数学建模挑战赛",
            "level": "国家级",
            "url": "https://www.saikr.com/vse/mathorcup/2020",
            "sponsor": "中国优选法统筹法与经济数学研究会",
            "registration": "2019.12.13 ～ 2020.05.20",
            "finTime": "2020.05.21 ～ 2020.05.25",
            "createdAt": "2020-05-12T07:23:03.338Z",
            "updatedAt": "2020-05-12T07:23:03.338Z"
        },
        {
            "id": "54d6d514-d0e4-4531-9c5f-fa0458e265c1",
            "status": "正在报名",
            "type": "工科",
            "title": "2020年“远见者杯”全国大学生创新促进就业（简历设计）大赛",
            "level": "国家级",
            "url": "https://www.saikr.com/vse/resume/2020",
            "sponsor": "《智慧中国》杂志社 中国电子商会",
            "registration": "2020.02.18 ～ 2020.06.30",
            "finTime": "2020.02.18 ～ 2020.06.30",
            "createdAt": "2020-05-12T07:23:03.340Z",
            "updatedAt": "2020-05-12T07:23:03.340Z"
        },
        {
            "id": "d0cf6eb7-ea8d-4cd5-b8ac-f056b477c6cf",
            "status": "正在报名",
            "type": "工科",
            "title": "邵阳职业技术学院2020年数学建模竞赛校内赛",
            "level": "校级",
            "url": "https://www.saikr.com/vse/syzyedu/shumo/2020",
            "sponsor": "邵阳职业技术学院",
            "registration": "2020.04.10 ～ 2020.05.14",
            "finTime": "2020.05.14 ～ 2020.05.18",
            "createdAt": "2020-05-12T07:23:03.341Z",
            "updatedAt": "2020-05-12T07:23:03.341Z"
        },
        {
            "id": "99239ccc-b610-4d72-a1c4-0c38a4a8a796",
            "status": "正在报名",
            "type": "工科",
            "title": "浙江越秀外国语学院2020年数学建模竞赛校内赛",
            "level": "校级",
            "url": "https://www.saikr.com/vse/zyufl/shumo/2020",
            "sponsor": "浙江越秀外国语学院",
            "registration": "2020.04.10 ～ 2020.05.15",
            "finTime": "2020.05.21 ～ 2020.05.24",
            "createdAt": "2020-05-12T07:23:03.341Z",
            "updatedAt": "2020-05-12T07:23:03.341Z"
        },
        {
            "id": "78bfed69-c41c-47c1-88d9-1797cf64c5c4",
            "status": "正在报名",
            "type": "工科",
            "title": "青岛农业大学2020年数学建模竞赛校内赛",
            "level": "校级",
            "url": "https://www.saikr.com/vse/qau/shumo/2020",
            "sponsor": "青岛农业大学",
            "registration": "2020.04.28 ～ 2020.05.15",
            "finTime": "比赛时间待定",
            "createdAt": "2020-05-12T07:23:03.341Z",
            "updatedAt": "2020-05-12T07:23:03.341Z"
        },
        {
            "id": "4b3d1e66-96cf-41c1-99e8-f3a15d711b06",
            "status": "正在报名",
            "type": "工科",
            "title": "2020年第十届MathorCup高校数学建模挑战赛（塔里木大学报名处）",
            "level": "省级",
            "url": "https://www.saikr.com/vse/37805",
            "sponsor": "中国优选法统筹法与经济数学研究会",
            "registration": "2020.02.20 ～ 2020.05.16",
            "finTime": "2020.05.21 ～ 2020.05.25",
            "createdAt": "2020-05-12T07:23:03.341Z",
            "updatedAt": "2020-05-12T07:23:03.341Z"
        },
        {
            "id": "d55de802-7853-40f1-a1c0-7eed7fac0248",
            "status": "正在报名",
            "type": "工科",
            "title": "2020江西财经大学数学建模竞赛",
            "level": "校级",
            "url": "https://www.saikr.com/vse/2020JUFEMCM",
            "sponsor": "江西财经大学创业学院、信息管理学院",
            "registration": "2020.05.06 ～ 2020.05.20",
            "finTime": "2020.05.21 ～ 2020.05.26",
            "createdAt": "2020-05-12T07:23:03.342Z",
            "updatedAt": "2020-05-12T07:23:03.342Z"
        },
        {
            "id": "f356adae-1b90-47f1-822a-36e319216bea",
            "status": "正在报名",
            "type": "工科",
            "title": "中南大学2020年数学建模竞赛校内赛",
            "level": "校级",
            "url": "https://www.saikr.com/vse/csu/shumo/2020",
            "sponsor": "中南大学",
            "registration": "2020.04.30 ～ 2020.05.21",
            "finTime": "比赛时间待定",
            "createdAt": "2020-05-12T07:23:03.342Z",
            "updatedAt": "2020-05-12T07:23:03.342Z"
        },
        {
            "id": "4e0cb2c7-c1f4-44a4-ba04-b62428fd55b5",
            "status": "正在报名",
            "type": "工科",
            "title": "2020西南交通大学数学建模校赛",
            "level": "校级",
            "url": "https://www.saikr.com/vse/37858",
            "sponsor": "西南交通大学教务处 西南交通大学数学学院 西南交通大学资产与实验室管理处 共青团西南交通大学委员会",
            "registration": "2020.04.24 ～ 2020.05.24",
            "finTime": "2020.05.25 ～ 2020.06.01",
            "createdAt": "2020-05-12T07:23:03.342Z",
            "updatedAt": "2020-05-12T07:23:03.342Z"
        },
        {
            "id": "534e4bd7-7269-481a-8f5c-a015e0bcf898",
            "status": "正在报名",
            "type": "工科",
            "title": "中国大学生机械工程创新创意大赛——2020智能制造大赛",
            "level": "国家级",
            "url": "https://www.saikr.com/vse/cmes-imic/19",
            "sponsor": "中国机械工程学会  教育部高等学校机械类专业教学指导委员会  教育部高等学校材料类专业教学指导委员会  教育部高等学校工业工程类专业教学指导委员会",
            "registration": "2020.02.15 ～ 2020.05.31",
            "finTime": "2020.08.01 ～ 2020.11.10",
            "createdAt": "2020-05-12T07:23:03.342Z",
            "updatedAt": "2020-05-12T07:23:03.342Z"
        }
    ],
    "err": null
}
}
```
### route名: /public/createTeam

请求类型: post   
请求体:  
```
{
    "postTime": "2019-12-13",
    "details": "测试用队伍",
    "needPerson": 3,
    "finTime": "2019-12-22",
    "competitionId": "2e52a6f1-1d9b-48c4-914a-1136689ac152"
}
```
响应结果  
```
data: {
    "code": 200,
    "data": null
    "err": null
}
```
### route名: /public/createTeam

请求类型: post    
请求体:  
```
{
    "postTime": "2019-12-13",
    "details": "测试用队伍",
    "needPerson": 3,
    "finTime": "2019-12-22",
    "competitionId": "2e52a6f1-1d9b-48c4-914a-1136689ac152"
}
```
响应结果
```
data: {
    "code": 200,
    "data": null
    "err": null
}
```
### route名: /public/getCompetitionTeam

请求类型: post   
请求体:  
```
{
  "offset" : 0,
  "competitionId" : "2e52a6f1-1d9b-48c4-914a-1136689ac152"
}
```
响应结果  
```
data: {
    "code": 200,
    "data": [
        {
            "id": "41e30bab-414e-4ef4-a3e9-6640bd5017b9",
            "postTime": "2019-12-13T00:00:00.000Z",
            "details": "测试用队伍",
            "needPerson": 3,
            "finTime": "2019-12-22T00:00:00.000Z",
            "createdAt": "2020-05-12T11:20:38.780Z",
            "updatedAt": "2020-05-12T11:20:38.780Z",
            "CompetitionId": "2e52a6f1-1d9b-48c4-914a-1136689ac152"
        },
        {
            "id": "458a8794-a60a-4e12-a7e8-e314420cd273",
            "postTime": "2019-12-13T00:00:00.000Z",
            "details": "测试用队伍",
            "needPerson": 3,
            "finTime": "2019-12-22T00:00:00.000Z",
            "createdAt": "2020-05-12T11:21:40.144Z",
            "updatedAt": "2020-05-12T11:21:40.144Z",
            "CompetitionId": "2e52a6f1-1d9b-48c4-914a-1136689ac152"
        },
        {
            "id": "71693995-19e4-4659-8d29-4bf013505d56",
            "postTime": "2019-12-13T00:00:00.000Z",
            "details": "测试用队伍",
            "needPerson": 3,
            "finTime": "2019-12-22T00:00:00.000Z",
            "createdAt": "2020-05-12T11:22:33.171Z",
            "updatedAt": "2020-05-12T11:22:33.171Z",
            "CompetitionId": "2e52a6f1-1d9b-48c4-914a-1136689ac152"
        },
        {
            "id": "df14a4b4-db29-4185-a4bb-48e39d48c85e",
            "postTime": "2019-12-13T00:00:00.000Z",
            "details": "测试用队伍",
            "needPerson": 3,
            "finTime": "2019-12-22T00:00:00.000Z",
            "createdAt": "2020-05-12T11:22:33.890Z",
            "updatedAt": "2020-05-12T11:22:33.890Z",
            "CompetitionId": "2e52a6f1-1d9b-48c4-914a-1136689ac152"
        },
        {
            "id": "d14992d4-166a-4a09-b059-f6ad49644ced",
            "postTime": "2019-12-13T00:00:00.000Z",
            "details": "测试用队伍",
            "needPerson": 3,
            "finTime": "2019-12-22T00:00:00.000Z",
            "createdAt": "2020-05-12T11:22:35.133Z",
            "updatedAt": "2020-05-12T11:22:35.133Z",
            "CompetitionId": "2e52a6f1-1d9b-48c4-914a-1136689ac152"
        },
        {
            "id": "dccb2d90-16c1-4f59-9328-1133569813b3",
            "postTime": "2019-12-13T00:00:00.000Z",
            "details": "测试用队伍",
            "needPerson": 3,
            "finTime": "2019-12-22T00:00:00.000Z",
            "createdAt": "2020-05-12T11:22:36.429Z",
            "updatedAt": "2020-05-12T11:22:36.429Z",
            "CompetitionId": "2e52a6f1-1d9b-48c4-914a-1136689ac152"
        }
    ],
    "err": null
}
```
### route名: /team/getMyTeam

请求类型: get    

响应结果  
```
data: {
          "code": 200,
          "data": [
              {
                  "isOwner": true,
                  "createdAt": "2020-05-12T11:20:38.796Z",
                  "updatedAt": "2020-05-12T11:20:38.796Z",
                  "TeamId": "41e30bab-414e-4ef4-a3e9-6640bd5017b9",
                  "UserId": "b897a97d-6d1c-476a-9de1-8236eb129786"
              },
              {
                  "isOwner": true,
                  "createdAt": "2020-05-12T11:21:40.161Z",
                  "updatedAt": "2020-05-12T11:21:40.161Z",
                  "TeamId": "458a8794-a60a-4e12-a7e8-e314420cd273",
                  "UserId": "b897a97d-6d1c-476a-9de1-8236eb129786"
              },
              {
                  "isOwner": true,
                  "createdAt": "2020-05-12T11:22:33.190Z",
                  "updatedAt": "2020-05-12T11:22:33.190Z",
                  "TeamId": "71693995-19e4-4659-8d29-4bf013505d56",
                  "UserId": "b897a97d-6d1c-476a-9de1-8236eb129786"
              },
              {
                  "isOwner": true,
                  "createdAt": "2020-05-12T11:22:33.898Z",
                  "updatedAt": "2020-05-12T11:22:33.898Z",
                  "TeamId": "df14a4b4-db29-4185-a4bb-48e39d48c85e",
                  "UserId": "b897a97d-6d1c-476a-9de1-8236eb129786"
              },
              {
                  "isOwner": true,
                  "createdAt": "2020-05-12T11:22:35.147Z",
                  "updatedAt": "2020-05-12T11:22:35.147Z",
                  "TeamId": "d14992d4-166a-4a09-b059-f6ad49644ced",
                  "UserId": "b897a97d-6d1c-476a-9de1-8236eb129786"
              },
              {
                  "isOwner": true,
                  "createdAt": "2020-05-12T11:22:36.441Z",
                  "updatedAt": "2020-05-12T11:22:36.441Z",
                  "TeamId": "dccb2d90-16c1-4f59-9328-1133569813b3",
                  "UserId": "b897a97d-6d1c-476a-9de1-8236eb129786"
              }
          ],
          "err": null
      }
```
### route名: /message/dispatch
用来发起申请  
请求类型: post    
请求体:  
```
{
    "teamId": ""
}
```
响应结果
```
data: {
    "code": 200,
    "data": null,
    "err": null
}
```

### route名：/message/getMessage
用来看自己队伍的申请  
请求类型: post    
请求体:  
```
{
    "teamId": ""
}
```
响应结果  
```
data: {
          "code": 200,
          "data": [
              {
                  "id": "d312ea27-933e-4703-91af-3105d2286653",
                  "userId": "b897a97d-6d1c-476a-9de1-8236eb129786",
                  "teamId": "41e30bab-414e-4ef4-a3e9-6640bd5017b9",
                  "hasDeal": false,
                  "createdAt": "2020-05-12T11:37:00.647Z",
                  "updatedAt": "2020-05-12T11:37:00.647Z"
              }
          ],
          "err": null
      }
```
