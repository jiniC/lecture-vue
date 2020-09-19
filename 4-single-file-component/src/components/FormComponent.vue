<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus>
    <button v-show="inputValue.length" v-on:click="onReset" type="reset" class="btn-reset"></button>
  </form>
</template>

<script>
export default {
  // template: '#search-form',
  props: ['value'],
  data() {
    return {
      inputValue: this.value
    }
  },
  // ViewModel 감시하고있다가 변경되면 그 값이 변경되면 어떤 행동을 하는 함수
  watch: {
    // props 의 value값 감시
    value(newVal, oldVal) {
      this.inputValue = newVal;
    }
  },
  methods: {
    onSubmit() {
      this.$emit('@submit', this.inputValue.trim())
    },
    onKeyup() {
      if (!this.inputValue.length) this.onReset()
    },
    onReset() {
      this.inputValue = ''
      this.$emit('@reset')
    }
  }
}
</script>