<template>
<div class="fm-input-wrap">
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
		:class="inputClz" 
		:value="value" 
		:maxlength="maxlength" 
		:placeholder="placeholder"
		@input="input"
		@change="change"
		@focus="beFocus"
		@blur="beBlur"
		ref="input" />
	<text v-if="hasError" class="error-msg">{{errorMessage}}</text>
</div>
</template>

<style scoped>
.fm-input-wrap {
	padding-top: 24px;
	padding-right: 6px;
	padding-left: 6px; 
}
.fm-textarea {
	padding-bottom: 9px;
	padding-right: 8px;
	padding-left: 8px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-bottom-color: #E6E6E6;
	font-size: 16px;
	line-height: 12px;
	color: #000000;
	placeholder-color: #dddddd;
	caret-color: #198ded;
}
.fm-textarea:focus {
	border-bottom-color: #198ded;
}
.fm-textarea-error {
	border-bottom-color: #df2b18;
}
.error-msg {
	font-size: 12px;
	color: #df2b18;
	margin-left: 8px;
}
</style>

<script>
const dom = weex.requireModule('dom')

export default {
	data() {
		return {
			rows: 1,
			input: this.$refs.input
		}
	},

	props: {
		value: [String, Number],
		placeholder: {
			type: String,
			default: '请输入'
		},
		maxlength: [String, Number],
		hasError: Boolean,
		errorMessage: {
			type: 'String',
			default: '输入有误'
		},
		type: String
	},

	computed: {
		inputClz() {
			let clz = ['fm-textarea']
			if (this.hasError) {
				clz.push('fm-textarea-error')
			}
			return clz
		}
	},

	methods: {
		input (evt) {
			this.$emit('input', evt)
		},
		change (evt) {
			this.$emit('change', evt)
		},
		beFocus (evt) {
			this.$emit('focus', evt)
		},
		beBlur (evt) {
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