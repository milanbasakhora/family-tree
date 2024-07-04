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
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 2,
                "fid": 1,
                "name": "Tirthabir(Kaila)",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 3,
                "fid": 1,
                "name": "Antikarna",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 4,
                "fid": 2,
                "pids": [6],
                "name": "Dhanjuri",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 5,
                "fid": 2,
                "name": "Hiradhan",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 6,
                "pids": [4],
                "name": "Nangmakhi",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 7,
                "fid": 4,
                "name": "Bhadriman",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 8,
                "fid": 4,
                "name": "Ranabola",
                "description": "Maila Budha, Sidha Devi",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 9,
                "fid": 4,
                "name": "Budhibir",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 10,
                "fid": 5,
                "name": "Dalbir",
                "description": "Jethi Patti",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 11,
                "fid": 5,
                "name": "Tijman",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 12,
                "fid": 5,
                "name": "Bir Bahadur",
                "description": "Kanxi Patti",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 13,
                "fid": 5,
                "name": "Mr. Kalimpung",
                "description": "Kalimpung tira pasigako manxe",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 14,
                "fid": 5,
                "name": "Shree Kanni",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 15,
                "fid": 5,
                "name": "Bir Kanni",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 16,
                "fid": 7,
                "name": "Krishna",
                "descripion": "Wangakhara khatni makhara",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 17,
                "fid": 9,
                "name": "Mansher",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 18,
                "fid": 9,
                "pids": [39],
                "name": "Dilsher",
                "description": "Master, lahure 24 barsha",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 19,
                "fid": 9,
                "name": "Kanxa",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 20,
                "fid": 11,
                "name": "Dirvan",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 21,
                "fid": 11,
                "name": "Tribhuman",
                "description": "Himalyopa, Lahure",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 22,
                "fid": 11,
                "name": "Dirghaman",
                "description": "Jahan ko name Harki Maya ",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 23,
                "fid": 11,
                "name": "Tirthaman",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 24,
                "fid": 11,
                "name": "Ajirman",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 25,
                "fid": 21,
                "name": "Bakhat Bahadur",
                "desctiption": "5 barsha ko umer ma biteko",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 26,
                "fid": 21,
                "name": "Khamba Singh",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 27,
                "fid": 21,
                "name": "Agam Singh",
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 28,
                "fid": 21,
                "name": "Himalmaya",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 29,
                "fid": 21,
                "name": "Sanimaya",
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 30,
                "name": "Mangshir Maya",
                "pids": [26],
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 31,
                "name": "Barti Maya",
                "pids": [27],
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 32,
                "name": "Parsha Singh",
                "fid": 22,
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 33,
                "name": "Harka Maya",
                "pids": [22],
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 34,
                "name": "Jukti Singh",
                "fid": 22,
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 35,
                "name": "Uttar Singh",
                "fid": 22,
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 36,
                "name": "Sukh Maya",
                "pids": [35],
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 37,
                "name": "Barna Maya",
                "fid": 22,
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 38,
                "name": "Rahan Maya (Bhaldungyoma)",
                "description": "Bhaldungyoma",
                "fid": 22,
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 39,
                "name": "Gopi Maya",
                "pids": [18],
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 40,
                "name": "Bishnu Prasad (Duware)",
                "description": "Bishnu Prasad",
                "pids": [41],
                "fid": 18,
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 41,
                "name": "Madhur Maya",
                "pids": [40],
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 42,
                "name": "Ram Prasad",
                "pids": [43, 44],
                "description": "Surjyopa",
                "fid": 18,
                "gender": "male",
                "img": "https://cdn.balkan.app/shared/m60/1.jpg"
            },
            {
                "id": 43,
                "name": "Tili Maya",
                "pids": [42],
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 44,
                "name": "Kanxi",
                "pids": [42],
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 45,
                "name": "Kumari (Leutima)",
                "description": "Longlima Pattiko",
                "fid": 18,
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 46,
                "name": "Sani Maya",
                "fid": 18,
                "gender": "female",
                "img": "https://cdn.balkan.app/shared/w60/1.jpg"
            },
            {
                "id": 47,
                "name": "Ratna Maya",
                "fid": 18,
                "gender": "female",
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