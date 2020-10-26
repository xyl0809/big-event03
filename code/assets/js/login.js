$(function () { 
  $('#go-reg').on('click', function () {
    $('.login-box').hide()
    $('.reg-box').show()
  })
  $('#go-login').on('click', function () {
    $('.login-box').show()
    $('.reg-box').hide()
  })

//  密码校验
  var form = layui.form
  form.verify({
    pwd: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ],
    repwd: function (value) { 
      var pwd = $('.reg-box [name=password]').val()
      if (pwd !== value) {
        return'密码不一致'
      }
    }
  })

// 提交表单
  $('#reg-form').on('submit', function (e) { 
    e.preventDefault()
    $.ajax({
      type: 'post',
      url: 'http://ajax.frontend.itheima.net/api/reguser',
      data: {
        username: $('.reg-box [name=username]').val(),
        password: $('.reg-box [name=password]').val()
      },
      success: function (res) {
        if (status != 0) {
          alert(res.message)
        }
        alert(res.message)
      }
    })
  })

})