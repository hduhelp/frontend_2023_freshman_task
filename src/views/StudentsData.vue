<template>
    <div class="body">
        <div class="title">title</div>
        <Table></Table>
        <Detail :visible="show" :data="data"></Detail>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { useControlData } from '@/stores/useControlData';
import Table from '@/components/Table.vue';
import Detail from '@/components/Detail.vue';

const controlData = useControlData()

interface Data {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

let data: Data
let show = ref(false)
</script>
  


<style scoped lang='less'>
.title {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: (-50%);
}
</style>