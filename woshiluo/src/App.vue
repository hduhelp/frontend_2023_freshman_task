<script setup>
import { ref } from 'vue';

import StuentList from './components/student-list.vue';

const students = ref([
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
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
	margin-top: 8vh;
	margin-bottom: 4vh;
}

.main-table {
	margin-left: auto;
	margin-right: auto;
	border-radius: 0.1em;
	width: 96vw;
}
</style>
