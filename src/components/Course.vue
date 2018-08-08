<template>
    <div class="course">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <p>全部</p>
                    <div class="container-fluid">
                        <div class="row">
                            <button v-on:click='add_note'>点击跨域获取值</button>
                            <courseobj></courseobj>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>

    </div>
</template>

<script>

import courseobj from'@/components/CourseDetail'
export default {
    name:'Course',
    components:{
        courseobj:courseobj,
    },
    methods:{
        add_note:function(){
            var obj ={
                content:this.content,
                title:this.title,
                markedContent:this.markedownContent
            }
           return this.$store.dispatch('addNote')
        }
    }
    }
</script>

<style>

</style>
