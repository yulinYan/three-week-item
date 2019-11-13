const HOMEURL = 'http://10.35.167.54:3000/xiaoMi'
// 192.168.0.114
// 101.200.219.118
// 10.35.167.54
export default {

    /**
     * 获取主页的信息
     */
    async getHomeInfo () {
        let res = await fetch(HOMEURL)
        let data = await res.json()
        return data
    },


}