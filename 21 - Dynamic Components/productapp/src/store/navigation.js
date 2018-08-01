export default {
    namespaced: true,
    state: {
        selected: "table"
    }
    ,
    mutations: {
        selectComponent(currentState, selection) {
            currentState.selected = selection;
        }
     }
}
