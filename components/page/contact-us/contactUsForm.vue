<template>
  <div class="box">
    <div class="columns is-multiline">
      <div class="column is-full">
        <h3 class="title is-size-2 mb-0">Want to learn more?</h3>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Name•</label>
          <div class="control">
            <input
              v-model="name"
              :class="inputClasses('name')"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <p v-if="nameMessage" class="help is-danger">{{ nameMessage }}</p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Company•</label>
          <div class="control">
            <input
              v-model="company"
              :class="inputClasses('company')"
              type="text"
              placeholder="Your Company"
            />
          </div>
          <p v-if="companyMessage" class="help is-danger">
            {{ companyMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Email•</label>
          <div class="control">
            <input
              v-model="email"
              :class="inputClasses('email')"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <p v-if="emailMessage" class="help is-danger">
            {{ emailMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Location City•</label>
          <div class="control">
            <input
              v-model="location"
              :class="inputClasses('location')"
              type="text"
              placeholder="Location City"
            />
          </div>
          <p v-if="locationMessage" class="help is-danger">
            {{ locationMessage }}
          </p>
        </div>
      </div>

      <div class="column is-full">
        <div class="is-full">
          <div class="field">
            <label>Message</label>
            <textarea
              v-model="message"
              class="textarea"
              placeholder="Your Message Here"
            />
          </div>
        </div>
      </div>

      <div class="column is-full">
        <p>* indicates a required field.</p>
      </div>

      <div class="column is-full">
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="sendEmail">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
    <a
      class="is-hidden"
      :href="generatedLink"
      target="_blank"
      ref="generatedLink"
    ></a>
  </div>
</template>

<script>
import validator from "validator";

export default {
  name: "Contact Us Form",

  data() {
    return {
      submitted: false,
      name: "",
      company: "",
      email: "",
      location: "",
      message: "",
      nameMessage: "",
      companyMessage: "",
      emailMessage: "",
      locationMessage: "",
    };
  },

  computed: {
    emailValid() {
      return validator.isEmail(this.email);
    },
    requiredFields() {
      return (
        this.name.length > 0 &&
        this.company.length > 0 &&
        this.email.length > 0 &&
        this.location.length > 0
      );
    },
    submitButtonClasses() {
      return {
        button: true,
        "is-link": this.requiredFields(),
      };
    },
    generatedLink() {
      return `mailto:info@vadoanalytics.com?subject=Someone%20wants%20to%20learn%20more%20about%20our%20products%20and%20services&body=Name%3A%20${this.name}%0ACompany%3A%20${this.company}%0AEmail%3A%20${this.email}%0ALocation%3A%20${this.location}%0AMessage%3A%20${this.message}%0A`;
    },
  },

  methods: {
    fieldMessages() {
      this.nameMessage = this.name.length > 0 ? "" : "Name is required.";
      this.companyMessage =
        this.company.length > 0 ? "" : "Company is required.";
      this.emailMessage =
        this.email.length > 0 && this.emailValid
          ? ""
          : "A valid email is required.";
      this.locationMessage =
        this.location.length > 0 ? "" : "Location is required.";
    },
    inputClasses(input) {
      switch (input) {
        case "name":
          return {
            input: true,
            "is-danger": this.name.length === 0 && this.submitted,
          };
          break;
        case "company":
          return {
            input: true,
            "is-danger": this.company.length === 0 && this.submitted,
          };
          break;
        case "email":
          return {
            input: true,
            "is-danger":
              (this.email.length === 0 || !this.emailValid) && this.submitted,
          };
          break;
        case "location":
          return {
            input: true,
            "is-danger": this.location.length === 0 && this.submitted,
          };
      }
    },
    sendEmail() {
      this.submitted = true;
      this.fieldMessages();
      if (this.requiredFields && this.emailValid) {
        setTimeout(() => {
          this.$refs.generatedLink.click();
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

.field {
  position: relative;

  .button {
    background-color: $vado-blue-2;
  }

  label {
    position: absolute;
    width: fit-content;
    height: 21px;
    margin: 0;
    padding: 0px 3px;
    background-color: #fff;
    z-index: 1;
    top: -9px;
    left: 9px;
    font-size: 0.9em;
    font-weight: 700;
  }
}
</style>
