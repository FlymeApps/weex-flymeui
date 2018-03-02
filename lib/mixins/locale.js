import { t } from 'weex-flymeui/lib/locale';

export default {
  methods: {
    t (...args) {
      return t.apply(this, args);
    }
  }
};
