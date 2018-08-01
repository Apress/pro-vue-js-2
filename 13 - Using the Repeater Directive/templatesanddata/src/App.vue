<template>
    <div class="container-fluid">
        <h2 class="bg-primary text-white text-center p-3">Products</h2>
        <table class="table table-sm table-bordered  text-left">
            <tr><th>Name</th><th>Price</th></tr>
            <tbody>
                <tr v-for="p in pageItems" v-bind:key="p.name">
                    <td>{{ p.name }}</td>
                    <td>{{ p. price | currency }}</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button class="btn btn-secondary m-1" v-on:click="toggleSort"
                    v-bind:class="{'bg-primary': sort}">
                Toggle Sort
            </button>
            <button class="btn btn-secondary m-1" v-on:click="toggleFilter"
                    v-bind:class="{'bg-primary': filter}">
                Toggle Filter
            </button>
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <button v-for="i in pageCount" v-on:click="selectPage(i)"
                    class="btn btn-secondary m-1"
                    v-bind:class="{'bg-primary': currentPage == i}">
                {{ i }}
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "MyComponent",
        data: function () {
            return {
                pageSize: 3,
                currentPage: 1,
                filter: false,
                sort: false,
                products: [
                    { name: "Kayak", price: 275 },
                    { name: "Lifejacket", price: 48.95 },
                    { name: "Soccer Ball", price: 19.50 },
                    { name: "Corner Flags", price: 39.95 },
                    { name: "Stadium", price: 79500 },
                    { name: "Thinking Cap", price: 16 },
                    { name: "Unsteady Chair", price: 29.95 },
                    { name: "Human Chess Board", price: 75 },
                    { name: "Bling Bling King", price: 1200 }
                ]
            }
        },
        computed: {
            pageCount() {
                return Math.ceil(this.dataItems.length / this.pageSize);
            },
            pageItems() {
                let start = (this.currentPage - 1) * this.pageSize;
                return this.dataItems.slice(start, start + this.pageSize);
            },
            dataItems() {
                let data = this.filter 
                    ? this.products.filter(p => p.price > 100) : this.products;
                return this.sort 
                    ? data.concat().sort((p1, p2) => p2.price - p1.price) : data;
            }
        },
        filters: {
            currency(value) {
                return new Intl.NumberFormat("en-US",
                    { style: "currency", currency: "USD", }).format(value);
            },
        },
        methods: {
            selectPage(page) {
                this.currentPage = page;
            },
            toggleFilter() {
                this.filter = !this.filter
                this.currentPage = 1;
            },
            toggleSort() {
                this.sort = !this.sort;
                this.currentPage = 1;
            }
        }
    }
</script>
