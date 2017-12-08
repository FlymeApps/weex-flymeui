import SnackBar from '../fm-snack-bar'

let VCSnackBar = Vue.extend(SnackBar)

function snackbar(options) {
	let defaultOptions = {
		title: '',
		backgroundColor: '#323232',
		titleColor: '#FFFFFF',
		closeText: '关闭',
		closeColor: '#198DED',
		autoClose: true,
		stayTime: 3000,
		type: 'normal'
	}

	let vc_snackbar = new VCSnackBar().$mount()
	options = Object.assign(defaultOptions, options)
	vc_snackbar.show = true
	vc_snackbar.title = options.title
	vc_snackbar.backgroundColor = options.backgroundColor
	vc_snackbar.titleColor = options.titleColor
	vc_snackbar.closeText = options.closeText
	vc_snackbar.closeColor = options.closeColor
	vc_snackbar.autoClose = options.autoClose
	vc_snackbar.stayTime = options.stayTime
	vc_snackbar.type = options.type
	vc_snackbar.clickCb = options.clickCb
	vc_snackbar.dismissCb = () => {
		removeSnackBar()
		options.dismissCb()
	}

	addSnackBar()

	function addSnackBar() {
		if (weex.config.env.platform === 'Web') {
			document.body.appendChild(vc_snackbar.$el)
		} else {
			weex.document.body.appendChild(vc_snackbar.$el)
		}
	}

	function removeSnackBar() {
		if (weex.config.env.platform === 'Web') {
			document.body.removeChild(vc_snackbar.$el)
		} else {
			weex.document.body.removeChild(vc_snackbar.$el)
		}
	}
}

function showSnackBar(options) {
	return new Promise((resolve, reject) => {
		snackbar({
			...options,
			clickCb: () => {
				resolve()
			},
			dismissCb: () => {
				reject()
			}
		})
	})
}

export default showSnackBar