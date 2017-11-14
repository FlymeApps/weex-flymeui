<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59e41a2967e2271c7fc46b4e"></title>
            <div class="list">
                <d-cell title="Toast" subTitle="Toast提示" @click="demo1"></d-cell>
                <d-cell title="Toast" subTitle="Toast提示(duration)" @click="demo2"></d-cell>
                <d-cell title="Toast" subTitle="Toast提示(gravity)" @click="demo3"></d-cell>
                <d-cell title="两个按钮的弹框" subTitle="弹出两个按钮的弹框" @click="demo4"></d-cell>
                <d-cell title="列表弹框" subTitle="弹出列表弹框" @click="demo5"></d-cell>
                
            </div>
        </scroller>
    </div>
</template>

<style scoped>
    .actionBar {
        height: 64px;
        padding-top: 20px;
    }

    .actionIcon {
        margin-top: 10px;
        margin-right: 15px;
        margin-left: 17px;
    }

    .flymeui {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #fafafa;
    }

    .scroller {
        background-color: #fafafa;
    }

    .header {
        flex-direction: row;
        align-items: flex-end;
        margin-top: 23.6667px;
        margin-bottom: 34.6667px;
        margin-left: 24px;
    }

    .list {
        margin-left: 9.333px;
        margin-right: 9.333px;
        padding: 9.333px;
    }
</style>

<script>
import Title from '../../_mods/title.vue';
import { FmText, FmImage, FmIcon } from '../../../index';
import DCell from '../../index/components/cell.vue';

const view = weex.requireModule('view')

const modal = weex.requireModule('modal')

export default {
    components: { FmText, FmIcon, DCell, Title },
    methods: {
      back() {
        navigator.pop()
      },
      demo1() {
          modal.toast({message: "toast content !"})
       },
       demo2() {
          modal.toast({message: "toast content !",duration:5})
       },
       demo3() {
          modal.toast({message: "toast content !",duration:1,gravity:"center"})
       },
      demo4() {   // 两个按钮的弹框
        view.showDialog({
          type: 'two_btn',
          data: {
            title: '两个按钮的弹框',
            positivebtn: '确定',
            negativebtn: '取消'
          }
        }, res => {
          modal.toast({ message: res })
        })
      },
      demo5() {  // 列表弹框
        view.showDialog({
          type: 'handle_select',
          data: {
            items: [
                '列表项1',
                '列表项2',
                '列表项3',
                '列表项4',
                '列表项5',
                '列表项6',
                '列表项7'
              ]
            }
          }, res => {
            modal.toast({message: res.data})
        })
      }
    }
}
</script>
