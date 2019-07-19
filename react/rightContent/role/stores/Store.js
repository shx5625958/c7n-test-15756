import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';

class Store {
    @observable data = [];//用来渲染首页的数据
    @observable isLoading = true;//用来判断是否加载
    @observable levelData = [];//用来通过头部层级获取的数据
    @observable createtitle = "全局层";
    @observable createSubMenusdata = []
    @observable tabCode="site";
    @observable createTab = [];
    @observable pagination = {
        current: 1,
        pageSize: 10,
        total: '',
    };//用来分页
    @action
    setcreateSubMenusdata(data){
        this.createSubMenusdata=data
    }
    @computed
    get getcreateSubMenusdata(){
        return this.createSubMenusdata
    }
    @action
    settabCode(data){
        this.tabCode=data
    }
    @computed
    get gettabCode(){
        return this.tabCode
    }
    @action
    setcreateTab(data){
        this.createTab = data;
    }
    @computed
    get getcreateTab(){
        return this.createTab.slice()
    }    @action
    setcreatetitle(data){
        this.createtitle = data;
    }
    @computed
    get getcreatetitle(){
        return this.createtitle;
    }
    @action
    setlevelData(data){
        this.levelData = data;
    }
    @computed
    get getlevelData(){
          return this.levelData.slice();
    }
    @action
    setData(data) {
        this.data = data;
    }

    @action
    setIsLoading(data) {
        this.isLoading = data;
    }

    @computed
    get getData() {
        return this.data.slice();
    }


    @action
    loadData(page = this.pagination.current, size = this.pagination.pageSize) {
        const body = {};
        const sorter = [];
        this.isLoading = true;
        axios.post(
            `/iam/v1/roles/search?page=${page}&size=${size}&sort=${sorter.join(',')}`,
            JSON.stringify(body),
        )
            .then((res) => {
                this.isLoading = false;
                this.data = res.list;
                this.pagination = {
                    current: res.pageNum,
                    pageSize: res.pageSize,
                    total: res.total,
                };
            });
    }
    @action
    loadLevelData(level){
        const Levelpage = this.pagination.current;
        const Levelsize = this.pagination.pageSize;
        const body = {};
        const sorter = [];
        this.isLoading = true;
        axios.post(
            `/iam/v1/roles/search?page=${Levelpage}&size=${Levelsize}&sort=${sorter.join(',')}`,
            {
                level:level
            }
            )
            .then((res) => {
                    console.log(res)
                this.isLoading = false;
                this.data = res.list;
                this.pagination = {
                    current: res.pageNum,
                    pageSize: res.pageSize,
                    total: res.total,
                };
            });
    }
    @action
    loadcreateTab(){
        console.log("我要开始加载创建用户界面的tub菜单数据了奥")
        axios.get(`http://api.staging.saas.hand-china.com/iam/v1/menus/menu_config?code=choerodon.code.top.${this.tabCode}`)
            .then((res)=>{
                console.log(this.tabCode)
                console.log(res)
                const json = JSON.parse(JSON.stringify(res).replace(/subMenus/g,"children"));
                const json1 = JSON.parse(JSON.stringify(json).replace(/id/g,"key"));
                this.setcreateTab(json1.children)

            })
    }
    @action
    loadSubMenusData(){
        const body={};
        axios.get(
            `/iam/v1/menus?code=choerodon.code.top.user&source_id=0`,
            JSON.stringify(body),
        ).then((res)=>{
            // console.log(res.subMenus[0].subMenus)
            const json =JSON.parse(JSON.stringify(res.subMenus).replace(/subMenus/g,"children"));
            const json1 = JSON.parse(JSON.stringify(json).replace(/id/g,"key"));
            this.setcreateSubMenusdata(json1)
        })
    }
}

const store = new Store();

export default store;
