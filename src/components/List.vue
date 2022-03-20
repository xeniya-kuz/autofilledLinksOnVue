<template>
<div class="container">
  <br>
  <Links/>
  <br>
  <ShowForm @showForm="showForm"
  :isOn="show_Form"/>
  <PaymentForm v-show="formVisible"/>
  <PaymentList/>
</div>
</template>

<script>
import PaymentList from '@/components/PaymentList.vue'
import PaymentForm from '@/components/PaymentForm.vue'
import ShowForm from '@/components/ShowForm.vue'
import Links from '@/components/Links.vue'
import { mapState } from 'vuex'

export default {
  name: 'List',
  components: {
    PaymentList,
    PaymentForm,
    ShowForm,
    Links
  },
  data () {
    return {
      show_Form: false,
      show_Category: false
    }
  },
  computed: {
    ...mapState('general', ['formVisible'])
  },
  methods: {
    showForm (isOn) {
      this.show_Form = isOn
    },
    showCategory (isOn) {
      this.show_Category = isOn
    }
  }
}
</script>

<style  lang="scss">
.container{
width: 500px;
margin: 0 auto;
}
</style>
