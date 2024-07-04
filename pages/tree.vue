<template>
    <section class="section">
        <div class="text-center font-mono">
            <h1 class="font-bold text-green-950 text-2xl py-10 leading-none">Basakhora Family Tree</h1>
        </div>
        <div id="tree" ref="tree"></div>
    </section>
</template>
<script>
import FamilyTree from '@balkangraph/familytree.js'

export default {

    name: 'tree',
    data() {
        return {
            nodes: [{
                "id": 1,
                "mid": 6,
                "fid": 5,
                "pids": [2],
                "name": "Its Me",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/9.jpg"
            },
            {
                "id": 2,
                "pids": [1],
                "mid": 8,
                "fid": 7,
                "name": "Spouse",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w30/14.jpg"
            },
            {
                "id": 3,
                "mid": 1,
                "fid": 2,
                "name": "Daughter",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w10/4.jpg"
            },
            {
                "id": 4,
                "mid": 1,
                "fid": 2,
                "name": "Son",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m10/1.jpg"
            },
            {
                "id": 5,
                "pids": [6],
                "name": "Father",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 6,
                "pids": [5],
                "name": "Mother",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 7,
                "pids": [8],
                "name": "Uncle",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/2.jpg"
            },
            {
                "id": 8,
                "pids": [7],
                "name": "Aunt",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/2.jpg"
            }
            ]
        }
    },


    methods: {
        mytree: function (domEl, x) {
            this.family = new FamilyTree(domEl, {
                nodes: x,
                enableSearch: true,
                mouseScrool: FamilyTree.action.ctrlZoom,
                mode: 'light',
                template: 'hugo',
                scaleInitial: FamilyTree.match.boundary,
                scaleMax: 1.5   ,
                toolbar: {
                    fullScreen: true,
                    zoom: true,
                    fit: true,
                    expandAll: true,
                },
                nodeBinding: {
                    field_0: 'name',
                    field_1: 'born',
                    img_0: 'img'
                },
            });
        }
    },

    mounted() {
        this.mytree(this.$refs.tree, this.nodes)
    }
}
</script>

<style scoped>
.section {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#tree {
    width: 100%;
    height: 100%;
}
</style>