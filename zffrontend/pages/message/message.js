import util from '../../utils/util';
import WxValidate from '../../utils/WxValidate';

Page({
    data: {
        name: '',
        tel: '',
        content: ''
    },
    formSubmit: function(e) {
        let rules = {
            name: {
                required: true
            },
            tel: {
                required: true,
                tel: true,
            },
            content: {
                required: true
            }
        }
        let messages = {
            name: {
                required: '请输入您的姓名！'
            },
            tel: {
                required: '请输入手机号',
                tel: '请输入正确的手机号'
            },
            content: {
                required: '请输入留言内容！'
            }
        }
        let formData = e.detail.value;
        this.WxValidate = new WxValidate(rules, messages);
        if (!this.WxValidate.checkForm(e)) {
            const error = this.WxValidate.errorList[0];
            return wx.showToast({
                title: error.msg,
                image: '../../image/prompt.png',
                duration: 1000
            })
        }
        formData.contact = formData.tel;
        delete formData['tel'];
        util.wxRequest('api/message/create', formData, 'POST').then(res => {
            if (res.data.code == 200) {
                wx.showToast({
                    title: '留言成功',
                    icon: 'success'
                })
                this.setData({
                    name: '',
                    tel: '',
                    content: ''
                });
            }
        })
    }
})
