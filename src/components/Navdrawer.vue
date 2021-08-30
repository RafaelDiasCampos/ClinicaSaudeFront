<template>
    <div>
        <v-navigation-drawer permanent app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Área Restrita</v-list-item-title>
                </v-list-item-content>                
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
            <v-list-item v-for="item in items" :key="item.title" link :class="item.isActive ? 'v-btn--active' : ''" @click="setActive(item)">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>        
    </div>
</template>

<script>
export default {
    methods: {
        setActive(item) {
            for (let item of this.items) {
                item.isActive = false;
            }
            item.isActive = true;
            this.$emit('changeTab', item.title);
        }
    },
    data() {
        return {
            items: [
                {title: "Funcionários", icon: "mdi-account", isActive: true},
                {title: "Pacientes", icon: "mdi-account-clock", isActive: false},
                {title: "Agendamentos", icon: "mdi-clock", isActive: false},
                {title: "Endereços", icon: "mdi-map-marker", isActive: false}
            ]
        }
    }
    
}
</script>