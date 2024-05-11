<script setup>
import { useData } from 'vitepress'

const { page } = useData()
// page.value.lastUpdated = '2023-03-01'
console.log(page.value,'ssss')
</script>

<template>
  <h1>{{ page.value.lastUpdated }}</h1>
</template>

# Docs


<Posts />