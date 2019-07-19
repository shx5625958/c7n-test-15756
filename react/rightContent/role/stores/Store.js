import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';

class Store {
    @observable data = [];//用来渲染首页的数据
    @observable isLoading = true;//用来判断是否加载
    @observable levelData = [];//用来通过头部层级获取的数据
    @observable pagination = {
        current: 1,
        pageSize: 10,
        total: '',
    };//用来分页
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

}

const store = new Store();

export default store;
