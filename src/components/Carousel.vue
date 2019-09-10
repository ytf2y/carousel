<!--组件模板-->
<template>
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide" v-for="item in list">
                <a :href="item.link"><img :src="item.pic" alt=""/></a>
                <p>{{item.desc}}</p>
            </div>

        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

    </div>
</template>


<!--组件业务逻辑-->
<script type="text/babel">

    import axios from 'axios';
    import Swiper from 'swiper';

    export default {
        data:function(){
            return{
                list:[]
            }
        },
        props:['count'],
        created:function(){

            //请求轮播图数据
            axios.post('/carousel',{count:this.count}).then((res) =>{
                this.list = res.data.list;

                //初始化swiper
                setTimeout(function(){
                    new Swiper('.swiper-container',{
                        autoplay:true,
                        pagination:{
                            el:'.swiper-pagination'
                        }
                    })
                },100)

            })
        }
    }
</script>

<!--组件样式-->
<style>

</style>