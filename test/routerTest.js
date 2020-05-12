
const {describe, it} = require('mocha')
const supertest = require('supertest')
const chai = require('chai')
const app = require('./../index')
const expect = chai.expect
const request = supertest( app.listen() )
// 测试套件/组

let token = "";

describe( '测试登录请求', ( ) => {
    // 测试用例
    it('测试/login', ( done ) => {
        request
            .post('https://localhost:3000/public/login')
            .send({
                "code": "033xXYeK1FQ9c20KpFeK18k0fK1xXYe4"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(( err, res ) => {
                // 断言判断结果是否为object类型
                console.log(res)
                done().then(con => {
                    console.log(con);
                })
            })
    })
})

