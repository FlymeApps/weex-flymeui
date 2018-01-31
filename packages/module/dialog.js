import Dialog from '../fm-dialog'
import { t } from '@flyme/weex-flymeui/lib/locale'

let VCDialog = Vue.extend(Dialog)
let vc_dialog = new VCDialog().$mount()

function dialog(options) {
  vc_dialog.show = true
  vc_dialog.title = options.title
  vc_dialog.content = options.content
	vc_dialog.type = options.type
	vc_dialog.canAutoClose = options.canAutoClose
  options.cancelText && (vc_dialog.cancelText = options.cancelText)
  options.confirmText && (vc_dialog.confirmText = options.confirmText)
  vc_dialog.cancelCb = options.cancelCb
  vc_dialog.confirmCb = options.confirmCb
}

let added = false
function addDialog() {
  if (!added) {
    if (weex.config.env.platform === 'Web') {
      document.body.appendChild(vc_dialog.$el)
    } else {
			weex.document.body.appendChild(vc_dialog.$el)
		}
    added = true
  }
}

const noop = () => {}
function resetDialog() {
  vc_dialog.show = false
	vc_dialog.cancelCb = noop
	vc_dialog.confirmCb = noop
	setTimeout(() => {
		vc_dialog.title = ''
		vc_dialog.content = ''
		vc_dialog.canAutoClose = true
		vc_dialog.type = 'alert'
		vc_dialog.cancelText = t('el.common.cancel')
		vc_dialog.confirmText = t('el.common.confirm')
	}, 300)
}

function confirm(options) {
  addDialog()
  return new Promise((resolve, reject) => {
    dialog({
      title: options.title,
      content: options.message,
      type: 'confirm',
      cancelText: options.cancelText,
      confirmText: options.confirmText,
      cancelCb: () => {
				resetDialog()
        reject()
      },
      confirmCb: () => {
				resetDialog()
        resolve()
      }
    })
  })
}

function alert(options) {
  addDialog()
  return new Promise((resolve, reject) => {
    dialog({
      title: options.title,
      content: options.message,
      type: 'alert',
      confirmText: options.confirmText,
      cancelCb: () => {
				resetDialog()
        reject()
      },
      confirmCb: () => {
				resetDialog()
        resolve()
      }
    })
  })
}

export {
  confirm,
  alert
}