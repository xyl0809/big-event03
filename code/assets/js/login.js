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
      , '密码必须6到12位，且不能出现空格'
    ],
    repwd: function (value) {
      var pwd = $('.reg-box [name=password]').val()
      if (pwd !== value) {
        return '密码不一致'
      }
    }
  })
  var layer = layui.layer
  // 提交表单
  $('#reg-form').on('submit', function (e) {
    e.preventDefault()
    $.ajax({
      type: 'post',
      url: '/api/reguser',
      data: {
        username: $('.reg-box [name=username]').val(),
        password: $('.reg-box [name=password]').val()
      },
      success: function (res) {
        if (res.status != 0) {
          return layer.msg(res.message)
        }
        layer.msg(res.message)
        $('#reg-form')[0].reset()
        $('#go-login').click()
      }
    })
  })
  // 登录表单
  $('#login-form').submit(function (e) {
    e.preventDefault()
    $.ajax({
      type: 'post',
      url: '/api/login',
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
        return layer.msg(res.message)          
        }
        layer.msg(res.message)
        localStorage.setItem('token', res.token)
        location.href='/index.html'
      }
    })
  })

})