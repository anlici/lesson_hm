const uploadLargeFile = async (file) => {
    const chunkSize = 1024 * 1024; // 每块大小 1MB
    const chunks = Math.ceil(file.size / chunkSize); // 计算分块数量

    const uploadPromises = [];
    for (let i = 0; i < chunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const chunk = file.slice(start, end); 

        const formData = new FormData();
        formData.append('file', chunk, file.name);
        formData.append('chunkIndex', i);
        formData.append('totalChunks', chunks);

          // 异步上传每个分块
          uploadPromises.push(
            fetch('/upload', {
                method: 'POST',
                body: formData,
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to upload chunk ${i}: ${response.statusText}`);
                }
                console.log(`Chunk ${i} uploaded successfully`);
            })
        );
    }
    // 等待所有分块上传完成
    await Promise.all(uploadPromises);
    console.log('File uploaded successfully');

}