<template>

    <div>
        <h3 class="btn-primary text-center text-white p-2">
            {{ editing ? "Edit" : "Create"}}
        </h3>
        <div class="form-group">
            <label>ID</label>
            <input class="form-control" v-model="product.id" />
        </div>
        <div class="form-group">
            <label>Name</label>
            <input class="form-control" v-model="product.name" />
        </div>
        <div class="form-group">
            <label>Category</label>
            <input class="form-control" v-model="product.category" />
        </div>
        <div class="form-group">
            <label>Price</label>
            <input class="form-control" v-model.number="product.price" />
        </div>
        <div class="text-center">

            <button class="btn btn-primary" v-on:click="save">
                {{ editing ? "Save" : "Create" }}
            </button>
            <router-link to="{name: 'table'}" class="btn btn-secondary">
                Cancel
            </router-link>

            <router-link v-if="editing" v-bind:to="nextUrl" class="btn btn-info">
                Next
            </router-link>
        </div>
    </div>

</template>

<script>

    let unwatcher;

    export default {
        data: function () {
            return {
                editing: false,
                product: {}
            }
        },
        computed: {
            nextUrl() {
                if (this.product.id != null && this.$store.state.products != null) {
                    let index = this.$store.state.products
                        .findIndex(p => p.id == this.product.id);
                    let target = index < this.$store.state.products.length - 1 
                        ? index + 1 : 0
                    return `/edit/${this.$store.state.products[target].id}`;
                }
                return "/edit";
            }
        },
        methods: {
            async save() {
                await this.$store.dispatch("saveProductAction", this.product);
                this.$router.push({name: "table"});
                this.product = {};
            },
            selectProduct(route) {
                if (route.params.op == "create") {
                    this.editing = false;
                    this.product = {};
                } else {
                    let productId = route.params.id;
                    let selectedProduct
                        = this.$store.state.products.find(p => p.id == productId);
                    this.product = {};
                    Object.assign(this.product, selectedProduct);
                    this.editing = true;
                }
            }
        },
        created() {
            unwatcher = this.$store.watch(state => state.products,
                () => this.selectProduct(this.$route));
            this.selectProduct(this.$route);
        },
        beforeDestroy() {
            unwatcher();
        },
        beforeRouteUpdate(to, from, next) {
            this.selectProduct(to);
            next();
        }
    }
</script>
