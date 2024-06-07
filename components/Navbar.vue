<template>
    <section id="navbar" class="bg-cover bg-top bg-primary bg-blend-overlay shadow-xl">
        <div class="container mx-auto px-16 backdrop-blur-sm">
            <div class="text-white py-8 flex justify-between items-center drop-shadow-lg leading-none">
                <div class="font-bold text-xl uppercase">
                    <nuxt-link to="/">Family Tree</nuxt-link>
                </div>
                <div class="flex ite gap-10 text-lg">
                    <nuxt-link to="/about">About</nuxt-link>
                    <nuxt-link to="/history">History</nuxt-link>
                    <nuxt-link to="/downloads">Downloads</nuxt-link>
                    <nuxt-link to="/tree">Tree</nuxt-link>
                </div>

                <div class="text-lg flex gap-2">
                    <button class="hover-text hover:bg-gray-800 rounded-md px-2"><i class="ri-search-2-line"></i><span
                            class="tooltip-text">Search</span></button>
                    <button class="hover-text hover:bg-gray-800 rounded-md px-2"><i class="ri-moon-line"></i><span
                            class="tooltip-text">Enable dark mode</span></button>
                    <button class="hover-text hover:bg-gray-800 rounded-md px-2"><i class="ri-github-fill"></i><span
                            class="tooltip-text">Contribute on GitHub</span></button>
                    <button class="hover-text hover:bg-gray-800 rounded-md px-2">EN<i
                            class="ri-arrow-down-s-line"></i><span class="tooltip-text">Change language to
                            Nepali</span></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.hover-text {
    position: relative;
}

.hover-text:hover .tooltip-text {
    visibility: visible;
}

.tooltip-text {
    visibility: hidden;
    position: absolute;
    bottom: -130%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    padding: 8px 16px;
    align-items: center;
    width: max-content;
    color: white;
    font-size: 12px;
    line-height: 1;
    background-color: #192733;
    border-radius: 8px;
}
</style>