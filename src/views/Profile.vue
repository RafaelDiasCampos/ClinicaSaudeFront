<template>
  <div class="profile">
    <v-container fluid fill-height justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-card>
          <v-card-title>
            <span class="text-h5">Novo Funcionário</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    label="Nome"
                    v-model="$store.state.user.nome"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                  <v-text-field
                    label="E-mail"
                    v-model="$store.state.user.email"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-checkbox
                    label="Médico"
                    v-model="$store.state.user.isMedico"
                    disabled
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Telefone"
                    v-model="$store.state.user.telefone"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="CEP"
                    v-model="$store.state.user.cep"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Logradouro"
                    v-model="$store.state.user.logradouro"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Bairro"
                    v-model="$store.state.user.bairro"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                  <v-text-field
                    label="Cidade"
                    v-model="$store.state.user.cidade"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="UF"
                    v-model="$store.state.user.estado"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-menu
                    ref="menu"
                    :close-on-content-click="true"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="$store.state.user.datacontrato"
                        label="Data de Início"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        disabled
                      ></v-text-field>
                    </template>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Salário"
                    v-model="$store.state.user.salario"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col
                  v-if="$store.state.user.isMedico"
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    label="Especialidade"
                    v-model="$store.state.user.especialidade"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col
                  v-if="$store.state.user.isMedico"
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    label="CRM"
                    v-model="$store.state.user.crm"
                    shaped
                    outlined
                    disabled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>