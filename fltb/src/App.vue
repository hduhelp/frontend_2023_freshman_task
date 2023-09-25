<script setup>
import { NSpace, NSpin, NButton, NAlert, NDivider, NH1, NDataTable, NModal, NRadio, NRadioGroup, NForm, NFormItem, NInput, NInputNumber } from 'naive-ui';
import { h, ref, onMounted } from 'vue';
import { loadFull } from "tsparticles"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import particlesOpitions from './particles.json';
const particlesInit = async engine => {
  await loadFull(engine);
};

const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};
// global variables begin::

/**
 * @typedef StudentInfo
 * @type {Object}
 * @property {Number} key
 * @property {String} username
 * @property {String} password
 * @property {String} email
 * @property {String} firstName
 * @property {String} lastName
 * @property {Number} age
 * @property {String} gender
 * @property {Number} height
 * @property {Number} weight
 */

/**
 * 
 * @param {Object} onDeleteRowClick 
 * @param {Object} onModifyRowClick 
 */
const createColumns = (onDeleteRowClick, onModifyRowClick) => [
  {
    type: "selection",
  }, {
    title: "Index",
    key: "key"
  }, {
    title: "Username",
    key: "username"
  }, {
    title: "Password",
    key: "password"
  }, {
    title: "Email",
    key: "email"
  }, {
    title: "First Name",
    key: "firstName"
  }, {
    title: "Last Name",
    key: "lastName"
  }, {
    title: "Age",
    key: "age"
  }, {
    title: "Gender",
    key: "gender"
  }, {
    title: "Height",
    key: "height"
  }, {
    title: "Weight",
    key: "weight"
  }, {
    title: "Action",
    key: "action",
    render(row) {
      return h(NSpace, null, [h(
        NButton,
        {
          strong: true,
          tertiary: true,
          type: "primary",
          onClick: () => onModifyRowClick(row)
        },
        { default: () => "Modify" }
      ), h(
        NButton,
        {
          strong: true,
          tertiary: true,
          type: "error",
          onClick: () => onDeleteRowClick(row)
        },
        { default: () => "Delete" }
      )
      ])
    }
  }
];
const rules = {
  inputValue: {
    required: true,
  }
}

const data = ref([]);
const checkedRowKeysRef = ref([]);
const spinShow = ref(true);

const editModelData = ref({});
const showModal = ref(false);
const modalMode = ref("");
const errorMessage = ref("");

// global variables end::

// functions begin::

/**
 * 
 * @param {Boolean} mode
 */
function initModel(mode) {
  errorMessage.value = "";
  if (mode == "edit") {
    modalMode.value = "edit";
  } else if (mode == "add") {
    modalMode.value = "add";
  }
}

function handleValidateClick() {
  for (const [key, value] of Object.entries(editModelData.value)) {
    if (!value && key != "key" && key != "id") {
      errorMessage.value = `Please fill in the ${key}`;
      return false;
    }
  }
  return true;
}

function submitCallback() {
  if (!handleValidateClick()) {
    return;
  }
  if (modalMode.value == "edit") {
    data.value[editModelData.value.key] = { ...editModelData.value };
    fetch(`https://dummyjson.com/users/${editModelData.value.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editModelData.value)
    })
      .then(res => res.json())
      .then(console.log)
  } else if (modalMode.value == "add") {
    editModelData.value.key = data.value.length;
    data.value.push({ ...editModelData.value });
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editModelData.value)
    })
      .then(res => res.json())
      .then(console.log)
  }
  showModal.value = false;
}

function cancelCallback() {
  showModal.value = false;
}

function onDeleteClick() {
  checkedRowKeysRef.value.forEach(key => {
    fetch(`https://dummyjson.com/users/${data.value[key].id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log);
  })
  data.value = data.value.filter(ele => !checkedRowKeysRef.value.includes(ele.key));
  checkedRowKeysRef.value = []
  data.value.forEach((ele, index) => ele.key = index);
}

function onAddRowClick() {
  initModel("add");
  showModal.value = true;
  editModelData.value = {
    key: 0,
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    height: 0,
    weight: 0,
    id: data.value.length,
  };
}

