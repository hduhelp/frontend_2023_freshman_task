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
    [key: string]: number | string | string[];
}

export const useControlData = defineStore('useControlData', () => {
    let data = ref<Data[]>([]);
    let dataKeyName: any[] = [];

    let detailState = ref<boolean>(false);
    let detaiIndex = ref<number>(0);

    function setNewVal(newData: Data[]): void {
        data.value = newData;
        if (!dataKeyName[0])
            for (let key in newData[0]) {
                dataKeyName.push(key);
            }
    }
    function delItem(index: number): void {
        data?.value?.splice(index, 1);
    }
    function editItem(index: number, newVal: string): void {
        data.value[index][dataKeyName[index]] = newVal;
    }

    function open(index: number): void {
        detailState.value = true;
        detaiIndex.value = index;
    }

    function close(): void {
        detailState.value = false;
    }

    return {
        data,
        setNewVal,
        delItem,
        detailState,
        open,
        close,
        detaiIndex,
        dataKeyName,
        editItem,
    };
});
