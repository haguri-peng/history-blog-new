<template>
  <GDialog
    v-model="dialogState"
    max-width="500"
    persistent
    @update:modelValue="onClose"
  >
    <div class="wrapper text-black">
      <div class="p-5">
        <div class="text-3xl font-bold mb-5">【{{ title }}】</div>
        <!-- Blog name (댓글 시에만 보이도록 설정) -->
        <input
          v-if="type === 'comment'"
          type="text"
          v-model="blogName"
          placeholder="Enter your blog's name"
          style="
            width: 97%;
            margin-bottom: 5px;
            font-size: 1rem;
            padding: 0 5px;
          "
        />
        <!-- Comment -->
        <textarea
          v-model="comment"
          rows="5"
          placeholder="Insert your comment"
          style="font-size: 1rem; width: 97.4%; resize: none; padding: 5px"
        ></textarea>
        <!-- Secret checkbox -->
        <label for="check">
          <input type="checkbox" id="check" v-model="arrChk" value="secret" />
          secret
        </label>
      </div>
      <!-- Buttons -->
      <div class="actions flex justify-end">
        <button class="btn submit bg-violet-300" @click="submit">등록</button>
        <button class="btn close bg-violet-500" @click="close">닫기</button>
      </div>
    </div>
  </GDialog>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';

const showModal = defineModel<boolean>('showModal', { required: true });
const type = defineModel<string>('type', { required: true });

const emit = defineEmits<{
  closeModal: [
    action: string,
    objData?: {
      blogName: string;
      comment: string;
      secret: boolean;
    },
  ];
}>();

const title = ref('');
if (type.value == 'comment') {
  title.value = '댓글';
} else if (type.value == 'guestbook') {
  title.value = '방명록';
}

const blogName = ref('');
const comment = ref('');
let arrChk = reactive([]);
const submit = () => {
  // input validation
  if (type.value == 'comment' && blogName.value == '') {
    alert('블로그 주소는 필수입니다.');
    return;
  }
  if (comment.value == '') {
    alert('입력된 내용이 없습니다.');
    return;
  }

  const objData = {
    blogName: blogName.value,
    comment: comment.value,
    secret: arrChk.length > 0 ? true : false,
  };

  clearModal();
  emit('closeModal', 'submit', objData);
};
const clearModal = () => {
  blogName.value = '';
  comment.value = '';
  arrChk.length = 0;
};

const onClose = () => {
  close();
};
const close = () => {
  clearModal();
  emit('closeModal', 'close');
};

const dialogState = ref(false);
watch(showModal, (val) => {
  dialogState.value = val;
});
</script>

<style scoped>
.wrapper {
  background-color: rgba(118, 84, 154, 0.11);
  border: 3px solid #76549a;
}
.actions {
  padding: 10px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.actions button.btn {
  pointer-events: all;
  margin: 0 4px;
  padding: 5px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.actions button.btn:hover {
  font-weight: 500;
  background-color: #76549a;
}
</style>
