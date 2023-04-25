<template>
    <TopNavigation />
    <div id="AcountView" class="max-w-4xl mx-auto mt-10">
        <router-view/>
    </div>
    <FooterSection />
  </template>
  <script setup>
  import TopNavigation from '@/components/stracture/TopNavigation.vue';
  import FooterSection from '@/components/stracture/FooterSection.vue';
  </script>
  
  <style lang="scss">
  
  </style>
  