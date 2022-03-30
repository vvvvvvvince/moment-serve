'use strict';

module.exports = {
	port: 8888,
	url: 'mongodb://127.0.0.1:27017/moment',

    akismet: {
        key: '',
        blog: ''
    },

	email: {
        account: 'your email address like : admin@momentin.cn',
        password: 'your email password'
	},

	siteInfo: {
        name: 'Moment Manage',
        version: '1.0.0',
        author: 'ShineTomorrow',
        site: 'www.momentin.cn',
        github: '',
        keyword: ['文艺类阅读App', '碎片化阅读']
    },

    qiniu: {
        accessKey: 'j59feiyDZTQaVvqzKd0C_muSO_lXjYXe57LynBhv',
        secretKey: '-aqJLBjZWoMRuH2QXyxTFsfSzwORbnQAfLaiulVl',
        bucket: 'baizeimg',
        origin: 'your origin name',
        uploadURL: 'https://upload-z0.qiniup.com',  //华东
    }
}