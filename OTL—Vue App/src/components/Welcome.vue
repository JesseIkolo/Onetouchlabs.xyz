<template>
  <div class="top-space"></div>
  <TopBar />
  <HeroIntro msg="Bonjour"/>
  <TrainingList />
  <FooterSide />
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import TopBar from './micro-elements/TopBar.vue'
import FooterSide from './micro-elements/Footer.vue'
import TrainingList from './TrainingList'
import HeroIntro from './micro-elements/HeroIntro'

export default {
  name: 'WelCome',
  components : {
    TrainingList,
    TopBar,
    HeroIntro,
    FooterSide

  },
  props: {
    msg: String
  }
}
</script>

<style>

</style>
