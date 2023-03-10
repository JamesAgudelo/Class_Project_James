<template>
  
    <v-sheet width="300" class="mx-auto">
  
      <v-form ref="form">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="[v => !!v || 'Pelotudo no has puesto nada']"
          label="Ingresa tu nombre"
          required
        ></v-text-field>
  
        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Pelotudo no has puesto nada']"
          label="Selecciona un posible problema"
          required
        ></v-select>
  
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || '¡Diga que si y le doy un bombom, no sea pato!']"
          label="Encontraste tu problema?"
          required
        ></v-checkbox>
  
        <div class="d-flex flex-column">
            <router-link to="/Login" style="text-decoration: none;">
          <v-btn
            color="success"
            class="mt-4"
            block
            @click="validate"
          >
            Validar
          </v-btn>
        </router-link>
  
          <v-btn
            color="error"
            class="mt-4"
            block
            @click="reset"
          >
            Resetar Formulario
          </v-btn>
          <router-link to="/Si" style="text-decoration: none;"> 
          <v-btn
            color="warning"
            class="mt-4"
            block
            @click="resetValidation">
            ¿Me estan Sobornando?
          </v-btn>
        </router-link>
        </div>
      </v-form>
    </v-sheet>
  </template>
  
  <script>
    export default {
      data: () => ({
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        select: null,
        items: [
          'Estoy Calvo',
          'Estoy muy frentón',
          'Estoy muy chaparro',
          'Tengo Sueño',
        ],
        checkbox: false,
      }),
  
      methods: {
        async validate () {
          const { valid } = await this.$refs.form.validate()
  
          if (valid) alert('Form is valid')
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
      },
    }
  </script>