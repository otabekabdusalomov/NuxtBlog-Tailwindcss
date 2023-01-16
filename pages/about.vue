<template>
    <div>
        <h2>About page</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur nam hic voluptatum ad repellat debitis dignissimos voluptas fugiat quaerat vel, tempore eum magnam odit eveniet at beatae quia consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, sint quod sunt magni deleniti beatae soluta accusantium, veniam ea amet temporibus facilis. Soluta commodi accusantium sunt harum dolores voluptatum odit!</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
  const { data } = await useFetch('/api/ninja?name=mario', {
    method: 'post',
    body: { age: 30 }
  })
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