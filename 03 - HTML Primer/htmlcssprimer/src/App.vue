<template>
    <div>
        <h4 class="bg-primary text-white text-center p-2">
            Adam's To Do List
        </h4>

        <table class="table table-striped table-bordered table-sm">
            <thead>
                <tr><th>Task</th><th>Done</th></tr>
            </thead>
            <tbody>
                <tr v-for="t in tasks" v-bind:key="t.action">
                    <td>{{t.action}}</td>
                    <td>{{t.done}}</td>
                </tr>
            </tbody>
        </table>

        <div class="form-group m-2">
            <label>New Item:</label>
            <input v-model="newItemText" class="form-control" />
        </div>
        <div class="text-center">
            <button class="btn btn-primary" v-on:click="addNewTodo">
                Add
            </button>
        </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tasks: [{ action: "Buy Flowers", done: false },
                { action: "Get Shoes", done: false },
                { action: "Collect Tickets", done: true },
                { action: "Call Joe", done: false }],
                newItemText: ""
            }
        },
        methods: {
            addNewTodo() {
                this.tasks.push({
                    action: this.newItemText,
                    done: false
                });
                this.newItemText = "";
            }
        }
    }
</script>
