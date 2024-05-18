const AK = "CK4MV4URbPiXBzzs5rmrPqk0"
const SK = "hsINgEbXFGfN0Kz85yGLX0r2nEM5HH4T"

function getAccessToken() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK,
      method: 'POST', // 请求方法
      header: { // 设置请求的头部信息
        'Content-Type': 'application/json' // 默认值
      },
      success: function (res) {
        // 请求成功的回调函数
        resolve(res.data.access_token);
      },
      fail: function (err) {
        // 请求失败的回调函数
        reject(err);
      }
    });
  });
}

export async function accessTokenGet() {
  try {
    const accessToken = await getAccessToken();
    return accessToken
  } catch (error) {
    console.error(error);
  }
}