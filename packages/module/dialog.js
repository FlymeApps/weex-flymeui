import Dialog from '../fm-dialog';
import { t } from 'weex-flymeui/lib/locale';

const VCDialog = Vue.extend(Dialog);
const VC_DIALOG = new VCDialog().$mount();

function dialog (options) {
  VC_DIALOG.show = true;
  VC_DIALOG.title = options.title;
  VC_DIALOG.content = options.content;
  VC_DIALOG.type = options.type;
  VC_DIALOG.canAutoClose = options.canAutoClose;
  options.cancelText && (VC_DIALOG.cancelText = options.cancelText);
  options.confirmText && (VC_DIALOG.confirmText = options.confirmText);
  VC_DIALOG.cancelCb = options.cancelCb;
  VC_DIALOG.confirmCb = options.confirmCb;
}

let added = false;
function addDialog () {
  if (!added) {
    if (weex.config.env.platform === 'Web') {
      document.body.appendChild(VC_DIALOG.$el);
    } else {
      weex.document.body.appendChild(VC_DIALOG.$el);
    }
    added = true;
  }
}

const noop = () => {};
function resetDialog () {
  VC_DIALOG.show = false;
  VC_DIALOG.cancelCb = noop;
  VC_DIALOG.confirmCb = noop;
  setTimeout(() => {
    VC_DIALOG.title = '';
    VC_DIALOG.content = '';
    VC_DIALOG.canAutoClose = true;
    VC_DIALOG.type = 'alert';
    VC_DIALOG.cancelText = t('el.common.cancel');
    VC_DIALOG.confirmText = t('el.common.confirm');
  }, 300);
}

function confirm (options) {
  addDialog();
  return new Promise((resolve, reject) => {
    dialog({
      title: options.title,
      content: options.message,
      type: 'confirm',
      cancelText: options.cancelText,
      confirmText: options.confirmText,
      cancelCb: () => {
        resetDialog();
        reject();
      },
      confirmCb: () => {
        resetDialog();
        resolve();
      }
    });
  });
}

function alert (options) {
  addDialog();
  return new Promise((resolve, reject) => {
    dialog({
      title: options.title,
      content: options.message,
      type: 'alert',
      confirmText: options.confirmText,
      cancelCb: () => {
        resetDialog();
        reject();
      },
      confirmCb: () => {
        resetDialog();
        resolve();
      }
    });
  });
}

export {
  confirm,
  alert
};
