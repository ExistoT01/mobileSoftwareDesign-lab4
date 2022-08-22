const common = require("../../utils/common")

// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        article: {}
    },

    /**
     * 添加到收藏夹
     */
    addFavorites: function(options) {
        let article = this.data.article;
        wx.setStorageSync(article.id, article)
        this.setData({isAdd: true})
    },

    /**
     * 取消收藏
     */
    cancelFavorites: function() {
        let article = this.data.article;
        wx.removeStorageSync(article.id);
        this.setData({isAdd: false})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取页面跳转来时携带的数据
        let id = options.id

        // 检查当前新闻是否在收藏夹中
        var article = wx.getStorageSync(id)
        // 已存在
        if(article != ''){
            this.setData({
                article: article,
                isAdd: true
            })
        }
        // 不存在
        else {
            let result = common.getNewsDetail(id)
            // 获取到新闻内容
            if(result.code == '200'){
                this.setData({
                    article: result.news
                })
            }
        }      
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})