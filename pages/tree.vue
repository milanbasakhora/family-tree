<template>
    <section class="section">
        <!-- <div class="text-center font-mono">
            <h1 class="font-bold text-green-950 text-2xl py-10 leading-none">Basakhora Family Tree</h1>
        </div> -->
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
                "name": "Dudippa",
                "gender": "male",
                "fid": null,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 2,
                "name": "Tirthabir(Kaila)",
                "gender": "male",
                "fid": 1,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 3,
                "name": "Antikarna",
                "gender": "male",
                "fid": 1,   
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 4,
                "name": "Dhanjuri",
                "gender": "male",
                "fid": 2,
                "mid": null,
                "pids": [6],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 5,
                "name": "Hiradhan",
                "gender": "male",
                "fid": 2,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 6,
                "name": "Nangmakhi",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [4],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 7,
                "name": "Bhadriman",
                "gender": "male",
                "fid": 4,
                "mid": 6,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 8,
                "name": "Ranabola",
                "gender": "male",
                "description": "Maila Budha, Sidha Devi",
                "fid": 4,
                "mid": 6,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 9,
                "name": "Budhibir",
                "gender": "male",
                "fid": 4,
                "mid": 6,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 10,
                "name": "Dalbir",
                "gender": "male",
                "description": "Jethi Patti",
                "fid": 5,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 11,
                "name": "Tijman",
                "gender": "male",
                "fid": 5,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 12,
                "name": "Bir Bahadur",
                "gender": "male",
                "description": "Kanxi Patti",
                "fid": 5,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 13,
                "name": "Mr. Kalimpung",
                "gender": "male",
                "description": "Kalimpung tira pasigako manxe",
                "fid": 5,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 14,
                "name": "Shree Kanni",
                "gender": "female",
                "fid": 5,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 15,
                "name": "Bir Kanni",
                "gender": "female",
                "fid": 5,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 16,
                "name": "Krishna",
                "gender": "male",
                "descripion": "Wangakhara khatni makhara",
                "fid": 7,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 17,
                "name": "Mansher",
                "gender": "male",
                "fid": 9,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 18,
                "name": "Dilsher",
                "gender": "male",
                "description": "Master, lahure 24 barsha",
                "fid": 9,
                "mid": null,
                "pids": [39],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 19,
                "name": "Kanxa",
                "gender": "male",
                "fid": 9,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 20,
                "name": "Dirvan",
                "gender": "male",
                "fid": 11,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 21,
                "name": "Tribhuman",
                "gender": "male",
                "description": "Himalyopa, Lahure",
                "fid": 11,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 22,
                "name": "Dirghaman",
                "gender": "male",
                "description": "Jahan ko name Harki Maya ",
                "fid": 11,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 23,
                "name": "Tirthaman",
                "gender": "male",
                "fid": 11,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 24,
                "name": "Ajirman",
                "gender": "male",
                "fid": 11,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 25,
                "name": "Bakhat Bahadur",
                "gender": "male",
                "desctiption": "5 barsha ko umer ma biteko",
                "fid": 21,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 26,
                "name": "Khamba Singh",
                "gender": "male",
                "fid": 21,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 27,
                "name": "Agam Singh",
                "gender": "male",
                "fid": 21,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 28,
                "name": "Himalmaya",
                "gender": "female",
                "fid": 21,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 29,
                "name": "Sanimaya",
                "gender": "female",
                "fid": 21,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 30,
                "name": "Mangshir Maya",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [26],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 31,
                "name": "Barti Maya",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [27],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 32,
                "name": "Parsha Singh",
                "gender": "male",
                "fid": 22,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 33,
                "name": "Harka Maya",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [22],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 34,
                "name": "Jukti Singh",
                "gender": "male",
                "fid": 22,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 35,
                "name": "Uttar Singh",
                "gender": "male",
                "fid": 22,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 36,
                "name": "Sukh Maya",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [35],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 37,
                "name": "Barna Maya",
                "gender": "female",
                "fid": 22,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 38,
                "name": "Rahan Maya (Bhaldungyoma)",
                "gender": "female",
                "description": "Bhaldungyoma",
                "fid": 22,
                "mid": null,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 39,
                "name": "Gopi Maya",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [18],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 40,
                "name": "Bishnu Prasad (Duware)",
                "gender": "male",
                "description": "Bishnu Prasad",
                "fid": 18,
                "mid": 39,
                "pids": [41],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 41,
                "name": "Madhur Maya",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [40],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 42,
                "name": "Ram Prasad",
                "gender": "male",
                "description": "Surjyopa",
                "fid": 18,
                "mid": 39,
                "pids": [43, 44],
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 43,
                "name": "Tili Maya",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [42],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 44,
                "name": "Kanxi",
                "gender": "female",
                "fid": null,
                "mid": null,
                "pids": [42],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 45,
                "name": "Kumari (Leutima)",
                "gender": "female",
                "description": "Longlima Pattiko",
                "fid": 18,
                "mid": 39,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 46,
                "name": "Sani Maya",
                "gender": "female",
                "fid": 18,
                "mid": 39,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 47,
                "name": "Ratna Maya",
                "gender": "female",
                "fid": 18,
                "mid": 39,
                "pids": [null],
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            ]
        }
    },


    methods: {
        mytree: function (domEl, x) {
            this.family = new FamilyTree(domEl, {
                nodes: x,
                enableSearch: true,
                mouseScrool: FamilyTree.action.ctrlZoom,
                mode: 'dark',
                template: 'hugo',
                nodeMenu: {
        edit: { text: 'Edit' },
        details: { text: 'Details' },
    },
    nodeTreeMenu: true,
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
                    field_1: 'id',
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