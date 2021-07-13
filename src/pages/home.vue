<template>
    <div>
        <hero/>
        <trust/>
        <heroB/>
        <sellerEmp/>
        <academy/>
        <blackbelt/>
        <blog/>
    </div>
</template>

<script>
import hero from '../components/hero.vue'
import heroB from '../components/heroB.vue'
import trust from '../components/trust.vue'
import sellerEmp from '../components/sellerEmp.vue'
import blackbelt from '../components/blackbelt.vue'
import academy from '../components/academy.vue'
import blog from '../components/blog.vue'


export default {
    components: {
        hero,
        heroB,
        trust,
        sellerEmp,
        blackbelt,
        academy,
        blog,
    }
}
</script>