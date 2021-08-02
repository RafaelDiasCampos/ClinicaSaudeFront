<template>
  <div class="restricted-area-tab">
    <v-container>
      <v-data-table :headers="headers" :items="data">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-divider class="mx-4" vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogNew" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Novo Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span v-if="editedIndex == -1" class="text-h5">Novo Funcionário</span>
                  <span v-if="editedIndex >= 0" class="text-h5">Editar Funcionário</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field label="Nome" v-model="editedItem.nome" shaped outlined></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                      <v-text-field label="E-mail" v-model="editedItem.email" shaped outlined></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-checkbox label="Médico" v-model="editedItem.isMedico"></v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                      <v-text-field label="Senha" v-model="editedItem.senha" shaped outlined></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                      <v-text-field label="Telefone" v-model="editedItem.telefone" shaped outlined></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                      <v-text-field label="CEP" v-model="editedItem.cep" shaped outlined></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                      <v-text-field label="Logradouro" v-model="editedItem.logradouro" shaped outlined></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Bairro" v-model="editedItem.bairro" shaped outlined></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="2">
                      <v-text-field label="UF" v-model="editedItem.estado" shaped outlined></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                      <v-menu
                  ref="menu"
                  v-model="dateMenu"
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="editedItem.dataInicio"
                      label="Data de Início"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.dataInicio"
                    :active-picker.sync="dateActivePicker"
                    :min="new Date(Date.now()).toISOString().substr(0, 10)"
                  ></v-date-picker>
                </v-menu>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                      <v-text-field label="Salário" v-model="editedItem.salario" shaped outlined></v-text-field>
                      </v-col>           
                      <v-col v-if="editedItem.isMedico" cols="12" sm="6" md="6">
                        <v-autocomplete
                  v-model="editedItem.especialidade"
                  :items="especialidades"
                  prepend-icon="mdi-format-list-bulleted-type"
                  label="Especialidade"
                ></v-autocomplete>
                      </v-col>
                      <v-col v-if="editedItem.isMedico" cols="12" sm="6" md="6">
                      <v-text-field label="CRM" v-model="editedItem.crm" shaped outlined></v-text-field>
                      </v-col>  
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Salvar </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Tem certeza que deseja apagar este item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancelar</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >Confirmar</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["config"],
  methods: {
    initialize () {

    },
    editItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogNew = true
      },

      deleteItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.data.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialogNew = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.data[this.editedIndex], this.editedItem)
        } else {
          this.data.push(this.editedItem)
        }
        this.close()
      },
  },
  data() {
    return {
      dateMenu: false,
      dateActivePicker: null,
      dialogNew: false,
      dialogDelete: false,
      title: "Funcionários",
      formTitle: "Novo Funcionário",
      headers: [
        {
          text: "Nome",
          value: "nome",
        },
        {
          text: "E-mail",
          value: "email",
        },
        {
          text: "Telefone",
          value: "telefone",
        },
        {
          text: "CEP",
          value: "cep",
        },
        {
          text: "Logradouro",
          value: "logradouro",
        },
        {
          text: "Bairro",
          value: "bairro",
        },
        {
          text: "Estado",
          value: "estado",
        },
        {
          text: "Data de Início",
          value: "dataInicio",
        },
        {
          text: "Salário",
          value: "salario",
        },
        {
          text: "Senha",
          value: "senha",
        },
        {
          text: "Ações",
          value: "actions"
        }
      ],
      data: [
        {
          nome: "Abc",
          email: "Def",
          telefone: "Ghi",
          cep: "123",
          logradouro: "Abc",
          bairro: "Def",
          estado: "AM",
          dataInicio: new Date(Date.now()).toISOString().substr(0, 10),
          salario: "3000",
          senha: "abcd123",
          isMedico: true,
          especialidade: "ABC",          
          crm: "1234",
        },
      ],
      editedItem: {
        nome: "",
        email: "",
        telefone: "",
        cep: "",
        logradouro: "",
        bairro: "",
        estado: "",
        dataInicio: new Date(Date.now()).toISOString().substr(0, 10),
        salario: "",
        senha: "",
        isMedico: false,
        especialidade: "",          
        crm: "",
      },
      editedIndex: -1,
      especialidades: ["abc", "123"]
    };
  },
};
</script>