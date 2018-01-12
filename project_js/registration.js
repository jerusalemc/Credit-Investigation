/**
 * Created by epcc on 2017/12/5.
 */
var Registration = function () {
    return {
        //main function to initiate the module
        init: function () {
            $("#registration-form").validate({
                errorElement: "label",
                errorClass: "help-inline",
                focusInvalid: false,
                // rules: {
                //     password: {
                //         required: true
                //     }
                // },
                // messages: {
                //     password: {
                //         required: function(e1) {
                //             bootbox.alert("请输入密码");
                //         }
                //     }
                // },
                submitHandler: function (form) {
                    var info = $(form).serializeArray();
                    console.log(info);

                    if ($(form).find("input[name='mobile']").val() == ""){
                        bootbox.alert("手机号不能为空");
                    }
                    else {
                        var pattern = /^1[0-9]{10}$/;
                        var mobile = $(form).find("input[name='mobile']").val();
                        // alert(mobile);
                        if (!pattern.test(mobile)) {
                            bootbox.alert("请输入正确的手机号");
                        }
                        else {
                            if ($(form).find("input[name='authcode']").val() == "") {
                                bootbox.alert("请输入手机验证码");
                            }
                            else {
                                if($(form).find("input[name='password']").val()!=$(form).find("input[id='rePassword']").val()){
                                    console.log($(form).find("input[name='password']").val());
                                    console.log($(form).find("input[id='repassword']").val());
                                    // $("#error-message").text("两次密码不一致");
                                    // alert("两次密码不一致");
                                    bootbox.alert("两次密码不一致");
                                }
                                else {
                                    if ($(form).find("input[name='password']").val() == "" || $(form).find("input[id='rePassword']").val() == "") {
                                        bootbox.alert("密码不能为空");
                                    }
                                    $.ajax({
                                        type: "post",
                                        dataType: "json",
                                        data: info,
                                        crossDomain: true,
                                        url: "http://202.120.32.247:54324/api/v1.0/user/register",
                                        success: function (data) {
                                            if (data["verified"]) {
                                                //跳转到用户个人信息界面
                                                window.location.href = "login.html";
                                            } else{
                                                console.log(data);
                                                //alert(data["verified"]);
                                                bootbox.alert("注册失败，请检查信息填写是否有误");
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    }
                    return false;
                }
            });

        }

    };

}();
