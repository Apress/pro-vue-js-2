<template>
    <div>
        <table class="table table-sm table-striped table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category }}</td>
                    <td>{{ p.price }}</td>
                    <td>
                        <button class="btn btn-sm btn-primary"
                                v-on:click="editProduct(p)">
                            Edit
                        </button>
                        <button class="btn btn-sm btn-danger"
                                v-on:click="deleteProduct(p)">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr v-if="products.length == 0">
                    <td colspan="5" class="text-center">No Data</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button class="btn btn-primary" v-on:click="createNew">
                Create New
            </button>
        </div>
    </div>
</template>

<script>

    import Vue from "vue";

    export default {
        data: function () {
            return {
                products: []
            }
        },
        methods: {
            createNew() {
                this.eventBus.$emit("create");
            },
            editProduct(product) {
                this.eventBus.$emit("edit", product);
            },
            async deleteProduct(product) {
                await this.restDataSource.deleteProduct(product);
                let index = this.products.findIndex(p => p.id == product.id);
                this.products.splice(index, 1);
            },
            processProducts(newProducts) {
                this.products.splice(0);
                this.products.push(...newProducts);
            },
            async processComplete(product) {
                let index = this.products.findIndex(p => p.id == product.id);
                if (index == -1) {
                    await this.restDataSource.saveProduct(product);
                    this.products.push(product);
                } else {
                    await this.restDataSource.updateProduct(product);
                    Vue.set(this.products, index, product);
                }
            }
        },
        inject: ["eventBus", "restDataSource"],
        async created() {
            this.processProducts(await this.restDataSource.getProducts());
            this.eventBus.$on("complete", this.processComplete);
        }
    }
</script>
