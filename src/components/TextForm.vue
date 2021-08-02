<template>
  <div class="text-form">
    <v-toolbar flat v-if="title">
      <v-toolbar-title
        ><h4>{{ title }}</h4></v-toolbar-title
      >
    </v-toolbar>
    <v-card flat>
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
              v-mask="field.mask"
              shaped
              outlined
            ></v-text-field>
            <v-layout justify-space-between>
              <v-btn @click="submit" color="primary">Atualizar</v-btn>
              <a href="" v-if="isLogin">Esqueci minha senha</a>
            </v-layout>
          </v-form>
        </div>
      </v-card-text>
    </v-card>
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
  props: ["title", "fields", "isLogin"],
};
</script>