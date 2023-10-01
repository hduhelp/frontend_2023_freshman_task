<template>
    <el-table class="main" :data="getArr((currentPage - 1) * 5 + 1, currentPage * 5)" border stripe
        :default-sort="{ prop: 'date', order: 'descending' }">

        <el-table-column type="selection" width="55" />
        <el-table-column fixed prop="id" label="id" sortable />
        <el-table-column prop="title" label="title" />
        <el-table-column prop="description" label="description" />
        <el-table-column prop="price" label="price" />
        <el-table-column prop="discountPercentage" label="discountPercentage" />
        <el-table-column prop="rating" label="rating" />
        <el-table-column fixed="right" label="Operations">
            <template #default="scope">
                <DeleteBut v-if="(json[(currentPage - 1) * 5 + scope.$index])" :index="scope.$index"></DeleteBut>
                <el-button v-if="(json[(currentPage - 1) * 5 + scope.$index])" type="primary" size="small"
                    @click="emitDetail(scope.$index)">Details</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
        <el-pagination v-model:current-page="currentPage" background layout="prev, pager, next" :total="len * 10" />
    </div>
</template>

<script lang="ts">
const url: string = 'https://dummyjson.com/products'

const res = await fetch(url);
const js = await res.json();
</script>

<script setup lang='ts'>
import DeleteBut from './DeleteBut.vue'
import { ref, reactive, computed } from 'vue'
import { useControlData } from '@/stores/useControlData';


let json = ref(js)
let currentPage = ref(1)

const controlData = useControlData()
controlData.setNewVal(json.value.products)
json.value = js.products

controlData.$subscribe((mutation, state) => {
    json.value = controlData.data
})

let len = computed<number>(() => {
    return Math.ceil(json.value.length / 5)
})

const getArr = (x: number, y: number) => {
    let arr: any = []
    for (let i = x - 1; i < y; i++)
        arr.push(json.value[i])
    return arr
}

const emitDetail = (index: number) => {
    controlData.open()
    controlData.setNewIndex(index)

}
</script>

<style scoped lang='less'>
.main {
    display: inline-block;
    width: 90vw;
    margin-top: 75px;
    left: calc(50vw - 45vw);
}

.demo-pagination-block {
    margin-top: 10px;
    margin-left: 5vw;
}
</style>