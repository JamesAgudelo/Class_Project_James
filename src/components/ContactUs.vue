<template>
  
    <v-timeline align="start">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card>
          <v-card-title :class="['text-h6', `bg-${item.color}`]">
            James Oquendo Agudelo
          </v-card-title>
          <v-card-text class="bg-white text--primary">
            <p>James Oquendo Agudelo esta en todos lados, en todas partes, al mismo tiempo, donde quiera que estes, el podra encontrarte si necesitas de su ayuda, por eso si lo necesitas urgentemente, acá te brindamos 5 maneras para buscar su ayuda y apoyo, que bendición ve, asi que dale, caontactalo.</p>
            <router-link to="/Login" style="text-decoration: none;">
            <v-btn
              :color="item.color"
              variant="outlined ma-2"
            >
              Contactarlo
            </v-btn>
            </router-link>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </template>
  
  <script>
    export default {
      data: () => ({
        items: [
          {
            color: 'red-lighten-2',
            icon: 'mdi-star',
          },
          {
            color: 'purple-lighten-2',
            icon: 'mdi-book-variant',
          },
          {
            color: 'green-lighten-1',
            icon: 'mdi-airballoon',
          },
          {
            color: 'indigo-lighten-2',
            icon: 'mdi-buffer',
          },
        ],
      }),
    }
  </script>