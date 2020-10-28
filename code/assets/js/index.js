$(function () { 

getUserInfo()
})
// 获取用户数据
function getUserInfo() { 
  $.ajax({
    url: '/my/userinfo',
    headers:{
      Authorization:localStorage.getItem('token')
    },
    success: function (res) { 
      if (res.status != 0) {
        return layui.layer.msg(res.message)
      }
      // 获取成功渲染头像
      renderAvatar(res.data)
    }
  })
}
function renderAvatar(user) { 
  var name = user.username || user.nickname
  $('#welcome').html('欢迎&nbsp;' + name)
  if (user.suer_pic != null) { 
    // 有头像
    $('.text-avatar').hide()
    $('.layui-nav-img').show().attr('src',ueser.user_pic)
  }
  else {
    // 无
    var first=name[0].toUpperCase()
    $('.text-avatar').show().html(first)
    $('.layui-nav-img').hide()   
  }
  
} 
