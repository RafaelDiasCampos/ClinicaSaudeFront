<template>
    <div class="restricted-area">
        <Navdrawer></Navdrawer>
        <EmployeesTab></EmployeesTab>
    </div>
</template>

<script>
import Navdrawer from '@/components/Navdrawer'
import EmployeesTab from '@/views/RestrictedAreaTabs/Employees'
export default {
    components: { Navdrawer, EmployeesTab },
    data() {
        return {            
        }
    }
}
</script>