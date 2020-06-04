const request = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const {addCompetition} = require('../services/CompHandler.js')
const baseUrl = 'https://www.saikr.com';
let requestHtml = function(){
    return new Promise(function(resolve, reject){
        request.get("https://www.saikr.com/vs")
            .then(data => {
                let $ = cheerio.load(data.text);
                let contentBox = ($('.item-box'));
                resolve(contentBox);
            }).catch(err => {
                reject(err);
            })
    })
}
let getALink = function(tag, res){
    let reg = /^\/vs\/[a-z]+\/0\/0$/;
    if(tag.name === 'a' && tag.type === 'tag'){
        if(reg.test(tag.attribs.href)){
            res.push({
                link: `${baseUrl}${tag.attribs.href}`,
                name: tag.children[0].data
            });
        }
    }
    if(tag.children !== undefined && tag.children.length > 0){
        for(let element of tag.children){
            res.concat(getALink(element, res));
        }
    }
}
let getList = async function(type, page, list){
    await request.get(page)
            .then(data => {
                let $ = cheerio.load(data.text);
                let contentBox = $('.event4-1-list-box li.item');
                for(let key in contentBox){
                    if(contentBox[key].type === 'tag'){
                        let tmp = {
                            type: type
                        };
                        tmp.status = (contentBox[key].children[1].children[1].children[1].children[0].data.trim());
                        tmp.title = (contentBox[key].children[1].children[1].children[3].children[0].data.trim())
                        tmp.url = (contentBox[key].children[1].children[1].children[3].attribs.href);
                        tmp.sponsor = (contentBox[key].children[1].children[3].children[1].data);
                        tmp.level = (contentBox[key].children[1].children[5].children[1].data);
                        tmp.registrationTime = (contentBox[key].children[1].children[7].children[1].data);
                        tmp.finTime = (contentBox[key].children[1].children[9].children[1].data).trim();
                        if(contentBox[key].children[3].children[1].children[0].data.trim() === '官网报名'){
                            tmp.url = (contentBox[key].children[3].children[1].attribs.href);
                        }
                        addCompetition(tmp.type, tmp.status, tmp.title, tmp.url, tmp.level, tmp.sponsor, tmp.registrationTime, tmp.finTime);
                    }
                }
                let next = $('li.next a[rel="next"]');
                if(next && next['0'] && next['0'].attribs){
                    getList(type, `${baseUrl}${next['0'].attribs.href}`, list)
                }

            }).catch(err => {
                console.error(err);
            })
}
//设计一下最终的数据格式
//{
//    联系方式
//    比赛上属的种类
//    竞赛简介， 组织机构， 竞赛时间， 参赛对象， 参赛费用， 奖项设置， 竞赛联系方式 附件url 通知列表
//}

let main = async function(){
    let data = await requestHtml();
    let linkList = [];
    let matchList = [];
    for(let key in data){
        if(data[key].type === 'tag'){
            getALink(data[key], linkList);
        }
    }
    for(let element of linkList){
        await getList(element.name, element.link, matchList)
    }
}
main();
module.exports = main;
