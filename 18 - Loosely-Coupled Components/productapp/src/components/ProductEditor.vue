<template>

    <div>
        <editor-field label="ID" editorFor="id" />
        <editor-field label="Name" editorFor="name" />
        <editor-field label="Price" editorFor="price" />

        <div class="text-center">
            <button class="btn btn-primary" v-on:click="save">
                {{ editing ? "Save" : "Create" }}
            </button>
            <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
        </div>
    </div>

</template>
<script>

    import EditorField from "./EditorField";
    import Vue from "vue";

    export default {
        data: function () {
            return {
                editing: false,
                product: {
                    id: 0,
                    name: "",
                    price: 0
                },
                localBus: new Vue()
            }
        },
        components: { EditorField },
        methods: {
            startEdit(product) {
                this.editing = true;
                this.product = {
                    id: product.id,
                    name: product.name,
                    price: product.price
                }
            },
            startCreate() {
                this.editing = false;
                this.product = {
                    id: 0,
                    name: "",
                    price: 0
                };
            },
            save() {
                this.eventBus.$emit("complete", this.product);
                this.startCreate();
                console.log(`Edit Complete: ${JSON.stringify(this.product)}`);
            },
            cancel() {
                this.product = {};
                this.editing = false;
            }
        },
        inject: ["eventBus"],
        provide: function () {
            return {
                editingEventBus: this.localBus
            }
        },
        created() {
            this.eventBus.$on("create", this.startCreate);
            this.eventBus.$on("edit", this.startEdit);
            this.localBus.$on("change",
                (change) => this.product[change.name] = change.value);
        },
        watch: {
            product(newValue, oldValue) {
                this.localBus.$emit("target", newValue);
            }
        }
    }
</script>
