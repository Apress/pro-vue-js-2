<template>
    <div class="container-fluid text-center">
        <div class="bg-primary text-white m-2 p-3">
            <h3 v-bind:text-content.prop="textContent"></h3>
        </div>
        <button v-on:click="handleClick" class="btn btn-primary">
            Press Me
        </button>
    </div>
</template>

<script>
    export default {
        name: "MyComponent",
        data: function () {
            return {
                name: "Lifejacket",
                highlight: false,
            }
        },
        computed: {
            textContent() {
                return this.highlight ? "Highlight!" : `Product: ${this.name}`;
            }
        },
        methods: {
            handleClick() {
                this.highlight = !this.highlight;
            }
        }
    }
</script>
