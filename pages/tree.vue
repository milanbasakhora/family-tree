<template>
    <div id="tree" ref="tree"></div>
</template>

<script>
import FamilyTree from '@balkangraph/familytree.js'

export default {

    name: 'tree',
    data() {
        return {
            nodes: [
                { id: 1, pids: [3], gender: 'male', photo: 'https://cdn.balkan.app/shared/m60/2.jpg', name: 'Zeph Daniels', born: '1954-09-29' },
                { id: 2, pids: [3], gender: 'male', photo: 'https://cdn.balkan.app/shared/m60/1.jpg', name: 'Rowan Annable', born: '1952-10-10' },
                { id: 3, pids: [1, 2], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/1.jpg', name: 'Laura Shepherd', born: '1943-01-13', email: 'laura.shepherd@gmail.com', phone: '+44 845 5752 547', city: 'Moscow', country: 'ru' },
                { id: 4, pids: [5], photo: 'https://cdn.balkan.app/shared/m60/3.jpg', name: 'Rowan Annable' },
                { id: 5, pids: [4], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/3.jpg', name: 'Lois Sowle' },
                { id: 6, mid: 2, fid: 3, pids: [7], gender: 'female', photo: 'https://cdn.balkan.app/shared/w30/1.jpg', name: 'Tyler Heath', born: '1975-11-12' },
                { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male', photo: 'https://cdn.balkan.app/shared/m30/3.jpg', name: 'Samson Stokes', born: '1986-10-01' },
                { id: 8, mid: 7, fid: 6, gender: 'female', photo: 'https://cdn.balkan.app/shared/w10/3.jpg', name: 'Celeste Castillo', born: '2021-02-01' }
            ]
        }
    },

    methods: {
        mytree: function (domEl, x) {
            this.family = new FamilyTree(domEl, {
                nodes: x,
                mouseScroll: FamilyTree.none,
                mode: 'light',
                template: 'hugo',
                roots: [3],
                nodeMenu: {
                    edit: { text: 'Edit' },
                    details: { text: 'Details' },
                },
                nodeTreeMenu: true,
                nodeBinding: {
                    field_0: 'name',
                    field_1: 'born',
                    img_0: 'photo'
                },
                editForm: {
                    titleBinding: "name",
                    photoBinding: "photo",
                    addMoreBtn: 'Add element',
                    addMore: 'Add more elements',
                    addMoreFieldName: 'Element name',
                    generateElementsFromFields: false,
                    elements: [
                        { type: 'textbox', label: 'Full Name', binding: 'name' },
                        { type: 'textbox', label: 'Email Address', binding: 'email' },
                        [
                            { type: 'textbox', label: 'Phone', binding: 'phone' },
                            { type: 'date', label: 'Date Of Birth', binding: 'born' }
                        ],
                        [
                            { type: 'select', options: [{ value: 'bg', text: 'Bulgaria' }, { value: 'ru', text: 'Russia' }, { value: 'gr', text: 'Greece' }], label: 'Country', binding: 'country' },
                            { type: 'textbox', label: 'City', binding: 'city' },
                        ],
                        { type: 'textbox', label: 'Photo Url', binding: 'photo', btn: 'Upload' },
                    ]
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
html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: Helvetica;
}

#tree {
    width: 100%;
    height: 100%;
}
</style>