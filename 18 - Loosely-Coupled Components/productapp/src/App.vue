<template>
    <div class="container-fluid">
        <div class="text-right m-2">
            <button class="btn btn-primary" v-on:click="toggleColors">
                Toggle Colors
            </button>
        </div>
        <div class="row">
            <div class="col-8 m-3">
                <product-display></product-display>
            </div>
            <div class="col m-3">
                <product-editor></product-editor>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductDisplay from "./components/ProductDisplay";
    import ProductEditor from "./components/ProductEditor";

    export default {
        name: 'App',
        components: { ProductDisplay, ProductEditor },
        data: function () {
            return {
                reactiveColors: {
                    bg: "bg-secondary",
                    text: "text-white"
                }
            }
        },
        provide:  function() {
            return {
                colors: this.reactiveColors,
                labelFormatter: (value) => `Enter ${value}:`                
            }
        },
        methods: {
            toggleColors() {
                if (this.reactiveColors.bg == "bg-secondary") {
                    this.reactiveColors.bg = "bg-light";
                    this.reactiveColors.text = "text-danger";
                } else {
                    this.reactiveColors.bg = "bg-secondary";
                    this.reactiveColors.text = "text-white";
                }
            }
        }
    }
</script>
