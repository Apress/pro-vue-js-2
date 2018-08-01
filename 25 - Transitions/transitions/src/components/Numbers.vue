<template>
    <div class="mx-5 p-2 border border-dark">
        <h3 class="bg-success text-white text-center p-2">Numbers</h3>

        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <input class="form-control" v-model.number="first" />
                </div>
                <div class="col-1 h3">+</div>
                <div class="col">
                    <input class="form-control" v-model.number="second" />
                </div>
                <div id="total" class="col h3">= {{ displayTotal }} </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { tween } from "popmotion";

    export default {
        data: function () {
            return {
                first: 10,
                second: 20,
                displayTotal: 30
            }
        },
        computed: {
            total() {
                return this.first + this.second;
            }
        },
        watch: {
            total(newVal, oldVal) {
                let classes = ["animated", "fadeIn"]
                let totalElem = this.$el.querySelector("#total");
                totalElem.classList.add(...classes);
                let t = tween({
                    from: Number(oldVal),
                    to: Number(newVal),
                    duration: 250
                });
                t.start({
                    update: (val) => this.displayTotal = val.toFixed(0),
                    complete: () => totalElem.classList.remove(...classes)
                });
            }
        }
    }
</script>
