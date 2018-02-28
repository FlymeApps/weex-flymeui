<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59e0773867e2271c7fc46b40"></title>
            <div class="list">
                <div class="apiTitle">
                    <fm-text class="titleText" large title>方向传感器</fm-text>
                    <fm-text class="data">当前方向:</fm-text>
                    <fm-text class="data">x: {{orientation.x}}</fm-text>
                    <fm-text class="data">y: {{orientation.y}}</fm-text>
                    <fm-text class="data">z: {{orientation.z}}</fm-text>
                </div>
                <d-cell title="单次获取当前瞬间方向" subTitle="方向传感器 -- 单次获取当前瞬间方向" @click="demo1"></d-cell>
                <d-cell title="持续监听当前方向变化" subTitle="方向传感器 -- 持续监听当前方向变化" @click="demo2"></d-cell>
                <d-cell title="清除监听方向变化" subTitle="方向传感器 -- 清除监听方向变化" @click="demo3"></d-cell>
                <div class="apiTitle">
                    <fm-text class="titleText" large title>加速度传感器</fm-text>
                    <fm-text class="data">当前方向:</fm-text>
                    <fm-text class="data">x: {{accelerometer.x}}</fm-text>
                    <fm-text class="data">y: {{accelerometer.y}}</fm-text>
                    <fm-text class="data">z: {{accelerometer.z}}</fm-text>
                </div>
                <d-cell title="单次获取当前瞬间加速度" subTitle="加速度传感器 -- 单次获取当前瞬间加速度" @click="demo4"></d-cell>
                <d-cell title="持续监听当前加速度变化" subTitle="加速度传感器 -- 持续获取当前加速度变化" @click="demo5"></d-cell>
                <d-cell title="清除监听加速度变化" subTitle="加速度传感器 -- 清除监听加速度变化" @click="demo6"></d-cell>
                <div class="apiTitle">
                    <fm-text class="titleText" large title>陀螺仪传感器</fm-text>
                    <fm-text class="data">当前方向:</fm-text>
                    <fm-text class="data">x: {{gyroscope.x}}</fm-text>
                    <fm-text class="data">y: {{gyroscope.y}}</fm-text>
                    <fm-text class="data">z: {{gyroscope.z}}</fm-text>
                </div>
                <d-cell title="单次获取当前瞬间陀螺仪角速度" subTitle="陀螺仪 -- 单次获取当前瞬间陀螺仪角速度" @click="demo7"></d-cell>
                <d-cell title="持续监听获当前陀螺仪角速度" subTitle="陀螺仪 -- 持续监听获当前陀螺仪角速度" @click="demo8"></d-cell>
                <d-cell title="清除监听陀螺仪变化" subTitle="加速度传感器 -- 清除监听陀螺仪变化" @click="demo9"></d-cell>
            </div>
        </scroller>
    </div>
</template>

<style scoped>
    .actionBar {
        height: 192px;
        padding-top: 60px;
    }

    .actionIcon {
        margin-top: 30px;
        margin-right: 45px;
        margin-left: 51px;
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
        margin-top: 71px;
        margin-bottom: 104px;
        margin-left: 72px;
    }

    .list {
        margin-left: 28px;
        margin-right: 28px;
        padding: 28px;
    }

    .apiTitle {
        padding: 28px 0 0 0;
        background-color: #ffffff;
    }
    
    .titleText {
        text-align: center;
    }

    .data {
        padding-left: 65px;
    }
</style>

<script>
import Title from '../../_mods/title.vue';
import { FmText, FmImage, FmIcon } from '../../../index';
import DCell from '../../index/components/cell.vue';

const sensor = weex.requireModule('sensor')

const modal = weex.requireModule('modal')

export default {
    components: { FmText, FmIcon, DCell, Title },
    data() {
        return {
            orientation: {
                x: 0,
                y: 0,
                z: 0
            },
            orientationID: '',
            accelerometer: {
                x: 0,
                y: 0,
                z: 0
            },
            accelerometerID: '',
            gyroscope: {
                x: 0,
                y: 0,
                z: 0
            },
            gyroscopeID: ''
        }
    },
    mounted() {
        this.demo1()
        this.demo4()
        this.demo7()
    },
    methods: {
      back() {
        navigator.pop()
      },
      demo1() {  // 单次获取当前瞬间方向
        sensor.getCurrentOrientation(res => {
            res.result === 'success' ? (this.orientation = JSON.parse(res.data)) : modal.toast({ message: res })
        })
      },
      demo2() {   // 持续获取当前方向
        if (this.orientationID) return
        modal.toast({ message: '开始监听' })
        sensor.watchCurrentOrientation(res => {
            res.result === 'success' ? ((this.orientationID = JSON.parse(res.data).watchId) && (this.orientation = JSON.parse(res.data))) : modal.toast({ message: res })
        })
      },
      demo3() {  // 清除方向监听
        if (!this.orientationID) return
        modal.toast({ message: '结束监听' })
        this.orientationID && sensor.clearWatchOrientation(this.orientationID)
        this.orientationID = ''
      },
      demo4() {  // 单次获取当前瞬间加速度
        sensor.getCurrentAccelerometer(res => {
            res.result === 'success' ? (this.accelerometer = JSON.parse(res.data)) : modal.toast({ message: res })
        })
      },
      demo5() {  // 持续获取当前加速度
        if (this.accelerometerID) return
        modal.toast({ message: '开始监听' })
        sensor.watchCurrentAccelerometer(res => {
            res.result === 'success' ? ((this.accelerometerID = JSON.parse(res.data).watchId) && (this.accelerometer = JSON.parse(res.data))) : modal.toast({ message: res })
        })
      },
      demo6() {  // 清除加速度监听
        if (!this.accelerometerID) return
        modal.toast({ message: '结束监听' })
        this.accelerometerID && sensor.clearWatchAccelerometer(this.accelerometerID)
        this.accelerometerID = ''
      },
      demo7() {  // 单次获取当前瞬间陀螺仪数据
        sensor.getCurrentGyroscope(res => {
            res.result === 'success' ? (this.gyroscope = JSON.parse(res.data)) : modal.toast({ message: res })
        })
      },
      demo8() {  // 持续获取当前陀螺仪数据
        if (this.gyroscopeID) return
        modal.toast({ message: '开始监听' })
        sensor.watchCurrentGyroscope(res => {
            res.result === 'success' ? ((this.gyroscopeID = JSON.parse(res.data).watchId) && (this.gyroscope = JSON.parse(res.data))) : modal.toast({ message: res })
        })
      },
      demo9() {  // 清除陀螺仪数据监听
        if (!this.gyroscopeID) return
        modal.toast({ message: '结束监听' })
        this.gyroscopeID && sensor.clearWatchGyroscope(this.gyroscopeID)
        this.gyroscopeID = ''
      }
    }
}
</script>
