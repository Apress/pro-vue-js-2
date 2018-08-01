<template>
    <div v-if="error" class="bg-danger text-white text-center p-3 h3">
        An Error Has Occurred
        <h6>{{ message }}</h6>
        <a href="/" class="btn btn-secondary">OK</a>
    </div>
</template>

<script>

export default {
    data: function () {
        return {
            error: false,
            message: ""
        }
    },
    methods: {
        handleError(err) {
            this.error = true;
            this.message = err;
        }
    },
    inject: ["eventBus"],
    created() {
        this.eventBus.$on("httpError", this.handleError);
    }    
}
</script>
