<template>
    <div>
        <table class="table table-sm table-bordered" v-bind:class="'table-striped' == useStripedTable">
            <tr>
                <th>ID</th><th>Name</th><th>Category</th><th>Price</th><th></th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category }}</td>
                    <td>{{ p.price }}</td>
                    <td>
                        <button class="btn btn-sm"
                                v-bind:class="editClass"
                                v-on:click="editProduct(p)">
                            Edit
                        </button>
                        <button class="btn btn-sm"
                                v-bind:class="deleteClass"
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
            <button class="btn btn-primary" v-on:click="createNew()">
                Create New
            </button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

    export default {
        computed: {
            ...mapState(["products"]),
            ...mapState({
                useStripedTable: state => state.prefs.stripedTable
            }),
            ...mapGetters({
                tableClass: "prefs/tableClass",
                editClass: "prefs/editClass",
                deleteClass: "prefs/deleteClass"
            })
        },
        methods: {
            editProduct(product) {
                this.selectProduct(product);
                this.selectComponent("editor");
            },
            createNew() {
                this.selectProduct();
                this.selectComponent("editor");
            },
            ...mapMutations({
                selectProduct: "selectProduct",
                selectComponent: "nav/selectComponent",
                //editProduct: "selectProduct",
                //createNew: "selectProduct",
                setEditButtonColor: "prefs/setEditButtonColor",
                setDeleteButtonColor: "prefs/setDeleteButtonColor"
            }),
            ...mapActions({
                deleteProduct: "deleteProductAction"
            })
        },
        created() {
            this.setEditButtonColor(false);
            this.setDeleteButtonColor(false);
        }
    }
</script>

