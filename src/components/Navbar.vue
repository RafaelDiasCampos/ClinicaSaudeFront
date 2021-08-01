<template>
    <nav>
        <v-toolbar flat>
            <v-toolbar-title class="pr-10">
                <div class="d-flex flex-no-wrap justify-space-between">
                    <span class="font-weight-light">Clínica</span>
                    <span class="font-weight-dark">Saúde</span>  
                    <v-img :src="require('../assets/logo-icon.png')" height="35px" width="35px" class="ml-3" contain center></v-img>  
                </div>      
            </v-toolbar-title>
            
            <v-btn v-for="page in pages" :key="page.route" router :to="page.route" text color="secondary">
                <span>{{ page.title }}</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="!isLoggedIn" router :to="'/login'" text color="secondary">
                <span>Entrar</span>
                <v-icon right color="primary">mdi-exit-to-app</v-icon>
            </v-btn>
            <v-btn v-if="isLoggedIn" router :to="'/profile'" text color="secondary">
                <span>Meu Perfil</span>
                <v-icon right color="primary">mdi-account</v-icon>
            </v-btn>
        </v-toolbar>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {title: "Home", route: "/"},
                {title: "Galeria", route: "/gallery"},
                {title: "Agendamento", route: "/agendamento"},
                {title: "Cadastro de Endereço", route: "/register-address"}
            ],
            isLoggedIn: true
        }
    }
    
}
</script>