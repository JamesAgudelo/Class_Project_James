<template>
    <v-timeline align="start"
    
    >
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :dot-color="year.color"
        size="small"
        >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${year.color}`"
            v-text="year.year"
          ></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
            Las fechas son significativas pero los datos son irrelevantes 
          </h2>
          <div>
            En la radio hay también un toro,
            En la radio hay también un toro,
            Y el toro muuu, y la vaca moo
            Y la cordero beee y la cabra meee,
            El perro guau, el gato miaoo,
            La paloma ruu, el pavo glu glu glu,
            El gallo cocoroco, la gallina coo
            Y el pollito pio, el pollito pio,
            El pollito pio, el pollito pio.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </template>
  
  <script>
    export default {
      data: () => ({
        years: [
          {
            color: 'cyan',
            year: '2002',
          },
          {
            color: 'green',
            year: '2010',
          },
          {
            color: 'pink',
            year: '2019',
          },
          {
            color: 'amber',
            year: '2020',
          },
          {
            color: 'orange',
            year: '2023',
          },
        ],
      }),
    }
  </script>