<template>
    <div v-if="showSearch" class="row my-2">
        <label class="col-2 col-form-label text-right">Search:</label>
        <input class="col form-control" 
            v-bind:value="searchTerm" v-on:input="doSearch"
            placeholder="Enter search term..." />
        <button class="col-1 btn btn-sm btn-secondary mx-4" 
                v-on:click="handleClose">
            Close
        </button>
    </div>
</template>

<script>

import { mapMutations, mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["showSearch", "searchTerm"])
    },
    methods: {
        ...mapMutations(["setShowSearch"]),
        ...mapActions(["clearSearchTerm", "search"]),
        handleClose() {
            this.clearSearchTerm();
            this.setShowSearch(false);
        },
        doSearch($event) {
            this.search($event.target.value);
        }
    }
}
</script>
