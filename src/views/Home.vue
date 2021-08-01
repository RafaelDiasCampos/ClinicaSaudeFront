<template>
  <div class="home pa-10">
    <v-img
      :src="require('../assets/logo.png')"
      class="my-3"
      contain
      height="200"
      left
    />
    <span v-for="section in sections" :key="section.title">
      <h1 class="display-2 pl-8">{{ section.title }}</h1>
      <p class="pt-5">{{ section.text }}</p>
    </span>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      sections: [
        {title: "Quem Somos", text: "A ClinicaSaúde é uma clínica médica especializada em atendimento de alta qualidade e acessível."},
        {title: "Nossa missão", text: "Nossa missão é trazer atendimento médico de forma acessível para todas as pessoas."},
        {title: "Nossos valores", text: "Acreditamos que a saúde vem antes de tudo. Dessa forma, é necessário um atendimento médico para todos"}
      ]
    }
  }
};
</script>