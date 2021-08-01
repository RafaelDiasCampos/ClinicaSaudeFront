<template>
  <div class="login">
    <v-container fluid fill-height justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-tabs v-model="tab">
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="tab in tabs" :key="tab.name">{{ tab.name }} </v-tab>
          <v-tab-item v-for="tab in tabs" :key="tab.name">
            <v-toolbar>
              <v-toolbar-title
                ><h4>{{ tab.title }}</h4></v-toolbar-title
              >
            </v-toolbar>
            <v-card>
              <v-card-text class="pt-4">
                <div>
                  <v-form>
                    <v-text-field
                      v-for="field in tab.fields"
                      :key="field.name"
                      v-model="fields[field].data"
                      :rules="fields[field].rules"
                      :label="fields[field].name"
                      :type="fields[field].isPassword ? 'password' : 'text'"
                      shaped
                      outlined
                    ></v-text-field>
                    <v-layout justify-space-between>
                      <v-btn @click="submit" color="primary">{{
                        tab.actionName
                      }}</v-btn>
                      <a href="" v-if="tab.isLogin">Esqueci minha senha</a>
                    </v-layout>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
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
      tab: 0,
      tabs: [
        {
          name: "Entrar",
          title: "Já tenho uma conta",
          actionName: "Entrar",
          fields: ["email", "name", "password"],
          isLogin: true,
        },
        {
          name: "Cadastrar",
          title: "Ainda não tenho uma conta",
          actionName: "Cadastrar",
          fields: ["email", "name", "password", "passwordConfirmation"],
        },
      ],
      fields: {
        email: {
          name: "E-mail",
          data: "",
          rules: [
            (v) => !!v || "E-mail é necessário",
            (v) => /.+@.+\..+/.test(v) || " O E-mail deve ser válido",
          ],
        },
        name: {
          name: "Nome",
          data: "",
          rules: [
            (v) => !!v || "Nome é necessário",
            (v) =>
              (v && v.length <= 30) || "Nome deve ser menor que 30 caracteres",
          ],
        },
        password: {
          name: "Senha",
          data: "",
          rules: [
            (v) => !!v || "Nome é necessário",
            (v) =>
              (v && v.length <= 30) || "Nome deve ser menor que 30 caracteres",
          ],
          isPassword: true,
        },
        passwordConfirmation: {
          name: "Confirmar Senha",
          data: "",
          rules: [
            (v) => !!v || "Nome é necessário",
            (v) =>
              (v && v.length <= 30) || "Nome deve ser menor que 30 caracteres",
          ],
          isPassword: true,
        },
      },
    };
  },
};
</script>