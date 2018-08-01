<template>
    <div class="m-2">
        <numbers />
        <subtraction />
        <maths operation="Divide" firstVal="10"  secondVal="20" />
    </div>
</template>

<script>

import Numbers from "./components/Numbers";
import Subtraction from "./components/Subtraction";


export default {
    name: 'App',
    components: { Numbers, Subtraction }
}
</script>
