<template>
    <div class="bg-primary text-white text-center m-2 p-3 h6">
        <slot name="header">
            <h4>Use the form fields to edit the data</h4>
        </slot>
        <div class="form-group m-1 text-left">
            <label>Name</label>
            <input v-model="product.name" class="form-control" />
        </div>
        <div class="form-group m-1 text-left">
            <label>Category</label>
            <input v-model="product.category" class="form-control" />
        </div>
        <div class="form-group m-1 text-left">
            <label>Price</label>
            <input v-model.number="product.price" class="form-control" />
        </div>
        <slot name="footer"></slot>
        <div class="mt-2">
            <button class="btn btn-info" v-on:click="doSubmit">Submit</button>
        </div>
    </div>
</template>


<script>
    export default {
        props: ["initialProduct"],
        data: function () {
            return {
                product: this.initialProduct || {}
            }
        },
        methods: {
            doSubmit() {
                this.$emit("productSubmit", this.product);
            }
        }
    }
</script>
