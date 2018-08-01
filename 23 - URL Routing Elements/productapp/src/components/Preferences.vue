<template>
    <div>
        <h4 class="bg-info text-white text-center p-2">Preferences</h4>
        <div class="form-check">
            <input class="form-check-input" type="checkbox"
                   v-bind:checked="primaryEdit" v-on:input="setPrimaryEdit">
            <label class="form-check-label">Primary Color for Edit Buttons</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox"
                   v-bind:checked="dangerDelete" v-on:input="setDangerDelete">
            <label class="form-check-label">Danger Color for Delete Buttons</label>
        </div>
    </div>
</template>

<script>

    import { mapState } from "vuex";

    export default {
        computed: {
            ...mapState({
                primaryEdit: state => state.prefs.primaryEditButton,
                dangerDelete: state => state.prefs.dangerDeleteButton
            })
        },
        methods: {
            setPrimaryEdit() {
                this.$store.commit("prefs/setEditButtonColor", !this.primaryEdit);
            },
            setDangerDelete() {
                this.$store.commit("prefs/setDeleteButtonColor", !this.dangerDelete);
            }
        }
    }
</script>
