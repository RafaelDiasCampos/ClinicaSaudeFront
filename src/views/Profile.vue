<template>
  <div class="profile">
    <v-container fluid fill-height justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar>
          <v-toolbar-title><h4>Meu Perfil</h4></v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-card-text class="pt-4">
            <div>
              <v-form>
                <v-text-field
                  v-for="(field, fieldName) in fields"
                  :key="field.name"
                  v-model="fields[fieldName].data"
                  :rules="field.rules"
                  :label="field.name"
                  :type="field.isPassword ? 'password' : 'text'"
                  shaped
                  outlined
                ></v-text-field>
                <v-layout justify-space-between>
                  <v-btn @click="submit" color="primary">Atualizar</v-btn>
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
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
      return 0;
    },
  },
  data() {
    return {
      valid: true,
      fields: {
        email: {
          name: "E-mail",
          rules: [
            (v) => !!v || "E-mail é necessário",
            (v) => /.+@.+\..+/.test(v) || " O E-mail deve ser válido",
          ],
          data: ""
        },
        name: {
          name: "Nome",
          rules: [
            (v) => !!v || "Nome é necessário",
            (v) =>
              (v && v.length <= 30) || "Nome deve ser menor que 30 caracteres",
          ],
          data: ""
        },
      },
    };
  },
};
</script>