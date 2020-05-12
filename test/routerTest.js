import {describe, it} from "mocha";

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
            .post('localhost:3000/public/login')
            .send({})
            .set()
            .expect(200)
            .end(( err, res ) => {
                // 断言判断结果是否为object类型
                expect(res.body).to.be.an('object')
                expect(res.body.success).to.be.an('boolean')
                expect(res.body.data).to.be.an('string')
                done()
            })
    })
})
