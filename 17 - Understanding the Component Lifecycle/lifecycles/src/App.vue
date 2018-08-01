<template>
    <div class="bg-danger text-white text-center h3 p-2" v-if="error.occurred">
        An Error Has Occurred
        <h4>
            Error : "{{ error.error }}" ({{ error.source }})
        </h4>
    </div>
    <div v-else class="bg-primary text-white m-2 p-2">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="checked" />
            <label>Checkbox</label>
        </div>
        Checked Value: {{ checked }}
        <div class="bg-info p-2" v-if="checked">
            <message-display></message-display>
        </div>
    </div>
</template>

<script>
    import MessageDisplay from "./components/MessageDisplay"

    export default {
        name: 'App',
        components: { MessageDisplay },
        data: function () {
            return {
                checked: true,
                names: [],
                error: {
                    occurred: false,
                    error: "",
                    source: ""
                }
            }
        },
        errorCaptured(error, component, source) {
            this.error.occurred = true;
            this.error.error = error;
            this.error.source = source;
            return false;
        }
    }
</script>
