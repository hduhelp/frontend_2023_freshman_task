<script setup>
import { ref } from 'vue';
import Student from './student.vue';

const props = defineProps({ data: Array });
const emit = defineEmits(['edit', 'delete'])
const pages = ref(1);
const PAGE_MAX = 20;

const page_vaild = (offset) => {
	if( pages.value + offset < 1 || pages.value + offset > Math.ceil( 1.0 * props.data.length / PAGE_MAX ) )
		return false;
	return true;
}
const page_add = (offset) => { 
	pages.value += offset;
};
const check_display = (idx) => {
	return ( pages.value - 1 ) * PAGE_MAX <= idx && idx < pages.value * PAGE_MAX;
};

const delete_student = (idx) => {
	emit("delete", idx);
};
</script>

<template>
	<div class="main">
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
				<template v-for="(student, idx) in data" >
					<Student 
						:id="idx"
						:key="idx"
						@delete="delete_student"
						v-if="check_display(idx)"
						v-bind="student"
					></Student>
				</template>
			</tbody>
		</table>
	</div>
	<div class="table-control">
		<button class="control control-button control-left" :class="{ 'control-disable': !page_vaild(-1) }" @click="page_add(-1)">&lt;</button>
		<span class="control control-text">{{ pages }}</span>
		<button class="control control-button control-right" :class="{ 'control-disable': !page_vaild(1) }" @click="page_add(1)">&gt;</button>
	</div>
</template>

<style scoped>
.main {
	height: 60em; 
	overflow: scroll;
}

.table {
	width: calc( 100% - 1em );
	margin-left: auto;
	margin-right: auto;
	padding: 0;
	border-spacing: 0;
	border-radius: 0.1em;
	overflow: hidden;
	max-height: 100%;
	box-shadow:
		rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
		rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
		rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
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

.table-cell {
	height: 1em;
	padding: 1em;
}

.table-row:hover {
	filter: brightness(90%);
}

.table-control {
	display: flex;
	justify-content: space-between;
}

.control-disable {
	opacity: 0;
}

.table-control {
	padding-top: 1em;
}

.control {
	background: #90CAF9;
	padding: .2em;
	padding-left: .4em;
	padding-right: .4em;
	border-radius: .1em;
	font-size: 1.2em;
	color: #fff;
	transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.control:hover {
	background: #2196F3;
}

.control-text {
	background: #2196F3;
}

.control-button {
	border: none;
}
</style>
