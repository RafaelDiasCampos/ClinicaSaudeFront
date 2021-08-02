<template>
  <div class="login">
    <v-container fluid fill-height justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-tabs v-model="tab">
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="tab in tabs" :key="tab.name">{{ tab.name }} </v-tab>
          <v-tab-item v-for="tab in tabs" :key="tab.name">
            <v-toolbar>
              <v-toolbar-title>
                <h4>{{ tab.title }}</h4>
              </v-toolbar-title>
            </v-toolbar>
            <v-card>
              <v-card-text class="pt-4">
                <div>
                  <TextForm
                    :fields="
                      Object.keys(fields)
                        .filter((key) => tab.fields.includes(key))
                        .reduce((obj, key) => {
                          obj[key] = fields[key];
                          return obj;
                        }, {})
                    "
                    :isLogin="tab.isLogin"
                  ></TextForm>
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
import TextForm from "@/components/TextForm";
export default {
  components: { TextForm },
  data() {
    return {
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