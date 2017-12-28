<template>
<div class="fm-wrapper">
	<textarea v-if="type === 'textarea'"
		:class="inputClz"
		:value="value"
		:rows="rows"
		:maxlength="maxlength"
		:placeholder="placeholder"
		@input="input"
		@change="change"
		@focus="beFocus"
		@blur="beBlur"
		ref="input" />
	<input v-else
		:type="type"
		:nightMode="nightMode"
		:class="inputClz" 
		:style="inputStyle"
		:value="value"
		:maxlength="maxlength" 
		:placeholder="placeholder"
		@input="input"
		@change="change"
		@focus="beFocus"
		@blur="beBlur"
		ref="input" />
	<fm-icon v-if="delShow" class="delete" value="&#xe6c0;" icon-style="48" color="#fff" @fmClick="delClick" />
	<fm-icon v-if="visibleShow" class="visible" :value="visibleValue" icon-style="72" color="#666" @fmClick="toggleVisible" />
	<text v-if="hasError" class="error-msg">{{inputErrorMessage}}</text>
</div>
</template>

<style lang="sass" scoped>
  @import "../style/mixin.scss";
.fm-wrapper {
	padding-top: size(72);
	padding-right: size(48);
	padding-left: size(48);
}
.fm-textarea {
	padding-bottom: size(27);
	padding-left: size(24);
	border-bottom-style: solid;
	border-bottom-width: size(3);
	border-bottom-color: #E6E6E6;
	font-size: size(48);
	color: #000000;
	placeholder-color: #dddddd;
	caret-color: #198ded;
}
.fm-input-wrap {
	position: relative;
}
.delete {
	position: absolute;
	top: size(69);
	right: size(72);
	width: size(60);
	height: size(60);
	padding: size(6);
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: size(30);
}
.visible {
	position: absolute;
	top: size(63);
	right: size(72);
	width: size(72);
	height: size(72);
}
.fm-textarea:focus {
	border-bottom-color: #198ded;
}
.fm-textarea-error {
	border-bottom-color: #df2b18;
}
.error-msg {
	font-size: size(36);
	color: #df2b18;
	margin-left: size(24);
}
</style>

<script>
import FmIcon from '../fm-icon'

export default {
	components: { FmIcon },

	mounted() {
		if (this.type === 'password') {
		 	this.pwdModel = true
		}
	},

	data() {
		return {
			rows: 1,
			focus: false,
			pwdModel: false,
			pwdVisible: false
		}
	},

	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		placeholder: {
			type: String,
			default: '请输入'
		},
		maxlength: [String, Number],
		inputPattern: RegExp,
		inputErrorMessage: {
			type: String,
			default: '输入有误'
		},
		type: String,
		nightMode: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		visibleValue() {
			return this.type === 'password' ? '&#xe6a9;' : '&#xe6e8;'
		},
		inputClz() {
			let clz = ['fm-textarea']
			if (this.hasError) {
				clz.push('fm-textarea-error')
			}
			return clz
		},
		inputStyle() {
			let style = { paddingRight: 24}
			if (this.delShow || this.visibleShow) {
				style.paddingRight = 108
			}
			return style
		},
		delShow() {
			return !this.pwdModel && this.focus && this.value
		},
		visibleShow() {
			return this.focus && this.pwdModel
		},
		hasError() {
			const { inputPattern, value } = this
			if (inputPattern) {
				if (!value.match(inputPattern)) {
					return true
				}
				return false
			}
			return false
		}
	},

	methods: {
		delClick(e) {
			this.value = ''
		},
		toggleVisible(e) {
			this.pwdVisible ? this.$refs.input.setType('password') : this.$refs.input.setType('visible')
			this.pwdVisible = !this.pwdVisible
			// if (this.type === 'password') {
			// 	this.type = 'text'
			// } else {
			// 	this.type = 'password'
			// }
		},
		input (evt) {
			this.value = evt.value
			this.$emit('input', evt)
		},
		change (evt) {
			this.$emit('change', evt)
		},
		beFocus (evt) {
			this.focus = true
			this.$emit('focus', evt)
		},
		beBlur (evt) {
			this.focus = false
			this.$emit('blur', evt)
		},
		focus () {
			this.$refs.input.focus()
		},
		blur () {
			this.$refs.input.blur()
		},
		setSelectionRange (start, end) {
			this.$refs.input.setSelectionRange(start, end)
		},
		getEditSelectionRange (callback) {
			this.$refs.input.getEditSelectionRange(callback)
		}
	}
}
</script>