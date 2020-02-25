<template>
<div>
  <router-view/>
 <div style="margin-top: 50px"> <Footer/></div>
</div>
</template>

<script>
  import Home from './components/app/Home'
  import Category from './components/app/Category'
  import ShoppingCar from './components/app/ShoppingCar'
  import Mine from './components/app/Mine'
  import Footer from './components/body/Footer'
export default {
    components: {
      Home,
      Category,
      ShoppingCar,
      Mine,
      Footer
    },
  name: 'App'
}
</script>

<style>

</style>
