<script setup>
import { ref } from 'vue';

import StuentList from './components/student-list.vue';

const students = ref([
	{ checked: false, student_id: 1, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 2, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 3, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 4, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 5, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 6, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 7, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 8, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 9, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 10, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 11, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 12, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 13, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 14, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 15, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 16, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 17, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 18, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 19, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 20, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 21, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 22, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 23, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 24, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 25, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 26, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 27, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 28, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 29, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
	{ checked: false, student_id: 30, name: '123', college: 'A', major: 'B', year: 2021, class_id: 1, old: 1 },
]);

const toggle_student = (idx) => { 
	students.value[idx].checked = !students.value[idx].checked;
};

const delete_student = () => {
	let list = [];
	for( const idx in students.value ) {
		if( !students.value[idx].checked )
			list.push(students.value[idx]);
	}
	students.value = list
};
</script>

<template>
	<h1 class="title main-title">学生信息管理系统</h1>
	<div class="main-table">
		<StuentList :data="students" @toggle="toggle_student" @delete="delete_student"></StuentList>
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
