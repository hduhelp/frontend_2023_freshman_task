import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

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

export const useControlData = defineStore('useControlData', () => {
    let data = ref<Data[]>([]);
    let dataKeyName: any[] = [];

    let detailState = ref<boolean>(false);
    let detaiIndex = ref<number>(0);
    let detailObj = ref<Data>();

    function setNewVal(newData: Data[]): void {
        data.value = newData;
        if (!dataKeyName[0])
            for (let key in newData[0]) {
                dataKeyName.push(key);
            }
    }
    function delItem(index: number): void {
        data?.value?.splice(index, 1);
        console.log('删除数据', index, data.value);
    }

    function open(): void {
        detailState.value = true;
    }

    function close(): void {
        detailState.value = false;
    }
    function setNewIndex(index: number): void {
        detaiIndex.value = index;
        detailObj.value = data.value[index];
    }

    return {
        data,
        setNewVal,
        delItem,
        detailState,
        open,
        close,
        detaiIndex,
        setNewIndex,
        dataKeyName,
        detailObj,
    };
});
