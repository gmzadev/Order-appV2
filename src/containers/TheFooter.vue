<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://www.disclaimergenerator.net/live.php?token=cW5TdW1uz8gRk1npy6kuYayB9MNYMD2y" target="_blank">Sirenita Deli Espress</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} gmzadev</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://coreui.io/vue">CoreUI for Vue</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
