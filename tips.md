使用动画的时候，v-if, v-show 要直接放在transition的子元素下面
<transition name="popup">
    <popup v-show="showPopup" @cancel="showPopup = false"></popup>
</transition>

不要放在组件里面的根元素，如

<div class="popup" v-if="isShow"></div>


v-show 在template标签中没用，要用v-show，应该直接放在template标签内部的子标签上