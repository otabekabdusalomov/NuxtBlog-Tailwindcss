<template>
    <div>
     <header>
         <nav>
             <NuxtLink to="/">Nuxt page</NuxtLink>
             <ul>
                 <li>
                     <NuxtLink to="/">Home</NuxtLink>
                 </li>
                 <li>
                     <NuxtLink to="/about">About</NuxtLink>
                 </li>
                 <li>
                     <NuxtLink to="/products">Products</NuxtLink>
                 </li>
                 <a href="/about">normal link -- about page</a>
             </ul>
         </nav>
     </header>

     <!-- output the page content -->
     <div>
        <slot />
     </div>
    </div>
 </template>

 <style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>