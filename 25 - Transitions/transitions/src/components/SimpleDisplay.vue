<template>
    <div class="mx-5 border border-dark p-2">
        <h3 class="bg-warning text-white text-center p-2">Display</h3>

        <transition enter-active-class="fadeIn" 
                    leave-active-class="fadeOut" mode="out-in">
                <div v-if="show" class="animated h4 bg-info text-center p-2"
                        key="hello">
                    Hello, Adam
                </div>
                <div v-else class="animated h4 bg-success text-center p-2"
                        key="goodbye">
                    Goodbye, Adam
                </div>
        </transition>

        <div class="text-center">
            <button class="btn btn-primary" v-on:click="toggle">
                Toggle Visibility
            </button>
        </div>
    </div>
</template>

<script>

    export default {
        data: function () {
            return {
                show: true
            }
        },
        methods: {
            toggle() {
                this.show = !this.show;
            }
        }
    }

</script>
