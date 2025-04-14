<template>
  <div>
    {{ $t('message.greeting') }}
    <br>
    <button @click="changeLocal('en')">{{ $t('message.switchTo') }} {{ $t('message.english') }}</button>
    <button @click="changeLocal('ja')">{{ $t('message.switchTo') }} {{ $t('message.japanese') }}</button>
    <button @click="changeLocal('zh')">{{ $t('message.switchTo') }} {{ $t('message.chinese') }}</button>

  </div>
</template>

<script >
export default {
  name: 'App',
  methods: {
    changeLocal(local) {
      this.$i18n.locale = local // this 指向组件，dollars 
    },

  }
}
</script>

