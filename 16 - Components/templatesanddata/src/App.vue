<template>
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
        <product-display v-bind:product="product">
            <div slot-scope="data" class="bg-info text-left">
                {{data.propname}} is {{ data.propvalue }}
            </div>
        </product-display>
        <my-feature v-bind:initial-product="product"
                    v-on:productSubmit="updateProduct">
            <div slot="header" class="bg-warning m-2 p-2 h3 text-dark">
                Product Editor
            </div>
            <div slot="footer" class="bg-warning p-2 h3 text-dark">
                Check Details Before Submitting
            </div>
        </my-feature>
    </div>
</template>

<script>
    import ChildComponent from "./components/Child";
    import ProductDisplay from"./components/ProductDisplay";
    
    export default {
        name: 'App',
        components: {
            MyFeature: ChildComponent,
            ProductDisplay
        },
        data: function () {
            return {
                message: "Ready",
                product: {
                    name: "Kayak",
                    category: "Watersports",
                    price: 275
                }
            }
        },
        methods: {
            updateProduct(newProduct) {
                this.message = JSON.stringify(newProduct);
            }
        }
    }
</script>
