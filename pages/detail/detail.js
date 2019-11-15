// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: {
      id: 1,
      videoSrc: 'http://heart.ericyang.xyz/1.mp4',
      videoTitle: '【明日方舟同人动画PV预告1】【晨昏交界】',
      author: '牧草君',
      playCount: '24.9w',
      commentCount: 1234,
      date: '11-11'
    },
    otherVideoList: [
      {
        title: '【明日方舟/大型动画片PV制作】【霜星决战场景p1预告部分】白面鸮',
        imgSrc:
          'http://i2.hdslb.com/bfs/archive/b146f526a3a4a3d61f52b380583aa999e1c54d7a.jpg',
        commentCount: 12238,
        playCount: '16w'
      },
      {
        title: '爆肝50天！我做出了明日方舟的联动剧场版',
        imgSrc:
          'http://i0.hdslb.com/bfs/archive/177fab841f0c5f1fedd3f5a612d35f4dc474bd10.jpg',
        commentCount: 14293,
        playCount: '23w'
      },
      {
        title: '这就是玫剑圣精二后的实力！',
        imgSrc:
          'http://i0.hdslb.com/bfs/archive/38ea1a02c55d7310bae16ff37bc2a201013ec349.jpg',
        commentCount: 14293,
        playCount: '54w'
      },
      {
        title: '【明日方舟/大型动画片PV制作】【霜星决战场景p1预告部分】白面鸮',
        imgSrc:
          'http://i2.hdslb.com/bfs/archive/b146f526a3a4a3d61f52b380583aa999e1c54d7a.jpg',
        commentCount: 12238,
        playCount: '16w'
      },
      {
        title: '爆肝50天！我做出了明日方舟的联动剧场版',
        imgSrc:
          'http://i0.hdslb.com/bfs/archive/177fab841f0c5f1fedd3f5a612d35f4dc474bd10.jpg',
        commentCount: 14293,
        playCount: '23w'
      },
      {
        title: '这就是玫剑圣精二后的实力！',
        imgSrc:
          'http://i0.hdslb.com/bfs/archive/38ea1a02c55d7310bae16ff37bc2a201013ec349.jpg',
        commentCount: 14293,
        playCount: '54w'
      },
      {
        title: '【明日方舟/大型动画片PV制作】【霜星决战场景p1预告部分】白面鸮',
        imgSrc:
          'http://i2.hdslb.com/bfs/archive/b146f526a3a4a3d61f52b380583aa999e1c54d7a.jpg',
        commentCount: 12238,
        playCount: '16w'
      },
      {
        title: '爆肝50天！我做出了明日方舟的联动剧场版',
        imgSrc:
          'http://i0.hdslb.com/bfs/archive/177fab841f0c5f1fedd3f5a612d35f4dc474bd10.jpg',
        commentCount: 14293,
        playCount: '23w'
      },
      {
        title: '这就是玫剑圣精二后的实力！',
        imgSrc:
          'http://i0.hdslb.com/bfs/archive/38ea1a02c55d7310bae16ff37bc2a201013ec349.jpg',
        commentCount: 14293,
        playCount: '54w'
      },
      {
        title: '【明日方舟/大型动画片PV制作】【霜星决战场景p1预告部分】白面鸮',
        imgSrc:
          'http://i2.hdslb.com/bfs/archive/b146f526a3a4a3d61f52b380583aa999e1c54d7a.jpg',
        commentCount: 12238,
        playCount: '16w'
      },
      {
        title: '爆肝50天！我做出了明日方舟的联动剧场版',
        imgSrc:
          'http://i0.hdslb.com/bfs/archive/177fab841f0c5f1fedd3f5a612d35f4dc474bd10.jpg',
        commentCount: 14293,
        playCount: '23w'
      },
      {
        title: '这就是玫剑圣精二后的实力！',
        imgSrc:
          'http://i0.hdslb.com/bfs/archive/38ea1a02c55d7310bae16ff37bc2a201013ec349.jpg',
        commentCount: 14293,
        playCount: '54w'
      }
    ],
    commentList: [
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成,点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      },
      {
        userIcon: 'http://heart.ericyang.xyz/user_icon.png',
        username: '果儿贪吃糖',
        commentInfo: '点赞投币收藏退出一气呵成',
        commentDate: '12-17'
      }
    ],
    commentCount: 2071
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})
