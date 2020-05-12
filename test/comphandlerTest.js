const {addCompetition, getType, getTypeCompetition} = require('../services/CompHandler');

async function main() {
    await addCompetition('土木建筑', '报名结束', '2019中国智能船艇挑战赛“海上争锋”', 'http://www.csname.org.cn','中国造船工程学会 上海交通大学 中国船级社 中国海洋学会 中国航海学会 中国人工智能学会 山东省日照市人民政府', '国家级', '2019.07.17 ～ 2019.08.31',  '2019.10.10 ～ 2019.10.13');
    await addCompetition('土木建筑', '报名结束', '2019中国智能船艇挑战赛“海上争锋”', 'http://www.csname.org.cn','中国造船工程学会 上海交通大学 中国船级社 中国海洋学会 中国航海学会 中国人工智能学会 山东省日照市人民政府', '国家级', '2019.07.17 ～ 2019.08.31',  '2019.10.10 ～ 2019.10.13');
    await addCompetition('土木建筑', '报名结束', '2019中国智能船艇挑战赛“海上争锋”', 'http://www.csname.org.cn','中国造船工程学会 上海交通大学 中国船级社 中国海洋学会 中国航海学会 中国人工智能学会 山东省日照市人民政府', '国家级', '2019.07.17 ～ 2019.08.31',  '2019.10.10 ～ 2019.10.13');
    await addCompetition('土木建筑', '报名结束', '2019中国智能船艇挑战赛“海上争锋”', 'http://www.csname.org.cn','中国造船工程学会 上海交通大学 中国船级社 中国海洋学会 中国航海学会 中国人工智能学会 山东省日照市人民政府', '国家级', '2019.07.17 ～ 2019.08.31',  '2019.10.10 ～ 2019.10.13');

    await getType();
    await getTypeCompetition('土木建筑', 0);
}


main();