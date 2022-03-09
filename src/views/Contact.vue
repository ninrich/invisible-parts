<template>
  <div class="contact">
    <p>
      Projekt bol realizovaný aj vďaka finančnej podpore Fondu na podporu umenia a mestu Martin.
      Ak máte doplňujúcu informáciu alebo viete niečo, na čo sme výskumom neprišli napíšte nám e-mail.
      Ak máte záujem aby sa Neviditeľné časti (Invisible parts) nášho mesta stali viditeľnými, môžete nás finančne podporiť.
      Tešíme sa na Vaše správy.
    </p>

    <p>Kultúrna platforma Parta</p>
    <a href="mailto:info@kulturnaparta.sk">info@kulturnaparta.sk</a>

<!--    https://itnext.io/how-to-use-google-recaptcha-with-vuejs-7756244400da-->
    <form ref="form" v-if="result !== 'success'" id="contact-form" @submit.prevent="submitForm">
      <label for="sender_name">Volám sa </label>
      <input id="sender_name" type="text" name="sender_name" v-model="senderName">
      <label for="sender_email"> a môj email je </label>
      <input id="sender_email" type="email" name="sender_email" v-model="senderEmail">
      <br>
      <label for="message">Moja správa znie:</label>
      <textarea id="message" name="message" v-model="message"></textarea>
      <br/>
      <vue-recaptcha
          class="captcha-badge"
          ref="invisibleRecaptcha"
          @verify="onVerify"
          @expired="onExpired"
          size="invisible"
          :sitekey="recaptchaKey">
      </vue-recaptcha>
      <button type="submit" :disabled="processing">Odoslať</button>
    </form>
    <div v-if="processing">
      Vaša správa sa odosiela...
    </div>
    <div v-if="result === 'success'">
      Vaša správa bola úspešne odoslaná. Ďakujeme {{senderName}}.
    </div>
    <div v-if="result === 'error'">
      {{senderName}}, ospravedlňujeme sa. Pri odosielaní Vašej správy nastala nasledovná chyba:<br>
      {{errorMessage}}
    </div>
  </div>
</template>


<script>
import { VueRecaptcha } from 'vue-recaptcha';
import { RECAPTCHAV2_SITE_KEY } from "@/api-keys";
import emailjs from '@emailjs/browser';

export default {
  components: { VueRecaptcha },

  data() {
    return {
      recaptchaKey: RECAPTCHAV2_SITE_KEY,
      processing: false,
      result: null,
      errorMessage: null,
      senderName: "",
      senderEmail: "",
      message: ""
    }
  },
  methods: {
    submitForm() {
      this.processing = true;
      this.result = null;
      this.errorMessage = null;
      this.$refs.invisibleRecaptcha.execute();
    },

    onVerify(response) {
      const templateParams = {
        "sender_name": this.senderName,
        "sender_email": this.senderEmail,
        "message": this.message,
        "g-recaptcha-response": response,
      }

      this.$refs.invisibleRecaptcha.reset();

      emailjs.send('ip_email_service', 'ip_email_template', templateParams, '4oHUKb7kSil6C8X0a')
        .then((result) => {
            this.processing = false;
            this.result = "success";
            console.log('SUCCESS!', result.text);
          }, (error) => {
            this.processing = false;
            this.result = "error";
            this.errorMessage = error.text;
          });
    },

    onExpired() {
      this.$refs.invisibleRecaptcha.reset();
    },
  }
}
</script>

<style scoped>
.contact {
  padding-top: 90px;
  height: calc(100vh - 90px);
  overflow-y: auto;

  padding-left: 20px;
  padding-right: 20px;
}

.captcha-badge {
  display: none;
}
</style>