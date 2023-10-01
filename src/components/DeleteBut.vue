<template>
    <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" icon-color="#626AEF"
        title="Are you sure to delete this?" @confirm="delItem(props.index)">
        <template #reference>
            <el-button>Delete</el-button>
        </template>
    </el-popconfirm>
</template>
  
<script setup lang="ts">
import { useControlData } from '@/stores/useControlData';
const controlData = useControlData()

const emit = defineEmits()

const props = defineProps<{
    index: number
}>()

const delItem = (index: number) => {
    emit('delIndex', props.index)
    controlData.delItem(index)
}

</script>  