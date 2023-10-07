<script setup>
// import { ref } from 'vue';
import Student from './student.vue';

const props = defineProps({ data: Array });
</script>

<template>
	<table class="table">
		<thead class="table-header">
			<tr class="table-row">
				<th class="table-cell">#</th>
				<th class="table-cell">学号</th>
				<th class="table-cell">姓名</th>
				<th class="table-cell">学院</th>
				<th class="table-cell">专业</th>
				<th class="table-cell">年级</th>
				<th class="table-cell">班级</th>
				<th class="table-cell">年龄</th>
				<th class="table-cell">操作</th>
			</tr>
		</thead>
		<tbody class="table-body">
			<Student
				v-for="(student, idx) in data"
				:id="idx"
				v-bind="student"
			></Student>
		</tbody>
	</table>
</template>

<style scoped>
.table {
	width: 100%;
	padding: 0;
	border-spacing: 0;
	border-radius: 0.1em;
	overflow: hidden;
}
.table-header {
	background-color: #00695c;
	color: #fff;
}

.table-body {
	background-color: #fff;
}

.table-body > .table-row:nth-child(even) {
	background-color: #e0f2f1;
}

.table-body > .table-row:nth-child(odd) {
	background-color: #b2dfdb;
}

.table-row {
	cursor: pointer;
	transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.table-row:hover {
	filter: brightness(90%);
}
</style>
