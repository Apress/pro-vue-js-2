<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col text-center m-2">
                <div class="btn-group">
                    <router-link tag="button" to="/products"
                                 active-class="btn-info" class="btn btn-primary">
                        Products
                    </router-link>
                    <router-link tag="button" to="/preferences"
                                 active-class="btn-info" class="btn btn-primary">
                        Preferences
                    </router-link>
                    <router-link to="/named/tableleft" class="btn btn-primary"
                                 active-class="btn-info">
                        Table Left
                    </router-link>
                    <router-link to="/named/tableright" class="btn btn-primary"
                                 active-class="btn-info">
                        Table Right
                    </router-link>
                    <router-link to="/filter/All" class="btn btn-primary" 
                                active-class="btn-info">
                        Filtered Data
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col m-2">
                <h3 class="bg-warning text-white text-center p-2"
                        v-if="componentLoading">
                    Loading Component...
                </h3>                
                <router-view v-show="!componentLoading"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: 'App',
        computed: {
            ...mapState(["componentLoading"]),            
        },
        created() {
            this.$store.dispatch("getProductsAction");
        }
    }
</script>
