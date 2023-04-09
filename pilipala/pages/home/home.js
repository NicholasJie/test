// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList: [],
        navbar: ['精选', '电视剧', '综艺', '电影', '动漫', '少儿', '知识', '艺术', '教育'],
        currentTab: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSwiperList()
    },
    // 获取 轮播图数据的方法
    getSwiperList() {
        wx.request({
            url: 'https://www.escook.cn/slides',
            method: 'GET',
            success: (res) => {
                this.setData({
                    swiperList: res.data
                })
                // console.log(swiperList)
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})