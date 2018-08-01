<template>
    <div class="bg-dark text-light text-center p-2">
        <div>
            Counter Value: {{ counter }}
        </div>
        <button class="btn btn-secondary" v-on:click="handleClick">
            Increment
        </button>
        <button class="btn btn-secondary" v-on:click="generateError">
            Generate Error
        </button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            counter_base: 0,
            generate_error: false
        }
    },
    created: function() {
        console.log("MessageDisplay: created");
    },
    beforeDestroy: function() {
        console.log("MessageDisplay: beforeDestroy");
    },
    destroyed: function() {
        console.log("MessageDisplay: destroyed");
    },
    methods: {
        handleClick() {
            this.counter_base++;
        },
        generateError() {
            this.generate_error = true;
        }
    },
    computed: {
        counter() {
            if (this.generate_error) {
                throw "My Component Error";
            } else {
                return this.counter_base;
            }
        }
    }
}
</script>
