const HOMEURL = 'http://127.0.0.1:3000/xiaoMi'
export default {

    /**
     * 获取主页的信息
     */
    async getHomeInfo () {
        let res = await fetch(HOMEURL)
        let data = await res.json()
        return data
    }

}