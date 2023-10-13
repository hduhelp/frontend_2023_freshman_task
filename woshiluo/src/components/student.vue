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

const emit = defineEmits(['edit', 'delete'])

const delete_student = () => {
	emit('delete', props.id);
};
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
		<td class="table-cell">
			<span class="button delete-button" @click="delete_student">删除</span>
			<span class="button edit-button">编辑</span>
		</td>
	</tr>
</template>

<style scoped>
.button {
	color: #42A5F5;
	cursor: pointer;
	transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.button:hover {
	color: #1565C0;
}

.edit-button {
	padding-left: .3em;
}
.table-cell {
	text-align: center;
	vertical-align: middle;
	height: 1em;
	padding: .5em;
	transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}
</style>
