<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal>
      <q-toolbar
        class="tw-bg-white tw-border-b tw-border-primary-bg-color tw-text-black tw-h-20 tw-px-6 lg:tw-px-16"
      >
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="sm:tw-hidden"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-img src="~assets/img/logo.png" class="tw-w-6 tw-ml-4 sm:tw-ml-0" />
        <q-toolbar-title> Chat Islam </q-toolbar-title>
        <div class="tw-justify-end tw-w-4/6 tw-hidden sm:tw-flex">
          <div class="row lg:tw-w-5/6 tw-mt-4">
            <div class="tw-mx-2 lg:tw-mx-6 tw-text-base">
              <a data-scroll href="#home">About Us</a>
            </div>
            <div class="tw-mx-2 lg:tw-mx-6 tw-text-base">
              <a data-scroll href="#mission">Mission</a>
            </div>
            <div class="tw-mx-2 lg:tw-mx-6 tw-text-base">
              <a data-scroll href="#team">Team</a>
            </div>
          </div>
          <div>
            <q-btn
              class="tw-rounded-full tw-w-36"
              unelevated
              color="primary"
              label="Join Our Team"
              no-caps
              @click="onClick"
            />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen">
      <q-list class="tw-pl-5">
        <q-item-label header> Chat Islam </q-item-label>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>
              <a data-scroll href="#home">About Us</a>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>
              <a data-scroll href="#mission">Mission</a>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>
              <a data-scroll href="#team">Team</a>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
