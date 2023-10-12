<script setup>
// import { ref } from 'vue';

const props = defineProps({
	id: Number,
	student_id: Number,
	name: String,
	college: String,
	major: String,
	year: Number,
	class_id: Number,
	old: Number
});
</script>
<template>
	<tr class="table-row">
		<td class="table-cell">{{ id + 1 }}</td>
		<td class="table-cell">{{ student_id }}</td>
		<td class="table-cell">{{ name }}</td>
		<td class="table-cell">{{ college }}</td>
		<td class="table-cell">{{ major }}</td>
		<td class="table-cell">{{ year }}</td>
		<td class="table-cell">{{ class_id }}</td>
		<td class="table-cell">{{ old }}</td>
		<td class="table-cell">操作</td>
	</tr>
</template>

<style scoped>
.table-cell {
	text-align: center;
	vertical-align: middle;
	height: 1em;
	padding: .5em;
}
</style>
