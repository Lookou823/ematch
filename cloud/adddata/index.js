// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {

  return await db.collection('clothsingle').add({
    data:{
      color: event.color,
      image: event.image,
      infocolor: event.infocolor,
      intro:event.intro,
      mat: event.mat,
      name:event.name,
      price:event.price




    }




  })
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}