<script setup>
import { ref } from 'vue';

import StuentList from './components/student-list.vue';

const students = ref([
	{ student_id: 1, name: "123", college: "A", major: "B",  year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: "123", college: "A", major: "B",  year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: "123", college: "A", major: "B",  year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: "123", college: "A", major: "B",  year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: "123", college: "A", major: "B",  year: 2021, class_id: 1, old: 1 }
]);
</script>

<template>
	<h1 class="title main-title">学生信息管理系统</h1>
	<div class="main-table">
		<StuentList :data="students"></StuentList>
	</div>
</template>

<style scoped>
.title {
	text-align: center;
}

.main-table {
	margin-left: auto;
	margin-right: auto;
	border-radius: .1em;
	width: 96vw;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}
</style>
