<template>
  <v-app>
    <v-layout>
      <v-app-bar title="Test"></v-app-bar>

      <!-- <v-navigation-drawer>
        <v-list>
          <v-list-item titl="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer> -->

      <v-main style="min-height: 300px">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>
