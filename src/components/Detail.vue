<template>
    <el-drawer v-model="controlData.detailState" :show-close="false" direction="btt" size="75vh"
        :before-close="handleClose">
        <el-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
            <template #extra>
                <el-button type="primary" @click="change">Edit</el-button>
            </template>
            <el-descriptions-item v-for="item in controlData.dataKeyName">
                <template #label v-if="item != 'thumbnail'">
                    <div class="cell-item">
                        {{ item }}
                    </div>
                </template>
                <div class="content" v-if="item != 'images' && item != 'thumbnail'">
                    {{ controlData.detailObj[item] }}
                </div>
                <img v-else-if="item != 'thumbnail'" :src="controlData.detailObj?.images[0]"
                    :alt="controlData.detailObj?.title">
            </el-descriptions-item>
        </el-descriptions>
    </el-drawer>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElButton, ElDrawer } from 'element-plus'
import { useControlData } from '@/stores/useControlData';

const controlData = useControlData()

let test = controlData.data[0]

console.log(controlData.detaiIndex);

const props = defineProps<
    {
        visible: boolean,
        data: {
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
    }
>()
const emit = defineEmits()

const size = ref('')

const handleClose = () => {
    controlData.close()
}

const change = () => {

}
</script>
  
<style scoped lang="less">
.cell-item {
    display: flex;
    align-items: center;
}

.margin-top {
    margin-top: 20px;
}
</style>
  