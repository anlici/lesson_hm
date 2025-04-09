function polling(url,callback,interval=1000) {
    let timer;
    const fetchData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                callback(data)
            })
    }
    const startPolling = () => {
        fetchData() // 第一次执行
        timer = setInterval(fetchData,interval) // 
    }
    const stopPolling = () => {
        clearInterval(timer)
    }
    return {startPolling,stopPolling}
}

