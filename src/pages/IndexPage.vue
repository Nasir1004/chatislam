<template>
  <div>
    <introduction></introduction>
    <hero id="home"></hero>
    <note></note>
    <mission id="mission"></mission>
    <bot></bot>
    <team id="team"></team>
    <scholars></scholars>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Introduction from "components/Introduction.vue";
import Hero from "components/Hero.vue";
import Note from "components/Note.vue";
import Mission from "components/Mission.vue";
import Bot from "components/Bot.vue";
import Team from "components/Team.vue";
import Scholars from "components/Scholars.vue";
import AppFooter from "components/AppFooter.vue";

export default defineComponent({
  components: {
    Introduction,
    Hero,
    Note,
    Mission,
    Bot,
    Team,
    Scholars,
    AppFooter,
  },
  name: "IndexPage",
});
</script>
