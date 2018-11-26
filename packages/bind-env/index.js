/**
 * CopyRight (C) 2018-2022 FlymeApps Team Holding Limited.
 * Created by Yanjiie on 2018/03/18. Fork from alibaba/weex-ui.
 */
import Binding from 'weex-bindingx/lib/index.weex.js';
import Utils from '../utils/index';

const BindEnv = {
  supportsEB () {
    return Binding.isSupportBinding && !Utils.env.isWeb();
  },

  /**
   * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
   * @returns {boolean}
   */
  supportsEBForAndroid () {
    return (Utils.env.isAndroid()) && BindEnv.supportsEB();
  },

  /**
   * 判断IOS容器是否支持是否支持expressionBinding
   * @returns {boolean}
   */
  supportsEBForIos () {
    return (Utils.env.isIOS()) && BindEnv.supportsEB();
  }
};

export default BindEnv;
