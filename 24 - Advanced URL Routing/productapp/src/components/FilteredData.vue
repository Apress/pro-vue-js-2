<template>
    <div>
        <h3 class="bg-primary text-center text-white p-2">
            Data for {{ category }}
        </h3>

        <div class="text-center m-2">
            <label>Category:</label>
            <select v-model="category">
                <option>All</option>
                <option>Watersports</option>
                <option>Soccer</option>
                <option>Chess</option>
            </select>
        </div>

        <h3 v-if="loading" class="bg-info text-white text-center p-2">
            Loading Data...
        </h3>

        <table v-else class="table table-sm table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
            <tbody>
                <tr v-for="p in data" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category }}</td>
                    <td>{{ p.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import Axios from "axios";

    const baseUrl = "http://localhost:3500/products/";

    export default {
        data: function () {
            return {
                loading: true,
                data: [],
                category: "All"
            }
        },
        methods: {
            async getData(route) {
                if (route.params != null && route.params.category != null) {
                    this.category = route.params.category;
                } else {
                    this.category = "All";
                }
                let url = baseUrl 
                    + (this.category == "All" ? "" : `?category=${this.category}`);
                this.data.push(...(await Axios.get(url)).data);
                this.loading = false;
            }
        },
        watch: {
            category() {
                this.$router.push(`/filter/${this.category}`);
            }
        },
        async beforeRouteEnter(to, from, next) {
            if (to.params.category != "All") {
                next("/filter/All");
            } else {
                next(async component => {
                    component.$store.commit("setComponentLoading", false);
                    await component.getData(to)
                });
            }
        },
        async beforeRouteUpdate(to, from, next) {
            this.data.splice(0, this.data.length);
            await this.getData(to);
            next();
        }
    }
</script>
