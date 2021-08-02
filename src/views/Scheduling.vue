<template>
  <div class="scheduling">
    <v-container fluid fill-height justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar flat>
          <v-toolbar-title><h4>Agendamento de Consultas</h4></v-toolbar-title>
        </v-toolbar>
        <v-card flat>
          <v-card-text class="pt-4">
            <div>
              <v-form>
                <v-autocomplete
                  v-model="fields.especialidade.data"
                  :items="fields.especialidade.items"
                  prepend-icon="mdi-format-list-bulleted-type"
                  label="Especialidade"
                  @change="specialtyChanged()"
                ></v-autocomplete>
                <v-autocomplete
                  v-model="fields.medico.data"
                  :items="fields.medico.items"
                  prepend-icon="mdi-doctor"
                  label="Médico"
                  :disabled="fields.medico.disabled"
                  @change="doctorChanged()"
                ></v-autocomplete>
                <v-menu
                  ref="menu"
                  v-model="fields.data.menu"
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="fields.data.data"
                      label="Data da Consulta"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :disabled="fields.data.disabled"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="fields.data.data"
                    :active-picker.sync="fields.data.activePicker"
                    :min="new Date(Date.now()).toISOString().substr(0, 10)"
                    @change="dateChanged()"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  v-model="fields.hora.data"
                  :items="fields.hora.items"
                  prepend-icon="mdi-clock"
                  label="Horário"
                  :disabled="fields.hora.disabled"
                ></v-select>
                <v-layout justify-space-between>
                  <v-btn @click="submit" color="primary"
                    >Agendar Consulta</v-btn
                  >
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
    <v-snackbar v-model="snackbar.isVisible" :timeout=3000 color="success">{{ snackbar.text }}</v-snackbar>
  </div>
</template>

<script>
export default {
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      this.snackbar.isVisible = true
    },
    clearAndDisableFields(fields) {
      for (const field of fields) {
        this.fields[field].data = ""
        this.fields[field].disabled = true
      }
      this.fields[fields[0]].disabled = false
    },
    specialtyChanged() {
      if (this.fields.especialidade.data) {
        this.fields.medico.disabled = false
        // Acquire doctor data
      }

      this.clearAndDisableFields(["medico", "data", "hora"])
    },
    doctorChanged() {
      if (this.fields.medico.data) {
        this.fields.data.disabled = false
        // Acquire date data
      }

      this.clearAndDisableFields(["data", "hora"])
    },
    dateChanged() {
      if (this.fields.data.data) {
        this.fields.hora.disabled = false
        // Acquire time data
      }

      this.clearAndDisableFields(["hora"])
    }
  },
  data() {
    return {
      snackbar: {
        isVisible: false,
        text: "Agendamento realizado com sucesso!"
      },
      fields: {
        especialidade: {
          data: "",
          disabled: false,
          items: ["Abc", "Def", "Ghi"]
        },
        medico: {
          data: "",
          disabled: true,
          items: ["Medico 1", "Medico 2", "Medico 3"]
        },
        data: {
          data: "",
          menu: false,
          activePicker: null,
          disabled: true,
        },
        hora: {
          data: "",
          disabled: true,
          items: ["7:00-8:00", "10:00-11:00", "16:00-17:00"]
        },
      },
    };
  },
};
</script>