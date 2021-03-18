<template>
    <v-list>
      <v-list-group
        v-for="item in nodes"
        :key="item.text"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
        v-if="item.allow.includes(user.role_id)"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.children"
          :key="child.text"
          :to="child.url"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
</template>

<script>
export default {
    props: ['nodes'],
    computed: {
      user(){
        return this.$store.getters.user
      }
    }
}
</script>