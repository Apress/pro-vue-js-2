<template>
    <div class="bg-primary text-white text-center m-2 p-3">
        <h3>Product: {{ name }}</h3>
        <h4>Price: {{ getTotalPrice(lowTaxRate) | currency }} (Low Rate)</h4>
        <h4>Price: {{ getTotalPrice(highTaxRate) | currency }} (High Rate)</h4>
    </div>
</template>

<script>
    export default {
        name: "MyComponent",
        data: function () {
            return {
                name: "Kayak",
                price: 275,
                lowTaxRate: 12,
                highTaxRate: 20
            }
        },
        methods: {
            getTotalPrice(taxRate) {
                return this.price + (this.price * (taxRate / 100));
            }
        },
        filters: {
            currency(value) {
                return new Intl.NumberFormat("en-US",
                    { style: "currency", currency: "USD" }).format(value);
            }
        }
    }
</script>
