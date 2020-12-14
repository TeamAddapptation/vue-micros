import { createApp } from 'vue';

import App from './App.vue';
import BaseTile from './components/UI/BaseTile.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseTitle from './components/UI/BaseTitle.vue';
import BaseDesc from './components/UI/BaseDesc.vue';
import BaseHero from './components/UI/BaseHero.vue';

const app = createApp(App)

app.component('base-hero', BaseHero);
app.component('base-tile', BaseTile);
app.component('base-button', BaseButton);
app.component('base-title', BaseTitle);
app.component('base-desc', BaseDesc);

app.mount('#app');
