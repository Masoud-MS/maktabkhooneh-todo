import {observable, action} from "mobx";

class TodoModel {
    store;
    id;
    @observable title;
    @observable completed;

    constructor(store, title, completed, id){
        this.id=id;
        this.title=title;
        this.completed=completed;
        this.store=store;
    }

    @action
    toggle() {
        this.completed = !this.completed
    }
}

export default TodoModel