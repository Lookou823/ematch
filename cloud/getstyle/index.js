// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
try{

  return await db.collection('styleset').where({
  color:db.RegExp({

    regexp:'.*'+event.color+'.*',
    options:'i'
  })

  }).get({
    success:function(res)
{

  console.log(res)

}  

})

}catch(e){
  console.error(e)
}



}