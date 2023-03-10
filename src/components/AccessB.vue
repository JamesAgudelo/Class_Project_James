<template>
  
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="firstName"
          label="Nombre"
          :rules="[v => !!v || 'Pelotudo no has puesto nada']"
        ></v-text-field>
  
        <v-text-field
          v-model="lastName"
          label="Apellidos"
          :rules="[v => !!v || 'Pelotudo no has puesto nada']"
        ></v-text-field>

        <v-text-field
          v-model="Email"
          label="Correo"
          :rules="[v => !!v || 'Pelotudo no has puesto nada']"
        ></v-text-field>


        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || '¡Diga que si y le doy un bombom, no sea pato!']"
          label="La información debe ser veridica"
          required
        ></v-checkbox>

        <div class="d-flex flex-column">
            <router-link to="/" style="text-decoration: none;">
          <v-btn
          type="submit"
            color="success"
            class="mt-4"
            block
            @click="validate"
          >
            Registrarse
          </v-btn>
          </router-link>
  </div>
      </v-form>
    </v-sheet>
  </template>
  
  <script>
    export default {
      data: () => ({
        firstName: '',
        firstNameRules: [
          value => {
            if (value?.length > 3) return true
            return 'First name must be at least 3 characters.'
          },
        ],
        lastName: '',
        lastNameRules: [
          value => {
            if (/[^0-9]/.test(value)) return true
            return 'Last name can not contain digits.'
          },
        ],
        checkbox: false
      }),
    }
  </script>