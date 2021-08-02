<template>
  <div class="profile">
    <v-container fluid fill-height justify-center>
      <v-flex xs12 sm4 elevation-6>
        <TextForm title="Meu Perfil" :fields="fields"></TextForm>
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
      fields: {
        email: {
          name: "E-mail",
          rules: [
            (v) => !!v || "E-mail é necessário",
            (v) => /.+@.+\..+/.test(v) || " O E-mail deve ser válido",
          ],
          data: "",
        },
        name: {
          name: "Nome",
          rules: [
            (v) => !!v || "Nome é necessário",
            (v) =>
              (v && v.length <= 30) || "Nome deve ser menor que 30 caracteres",
          ],
          data: "",
        },
      },
    };
  },
};
</script>