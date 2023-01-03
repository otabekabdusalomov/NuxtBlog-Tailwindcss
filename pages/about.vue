<template>
    <div>
        <h2>About page</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur nam hic voluptatum ad repellat debitis dignissimos voluptas fugiat quaerat vel, tempore eum magnam odit eveniet at beatae quia consectetur.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
  const { data } = await useFetch('/api/ninja?')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>