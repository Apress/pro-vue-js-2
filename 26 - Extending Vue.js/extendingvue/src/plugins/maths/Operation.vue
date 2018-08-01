<template>
    <div class="mx-5 p-2 border border-dark">
        <h3 class="bg-info text-white text-center p-2">{{ operation }}</h3>

        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <input class="form-control" v-model.number="first" />
                </div>
                <div class="col-1 h3">{{ symbol }}</div>
                <div class="col">
                    <input class="form-control" v-model.number="second" />
                </div>
                <div class="col h3" v-borderize="total > 25">= {{ total }}</div>
            </div>
        </div>
    </div>
</template>

<script>

import Vue from "vue";

export default {
        props: ["firstVal", "secondVal", "operation"],
        data: function () {
            return {
                first: Number(this.firstVal),
                second: Number(this.secondVal)
            }
        },
        computed: {
            symbol() {
                return Vue.getSymbol(this.operation);
            },
            total() {
                switch (this.operation.toLowerCase()) {
                    case "add":
                        return this.$calc.add(this.first, this.second);
                    case "subtract":
                        return this.$calc.subtract(this.first, this.second);
                    case "multiply":
                        return this.$calc.multiply(this.first, this.second);
                    case "divide":
                        return this.$calc.divide(this.first, this.second);
                }
            }
        }
}
</script>
