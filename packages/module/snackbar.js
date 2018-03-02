import SnackBar from '../fm-snack-bar';
import { t } from 'weex-flymeui/lib/locale';

const VCSnackBar = Vue.extend(SnackBar);

function snackbar (options) {
  const defaultOptions = {
    title: '',
    backgroundColor: '#323232',
    titleColor: '#FFFFFF',
    closeText: t('el.common.close'),
    closeColor: '#198DED',
    autoClose: true,
    stayTime: 3000,
    type: 'normal'
  };

  const VC_SNACKBAR = new VCSnackBar().$mount();
  options = Object.assign(defaultOptions, options);
  VC_SNACKBAR.show = true;
  VC_SNACKBAR.title = options.title;
  VC_SNACKBAR.backgroundColor = options.backgroundColor;
  VC_SNACKBAR.titleColor = options.titleColor;
  VC_SNACKBAR.closeText = options.closeText;
  VC_SNACKBAR.closeColor = options.closeColor;
  VC_SNACKBAR.autoClose = options.autoClose;
  VC_SNACKBAR.stayTime = options.stayTime;
  VC_SNACKBAR.type = options.type;
  VC_SNACKBAR.clickCb = options.clickCb;
  VC_SNACKBAR.dismissCb = () => {
    removeSnackBar();
    options.dismissCb();
  };

  addSnackBar();

  function addSnackBar () {
    if (weex.config.env.platform === 'Web') {
      document.body.appendChild(VC_SNACKBAR.$el);
    } else {
      weex.document.body.appendChild(VC_SNACKBAR.$el);
    }
  }

  function removeSnackBar () {
    if (weex.config.env.platform === 'Web') {
      document.body.removeChild(VC_SNACKBAR.$el);
    } else {
      weex.document.body.removeChild(VC_SNACKBAR.$el);
    }
  }
}

function showSnackBar (options) {
  return new Promise((resolve, reject) => {
    options = Object.assign(options, {
      clickCb: () => {
        resolve();
      },
      dismissCb: () => {
        reject();
      }
    });
    snackbar(options);
  });
}

export default showSnackBar;
