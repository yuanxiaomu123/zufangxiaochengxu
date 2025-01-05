import util from '../../../utils/util';
import WxValidate from '../../../utils/WxValidate';

var nums = 0;
var clock;
var api_token;
const rules = {
    tel: {
        required: true,
        tel: true
    },
    code: {
        required: true
    }
}
const messages = {
    tel: {
        required: '请输入手机号',
        tel: '请输入正确的手机号'
    },
    code: {
        required: '请输入手机验证码'
    }
}

Page({
    data: {
        tel: '',
        text: '点击发送',
        disabled: false,
        prompt: false,
        tipText: ''
    },
    onLoad: function (e) {
        api_token = wx.getStorageSync('api_token');
	},
    bindKeyInput: function(e) {
        this.setData({
            tel: e.detail.value
        })
    },
    bindButtonTap: function() {
        let that = this;
        nums = 60;
        clock = '';
        this.WxValidate = new WxValidate(rules, messages);
        let param = {
            detail: {
                value: {
                    tel: that.data.tel,
                    code: 10086
                }
            }
        }
        if (!this.WxValidate.checkForm(param)) {
            const error = this.WxValidate.errorList[0];
            return wx.showToast({
                title: error.msg,
                image: '../../../image/prompt.png',
                duration: 1000
            })
        }
        clock = setInterval(function() {
            that.doLoop();
        }, 1000)
        that.setData({
            disabled: true
        })

        util.wxRequest('api/yunpian/send', { tel: that.data.tel, api_token: api_token }, 'POST').then(res => {
            if (res.data.code == 501) {
                that.setData({
                    prompt: true,
                    tipText: parseInt(res.data.num) < 0 ? '开发阶段不提供短信服务！' : '服务商短信余额不足！'
                })
                return false;
            }
            if (res.data.code == 200) {
                wx.showToast({
                    title: '验证码发送成功！',
                    icon: 'success',
                    duration: 1000
                });
            }
        })
    },
    doLoop: function() {
        let that = this;
        nums--;
        if (nums > 0) {
            that.setData({
                text: `${nums} s`
            });
        } else {
            clearInterval(clock);
            that.setData({
                text: '点击发送',
                disabled: false
            })
            nums = 60;
        }
    },
    formSubmit: function(e) {
        let formData = e.detail.value;
        this.WxValidate = new WxValidate(rules, messages);
        if (!this.WxValidate.checkForm(e)) {
            let error = this.WxValidate.errorList[0];
            return wx.showToast({
                title: error.msg,
                image: '../../../image/prompt.png',
                duration: 1000
            })
        }
        formData.api_token = api_token;
        util.wxRequest('api/user/mobile', formData, 'POST').then(res => {
            if (res.data.status == 'error') {
                return wx.showToast({
                    title: '验证码不正确！',
                    image: '../../../image/prompt.png',
                    duration: 1000
                })
            }
            if (res.data.status == 'success') {
                wx.showToast({
                    title: res.data.message,
                    icon: 'success',
                    duration: 1000
                });
                setTimeout(function() {
                    wx.redirectTo({
                        url: '../personal/personal'
                    })
                }, 500);
            }
        })
    }
})