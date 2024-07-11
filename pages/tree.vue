<template>
    <section class="section">
      <div id="tree" ref="tree"></div>
    </section>
  </template>
  
  <script>
  import FamilyTree from '@balkangraph/familytree.js'
  import { ref, onMounted } from 'vue'
  
  export default {
    name: 'tree',
    setup() {
      const treeRef = ref(null)
      const nodes = ref([])
  
      const fetchNodes = async () => {
        try {
          const response = await fetch('/api/tree')
          if (response.ok) {
            const data = await response.json()
            nodes.value = data
            initTree(treeRef.value, nodes.value)
          } else {
            console.error('Failed to fetch nodes:', response.statusText)
          }
        } catch (error) {
          console.error('Error fetching nodes:', error)
        }
      }
  
      const initTree = (domEl, nodes) => {
        if (!domEl || nodes.length === 0) return
  
        new FamilyTree(domEl, {
          nodes: nodes,
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
          scaleMax: 1.5,
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
        })
      }
  
      onMounted(fetchNodes)
  
      return {
        treeRef,
        nodes
      }
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
  