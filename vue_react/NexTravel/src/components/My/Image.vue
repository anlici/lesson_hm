<template>
  <div>
    <van-uploader v-model="fileList" multiple :max-count="1" />
    <img v-if="imageUrl" :src="imageUrl" 
    alt="头像预览" style="width: 100px; height: 100px;" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Uploader } from 'vant';
import Cropper from 'cropperjs';

const fileList = ref([]);
const imageUrl = ref(null);

function handleUpload(file) {
  if (file.file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
      cropImage(e.target.result);
    };
    reader.readAsDataURL(file.file);
  }
}

function cropImage(imageUrl) {
  const image = new Image();
  image.src = imageUrl;
  image.onload = () => {
    const cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 2, // 限制用户选择区域
      autoCropArea: 1,
      ready() {
        this.crop();
      },
      crop(event) {
        const croppedCanvas = document.createElement('canvas');
        const canvasContext = croppedCanvas.getContext('2d');
        croppedCanvas.width = event.detail.width;
        croppedCanvas.height = event.detail.height;
        canvasContext.drawImage(
          this.getImage(),
          event.detail.x,
          event.detail.y,
          event.detail.width,
          event.detail.height,
          0,
          0,
          event.detail.width,
          event.detail.height
        );
        imageUrl.value = croppedCanvas.toDataURL('image/jpeg');
      },
    });
  };
}

Uploader.use(handleUpload);
</script>