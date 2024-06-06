<template>
    <div>
        <header class="sticky top-0 font-mono z-50">
            <Navbar/>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
            <Footer></Footer>
        </footer>
    </div>
</template>

<script setup>
useHead('...');
useSeoMeta({
    title:'Family Tree',
    ogTitle:'YOYO',
    ogImage: '',
})
</script>

<style scoped>
</style>