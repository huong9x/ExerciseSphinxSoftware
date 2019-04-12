const req = http.request({
    host: '127.0.0.1',
    port: 8080,
    method: 'POST'
  }, (res) => {
    res.resume();
    res.on('end', () => {
      if (!res.complete)
        console.error(
          'kết nối bị ngắt trong khi vẫn đang gửi');
    });
  });