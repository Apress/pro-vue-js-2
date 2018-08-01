<template>
    <div class="container-fluid">

        <div class="bg-danger text-white my-2 p-2" v-if="errors">
            <h5>The following problems have been found:</h5>
            <ul>
                <template v-for="(errors) in validationErrors">
                    <li v-for="error in errors" v-bind:key="error">{{error}}</li>
                </template>
            </ul>
        </div>

        <form v-on:submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="name" class="form-control" />
            </div>
            <div class="form-group">
                <label>Category</label>
                <input v-model="category" class="form-control" />
            </div>
            <div class="form-group">
                <label>Price</label>
                <input type="number" v-model.number="price" class="form-control" />
            </div>

            <div class="text-center">
                <button class="btn btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>
<script>

    import validation from "./validationRules";
    import Vue from "vue";

    export default {
        name: "MyComponent",
        data: function () {
            return {
                name: "",
                category: "",
                price: 0,
                validationErrors: {},
                hasSubmitted: false                
            }
        },
        watch: {
            name(value) { this.validateWatch("name", value) },
            category(value) { this.validateWatch("category", value) },
            price(value) { this. validateWatch("price", value) }
        },
        computed: {
            errors() {
                return Object.values(this.validationErrors).length > 0;
            }
        },
        methods: {
            validateWatch(propertyName, value) {
                if (this.hasSubmitted) {
                    this.validate(propertyName, value);
                }
            },
            validate(propertyName, value) {
                let errors = [];
                Object(validation)[propertyName].forEach(v => {
                    if (!v.validator(value)) {
                        errors.push(v.message);
                    }
                });
                if (errors.length > 0) {
                    Vue.set(this.validationErrors, propertyName, errors);
                } else {
                    Vue.delete(this.validationErrors, propertyName);                    
                }
            },
            validateAll() {
                this.validate("name", this.name);
                this.validate("category", this.category);
                this.validate("price", this.price);
                return this.errors;
            },
            handleSubmit() {
                this.hasSubmitted = true;                
                if (this.validateAll()) {
                    console.log(`FORM SUBMITTED: ${this.name} ${this.category} `
                        + ` ${this.price}`);
                }
            }
        }
    }
</script>
