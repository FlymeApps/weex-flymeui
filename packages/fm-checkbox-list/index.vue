<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Updated by Yanjiie on 2018/04/12. -->

<template>
  <div>
    <fm-checkbox v-for="(item, idx) in inList"
                 v-bind="item"
                 :list-model="true"
                 @fmCheckBoxItemChecked="onSelect(idx)"
                 :key="idx"></fm-checkbox>
  </div>
</template>

<script>
import FmCheckbox from '../fm-checkbox/index.vue';

export default {
  components: { FmCheckbox },
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
    // 是否单选
    single: {
      type: Boolean,
      default: false
    },
    // 选择个数限制
    limit: {
      type: Number
    }
  },
  data () {
    return {
      checkedList: [],
      inList: this.initList()
    };
  },
  watch: {
    list () {
      this.inList = this.initList();
    }
  },
  created () {
    const { list } = this;
    if (list && list.length > 0) {
      list.forEach((item, i) => {
        item.checked && this.checkedList.push(item.value);
      });
    }
  },
  methods: {
    onSelect (index) {
      const checked = this.inList[index].checked;
      if (this.limit <= this.checkedCount && !checked) {
        this.$emit('overLimit', this.limit);
      } else {
        this.updateList(index);
        this.$emit('fmCheckBoxListChecked', {
          selectIndex: index,
          checked: !checked,
          checkedList: this.inList.filter(item => item.checked)
        });
      }
    },
    initList () {
      const single = this.single;
      let checkedCount = 0;

      const newList = this.list.map((item, i) => {
        let { checked, disabled } = item;
        disabled = !!disabled;
        // disabled 为 true 时认为 checked 无效，同时单选模式下只认为第一个 checked 为 true 的为有效值
        checked = !disabled && !!checked && (!single || checkedCount === 0);
        if (item.checked) checkedCount += 1;
        return {
          ...item,
          checked,
          disabled
        };
      });

      this.checkedCount = checkedCount;
      return newList;
    },
    updateList (index) {
      const single = this.single;
      let checkedCount = 0;
      this.inList = this.inList.map((item, i) => {
        if (single) {
          item.checked = index === i && !item.checked;
        } else {
          if (i === index) item.checked = !item.checked;
        }
        if (item.checked) checkedCount += 1;
        return item;
      });
      this.checkedCount = checkedCount;
    }
  }
};
</script>
