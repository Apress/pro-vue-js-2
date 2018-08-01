<template>
    <div class="container-fluid">
        <div class="row my-2" v-for="c in categories" v-bind:key="c">
            <button class="btn btn-block"
                    v-on:click="setCurrentCategory(c)"
                    v-bind:class="c == currentCategory 
                        ? 'btn-primary' : 'btn-secondary'">
                {{ c }}
            </button>
        </div> 
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations} from "vuex";

    export default {
        computed: {
            ...mapState(["currentCategory"]),
            ...mapGetters(["categories"])
        },
        methods: {
            ...mapMutations(["setCurrentCategory"])
        }
    }
</script>
