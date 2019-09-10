/**
 * Created by apple on 2019/9/10.
 */

import Mock from 'mockjs';

//var data = [];

//定义轮播图接口
Mock.mock('/carousel','post',function(options){
    //获取参数
    var {count} = JSON.parse(options.body);

    var arr = Mock.mock({
        "list|100":[
            { "id|+1":1,"pic":'@image(300x200)','link':'@url',"desc":'@ctitle' }
        ]
    }).list.slice( 0, count );

    return {
        "status":200,
        "count":count,
        "list": arr
    }
});