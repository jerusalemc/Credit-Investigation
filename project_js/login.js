var Login = function () {
    function setCookies(){
        if(document.getElementById("remember-me").checked){
            var mobile = $("#mobile").val();
            var password=$("#password").val();
            Cookies.set('mobile', mobile, { expires: 7 }); // 存储一个带7天期限的 cookie
            Cookies.set('password', password, { expires: 7 });
            Cookies.set('rmbUser', "true", { expires: 7 });
            console.log("save");
        }else {
            Cookies.set('rmbUser', "false", { expires: -1 });
            //Cookies.remove('mobile');
            Cookies.remove('password');
            console.log("unsave");
        }
    }

    return {
        //main function to initiate the module
        init: function () {

            $("#login_form").validate({
                errorElement: "label",
                errorClass: "help-inline",
                focusInvalid: false,
                // rules: {
                //     mobile: {//15316761529
                //         required: true,
                //         digits: true,
                //         rangelength: [11, 11]
                //     },
                //     password: {
                //         required: true
                //     }
                // },
                // messages: {
                //     mobile: {
                //         required: "请输入手机号登录",
                //         digits: "手机号码为11位整数",
                //         rangelength: "请输入11位手机号"
                //     },
                //     password: {
                //         required: "请输入密码"
                //     }

                // },
                submitHandler: function (form) {
                    var info = $(form).serializeArray();
                    setCookies();
                    console.log(info);
                    if ($(form).find("input[name='mobile']").val() == ""){
                        bootbox.alert("手机号不能为空");
                    }
                    else {
                        var pattern = /^1[0-9]{10}$/;
                        var mobile = $(form).find("input[name='mobile']").val()
                        if (!pattern.test(mobile)) {
                            bootbox.alert("请输入正确的手机号");
                        }
                        else {
                            if ($(form).find("input[name='password']").val() == "") {
                                bootbox.alert("密码不能为空");
                            }
                            else {
                                $.ajax({
                                    type: "post",
                                    dataType: "json",
                                    data: info,
                                    crossDomain: true,
                                    url: "http://202.120.32.247:54324/api/v1.0/user/login",
                                    success: function (data) {
                                        if (data["verified"]) {
                                            //跳转到用户个人信息界面
                                            Cookies.set('token', data["token"], { expires: 7 });
                                            Cookies.set('mobile', $("#mobile").val(), { expires: 7 });
                                            window.location.href = "tbxy.html";
                                        } else{
                                            console.log(data);
                                            bootbox.alert("手机号或密码错误");
                                        }
                                    }
            
                                });
                            }
                        }
                    }



                    return false;
                }
            });

        }

    };

}();
