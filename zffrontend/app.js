import util from './utils/util';

// 授权登录
App({
    onLaunch: function () {
        util.wxRequest('api/content/config').then(resources => {
            util.wxPromisify(wx.login)().then(res => {
                let params = {
                    code: res.code,
                    appid: resources.data.pay_appid,
                    secret: resources.data.pay_secret
                }
                return util.wxRequest('api/user/login', params, 'POST');
            }).then(res => {
                wx.setStorageSync('openid', res.data.openid);
                if (res.data) {
                    let api_token = res.data;
                    util.wxPromisify(wx.getUserInfo)().then(res => {
                        let userInfo = res.userInfo;
                        let params = {
                            api_token: api_token,
                            name: userInfo.nickName,
                            img: userInfo.avatarUrl,
                            gender: userInfo.gender,
                            is_auth: 1
                        }
                        return util.wxRequest('api/user/edit', params, 'POST');
                    })
                    wx.setStorageSync('api_token', api_token);
                } else {
                    wx.removeStorageSync('api_token');
                }
            })
        })
    }
})
