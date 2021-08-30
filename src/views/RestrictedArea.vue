<template>
    <div class="restricted-area">
        <Navdrawer @changeTab="changedTab($event)"></Navdrawer>
        <EmployeesTab v-if="activeTab == 'Funcionários'"></EmployeesTab>
        <PacientsTab v-if="activeTab == 'Pacientes'"></PacientsTab>
        <SchedulesTab v-if="activeTab == 'Agendamentos'"></SchedulesTab>
        <AddressesTab v-if="activeTab == 'Endereços'"></AddressesTab>
    </div>
</template>

<script>
import Navdrawer from '@/components/Navdrawer'
import EmployeesTab from '@/views/RestrictedAreaTabs/Employees'
import PacientsTab from '@/views/RestrictedAreaTabs/Pacients'
import SchedulesTab from '@/views/RestrictedAreaTabs/Schedules'
import AddressesTab from '@/views/RestrictedAreaTabs/Addresses'
export default {
    components: { Navdrawer, EmployeesTab, PacientsTab, SchedulesTab, AddressesTab },
    methods: {
        changedTab(activeTab) {
            this.activeTab = activeTab;
        }
    },
    data() {
        return {
            activeTab: "Funcionários"      
        }
    }
}
</script>