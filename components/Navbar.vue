<template>
    <section id="navbar" class="bg-green-700 drop-shadow-md">
        <div class="container mx-auto px-16 backdrop-blur-sm">
            <div class="text-white py-8 flex justify-between items-center">
                <div class="font-bold text-xl uppercase drop-shadow-lg">
                    <nuxt-link to="/">Family Tree</nuxt-link>
                </div>
                <div class="flex gap-8 text-lg">
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/about">About</nuxt-link>
                    <nuxt-link to="/history">History</nuxt-link>
                    <nuxt-link to="/downloads">Downloads</nuxt-link>
                    <nuxt-link to="/tree">Tree</nuxt-link>
                </div>

                <div>
                    <nuxt-link to="/login">Login</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>