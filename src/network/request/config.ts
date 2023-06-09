// 区分判断环境
let BASE_URL = ''
const TIME_OUT = 10000
// http://123.207.32.32:8000/home/multidata
if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
  BASE_URL = '/api'
  // BASE_URL = 'http://152.136.185.210:5000'
  // BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://124.220.210.84:3000'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http://124.220.210.84:3000'
}

export { BASE_URL, TIME_OUT }
