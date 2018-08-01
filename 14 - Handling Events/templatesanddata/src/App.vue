<template>
    <div class="container-fluid">
        <div class="bg-primary p-4 text-white h3">
            {{message}}
        </div>
        <input class="form-control bg-light" placeholder="Type here..."
               v-on:keydown.ctrl.exact="handleKey" />
    </div>
</template>

<script>
    export default {
        name: "MyComponent",
        data: function () {
            return {
                message: "Ready"
            }
        },
        methods: {
            handleKey($event) {
                this.message = $event.key;
            }
        }
    }
</script>