function onDeleteRowClick(row) {
  fetch(`https://dummyjson.com/users/${row.key}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(console.log);
  data.value = data.value.filter(ele => ele.key != row.key);
  checkedRowKeysRef.value = checkedRowKeysRef.value.filter(ele => ele != row.key);
  data.value.forEach((ele, index) => ele.key = index);
}
function onModifyRowClick(row) {
  initModel("edit");
  showModal.value = true;
  editModelData.value = { ...row };
}
function rowKey(row) {
  return row.key;
}
function handleCheck(rowKeys) {
  checkedRowKeysRef.value = rowKeys;
}
const columns = createColumns(onDeleteRowClick, onModifyRowClick);
function rowClassName(row) {
  if (row.key % 2) {
    return 'odd-line';
  }
  return 'even-line'
}

// functions end::

// hooks begin::
onMounted(() => {
  fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      res.users.forEach((element, index) => {
        data.value.push({
          id: element.id,
          key: index,
          username: element.username,
          password: element.password,
          email: element.email,
          firstName: element.firstName,
          lastName: element.lastName,
          age: element.age,
          gender: element.gender,
          height: element.height,
          weight: element.weight
        });
      });
      spinShow.value = false;
    });

})
// hooks end::


</script>

<template>
  <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
    :options="particlesOpitions" />
  <div class="container pb-3 pt-1 ps-4 pe-4 mt-3 animate__animated animate__fadeInDown" style="background-color: #ffffffa1;">
    <n-divider>
      <n-h1 class="animate__animated animate__heartBeat animate__delay-1s">User Management System by FLTB</n-h1>
    </n-divider>
    <n-space class="mb-3 animate__animated animate__fadeIn animate__delay-1s">
      <n-button size="large" type="primary" @click="onAddRowClick">Add</n-button>
      <n-button size="large" type="error" @click="onDeleteClick">Delete</n-button>
    </n-space>
    <n-spin :show="spinShow">
      <n-data-table class="animate__animated animate__fadeIn animate__delay-1s" :row-key="rowKey" :columns="columns" :data="data" :pagination="{
        pageSize: 10
      }" :row-class-name="rowClassName" @update:checked-row-keys="handleCheck" :checked-row-keys="checkedRowKeysRef"
        :bordered="false" />
    </n-spin>

    <n-modal v-model:show="showModal" preset="dialog" title="Edit">
      <n-form class="mt-3" ref="formRef" :model="editModelData" :rules="rules" label-placement="left" label-width="auto"
        require-mark-placement="right-hanging" size="medium">
        <n-alert v-if="errorMessage" title="Error" type="error" class="mt-3 mb-3">
          {{ errorMessage }}
        </n-alert>
        <n-form-item label="Username" path="inputValue">
          <n-input v-model:value="editModelData.username" placeholder="usern@me" :required="true" />
        </n-form-item>
        <n-form-item label="Password" path="inputValue">
          <n-input v-model:value="editModelData.password" placeholder="p@ssord" :required="true" />
        </n-form-item>
        <n-form-item label="Email" path="inputValue">
          <n-input v-model:value="editModelData.email" placeholder="em@il" :required="true" />
        </n-form-item>
        <n-form-item label="First Name" path="inputValue">
          <n-input v-model:value="editModelData.firstName" placeholder="first n@me" :required="true" />
        </n-form-item>
        <n-form-item label="Last Name" path="inputValue">
          <n-input v-model:value="editModelData.lastName" placeholder="last n@ame" :required="true" />
        </n-form-item>
        <n-form-item label="Age" path="inputValue">
          <n-input-number v-model:value="editModelData.age" :required="true" />
        </n-form-item>
        <n-form-item label="Gender" path="radioGroupValue">
          <n-radio-group v-model:value="editModelData.gender">
            <n-radio value="male">Male</n-radio>
            <n-radio value="female">Female</n-radio>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="Height" path="inputValue">
          <n-input-number v-model:value="editModelData.height" :required="true" />
        </n-form-item>
        <n-form-item label="Weight" path="inputValue">
          <n-input-number v-model:value="editModelData.weight" :required="true" />
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="cancelCallback">Cancel</n-button>
          <n-button type="primary" @click="submitCallback">Submit</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<style scoped>
:deep(.odd-line td) {
  background-color: rgba(244, 255, 254, 0.75);
}
</style>
