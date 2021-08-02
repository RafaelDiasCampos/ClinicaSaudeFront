<template>
  <div class="register-address">
    <v-container fluid fill-height justify-center>
      <v-flex xs12 sm4 elevation-6>
        <TextForm title="Cadastrar Endereço" :fields="fields"></TextForm>
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
        cep: {
          name: "CEP",
          rules: [],
          data: "",
          mask: "##-###-###",
        },
        logradouro: {
          name: "Logradouro",
          rules: [],
          data: "",
          mask: "",
        },
        bairro: {
          name: "Bairro",
          rules: [],
          data: "",
          mask: "",
        },
        cidade: {
          name: "Cidade",
          rules: [],
          data: "",
          mask: "",
        },
        estado: {
          name: "Estado",
          rules: [],
          data: "",
          mask: "",
        },
      },
    };
  },
};
</script>