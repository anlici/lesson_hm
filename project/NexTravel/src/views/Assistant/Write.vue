<template>
  <div class="write-container">
    <van-nav-bar
      title="行程安排"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="itinerary"
        type="textarea"
        placeholder="请输入您的行程安排"
        rows="3"
        autosize
      />
      <div style="margin: 16px;">
        <van-button plain type="success" block native-type="submit">提交</van-button>
      </div>
    </van-form>
    
    <div v-if="itineraryRecord" class="record-container">
      <van-cell-group inset>
        <van-cell title="历史记录" />
        <van-cell>
          <!-- v-slot:title 具名插槽 -->
          <template #title>
            <div class="record-content">
              <p>{{ itineraryRecord.content }}</p>
              <p class="record-time">创建时间：{{ itineraryRecord.time }}</p>
            </div>
          </template>
          <template #right-icon>
            <div class="button-group">
              <!-- plain 布尔类型，控制按钮是否镂空 -->
              <van-button size="small" type="primary" plain style="margin-right: 8px" @click="editRecord">编辑</van-button>
              <van-button size="small" type="danger" plain @click="deleteRecord">删除</van-button>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { showToast, showDialog } from 'vant';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const itinerary = ref('');
    const itineraryRecord = ref(null);

    const onClickLeft = () => {
      router.back();
    };

    const onSubmit = () => {
      if (itinerary.value.trim() === '') {
        showToast('请输入行程安排');
        return;
      }
      
      itineraryRecord.value = {
        content: itinerary.value,
        time: new Date().toLocaleString('zh-CN') // 获取当前日期和时间
      };
      
      showToast('提交成功');
      itinerary.value = '';
    };

    const editRecord = () => {
      if (itineraryRecord.value) {
        itinerary.value = itineraryRecord.value.content;
        showToast('已加载到编辑框，请修改后提交');
      }
    };

    const deleteRecord = () => {
      if (itineraryRecord.value) {
        showDialog({
          
          message: '是否确认删除该条记录？',
          showCancelButton: true,
          confirmButtonText: '确认',
          cancelButtonText: '取消',
        })
          .then(() => {
            itineraryRecord.value = null;
            showToast('删除成功');
          })
          .catch(() => {
            showToast('已取消删除');
          });
      }
    };

    return {
      itinerary,
      itineraryRecord,
      onSubmit,
      onClickLeft,
      editRecord,
      deleteRecord
    };
  },
};
</script>

<style scoped>
.write-container {
  height: 100vh;
  background-color: #f7f8fa;
}

.record-container {
  margin-top: 20px;
}

.record-content {
  white-space: pre-wrap;
}

.record-time {
  font-size: 12px;
  color: #999;
  margin-top: 8px;
}

.button-group {
  display: flex;
  align-items: center;
}
</style>