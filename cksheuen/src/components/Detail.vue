<template>
    <el-drawer v-model="controlData.detailState" :show-close="false" direction="btt" size="75vh"
        :before-close="handleClose">
        <el-descriptions class="margin-top" title="Details" :column="3" border>
            <template #extra>
                <el-button v-if="controlData.editState" @click="saveNewVal">Confirm</el-button>
                <el-button type="primary" @click="changeEditState">Edit</el-button>
            </template>
            <el-descriptions-item v-for="item in controlData.dataKeyName">
                <template #label v-if="item != 'thumbnail'">
                    <div class="cell-item">
                        {{ item }}
                    </div>
                </template>
                <el-input id="newVal" v-model="controlData.data[controlData.detaiIndex]![item]"
                    v-if="controlData.editState && item != 'images' && item != 'thumbnail'" />

                <div class="content" v-if="item != 'images' && item != 'thumbnail' && !controlData.editState">
                    {{ controlData.data[controlData.detaiIndex]![item] }}
                </div>
                <img v-else-if="item != 'thumbnail' && !controlData.editState"
                    :src="controlData.data[controlData.detaiIndex]?.images[0]"
                    :alt="controlData.data[controlData.detaiIndex]?.title">
            </el-descriptions-item>
        </el-descriptions>
    </el-drawer>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { ElButton, ElDrawer } from 'element-plus'
import { useControlData } from '@/stores/useControlData';

const controlData = useControlData()

const handleClose = () => {
    controlData.close()
    controlData.checkState(false)
}

const changeEditState = () => {
    controlData.checkState(!controlData.editState)
}

const saveNewVal = () => {
    let domArr = document.querySelectorAll('#newVal')
    for (let i = 0; i < domArr.length; i++)
        controlData.editItem(i, (domArr[i] as HTMLInputElement).value)

    changeEditState()
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
  