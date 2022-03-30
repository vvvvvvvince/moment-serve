/**
 *
 * 构建一个七牛云上传凭证类
 * @class qn
 */
const qiniu = require('qiniu')
const config = require('../config')
class QN {
    /**
     * Creates an instance of qn.
     * @param {string} accessKey -七牛云AK
     * @param {string} secretKey -七牛云SK
     * @param {string} bucket -七牛云空间名称
     * @param {string} origin -七牛云默认外链域名,(可选参数)
     * @memberof qn
     */
    constructor (accessKey, secretKey, bucket, origin) {
        this.ak = accessKey
        this.sk = secretKey
        this.bucket = bucket
        this.origin = origin
    }
    /**
     *
     * 获取七牛云文件上传凭证
     * @param {number} time - 七牛云凭证过期时间，以秒为单位，如果为空，默认为7200，有效时间为2小时
     * @memberof qn
     */
    upToken (time) {
        const mac = new qiniu.auth.digest.Mac(this.ak, this.sk)
        const options = {
            scope: this.bucket,
            expires: time || 7200
        }
        const putPolicy = new qiniu.rs.PutPolicy(options)
        const uploadToken = putPolicy.uploadToken(mac)
        return uploadToken
    }
}

exports.QN = QN;

exports.upToken = () => {
    return new QN(config.qiniu.accessKey, config.qiniu.secretKey, config.qiniu.bucket, config.qiniu.origin).upToken()
}
