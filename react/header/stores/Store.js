import {action, computed, observable} from 'mobx';
import {axios} from '@choerodon/boot';

class Store {
    @observable personaldata = [];
    @observable isLoading = true;
    @observable subMenusdata = [];

    @action
    setpersonalData(personaldata) {
        this.data = personaldata;
    }

    @action
    setIsLoading(personaldata) {
        this.isLoading = personaldata;
    }
    @computed
    get getpersonalData(){
        return this.personaldata.slice();
    }
    @action
    loadPersonalData(){
        const body={};
        this.isLoading = true;
        axios.get(
            `/iam/v1/users/self`,
            JSON.stringify(body),
        ).then((res)=>{
              this.isLoading=false;
              this.personaldata=res;
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
            this.subMenusdata = res.subMenus[0].subMenus
            console.log(this.subMenusdata)
        })
    }
}
const store = new Store();
export default store;