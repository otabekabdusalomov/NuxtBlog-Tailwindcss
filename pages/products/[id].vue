<template>
    <div>
      <p>Product details for {{ id }}</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita est tempore esse maiores doloremque similique odit sunt ab minus vero.</p>
    </div>
</template>

<script setup>
  const { id } = useRoute().params
</script>

<style scoped>

</style>