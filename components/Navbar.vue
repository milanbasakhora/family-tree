<template>
    <section id="navbar" class="bg-cover bg-center bg-primary shadow-xl">
        <div class="container mx-auto px-16">
            <div class="text-white py-8 flex justify-between items-center drop-shadow-lg">
                <div class="font-bold text-xl uppercase">
                    <nuxt-link to="/">Family Tree</nuxt-link>
                </div>
                <div class="flex gap-8 text-lg">
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/about">About</nuxt-link>
                    <nuxt-link to="/history">History</nuxt-link>
                    <nuxt-link to="/downloads">Downloads</nuxt-link>
                    <nuxt-link to="/tree">Tree</nuxt-link>
                </div>

                <div class="text-lg">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>