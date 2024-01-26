<template>
  <div class="box">
    <div class="columns is-multiline">
      <div class="column is-full">
        <h3 class="title is-size-2 mb-0">Engagement Form</h3>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Email•</label>
          <div class="control">
            <input
                v-model="email"
                :class="inputClasses('email')"
                type="text"
                placeholder="AE Email"
            />
          </div>
          <p v-if="emailMessage" class="help is-danger">
            {{ emailMessage }}
          </p>
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
                placeholder="Company Name"
            />
          </div>
          <p v-if="companyMessage" class="help is-danger">
            {{ companyMessage }}
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
                placeholder="Company Location"
            />
          </div>
          <p v-if="locationMessage" class="help is-danger">
            {{ locationMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Number of Company Locations•</label>
          <div class="control">
            <input
                v-model="numLoc"
                :class="inputClasses('numLoc')"
                type="text"
                placeholder="Number of Locations"
            />
          </div>
          <p v-if="numLocMessage" class="help is-danger">{{ numLocMessage }}</p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Company Industry/Vertical•</label>
          <div class="control">
            <input
              v-model="vertical"
              :class="inputClasses('vertical')"
              type="text"
              placeholder="Company Industry or Vertical"
            />
          </div>
          <p v-if="verticalMessage" class="help is-danger">
            {{ verticalMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Annual Advertising Expense w/ iHeart•</label>
          <div class="control">
            <input
              v-model="expense"
              :class="inputClasses('expense')"
              type="text"
              placeholder="Annual iHeart Expense"
            />
          </div>
          <p v-if="expenseMessage" class="help is-danger">
            {{ expenseMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>How sophisticated is representative?•</label>
          <div class="control">
            <input
                v-model="sophisticated"
                :class="inputClasses('sophisticated')"
                type="text"
                placeholder="Low / Medium / High"
            />
          </div>
          <p v-if="sophisticatedMessage" class="help is-danger">
            {{ sophisticatedMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Does the company have a list of competitors?*</label>
          <div class="control">
            <input
                v-model="listComp"
                :class="inputClasses('listComp')"
                type="text"
                placeholder="Competitors to match against"
            />
          </div>
          <p v-if="listCompMessage" class="help is-danger">
            {{ listCompMessage }}
          </p>
        </div>
      </div>

      <div class="column is-full">
        <div class="is-full">
          <div class="field">
            <label>What is the problem or question?</label>
            <textarea
              v-model="whatProblem"
              class="textarea"
              placeholder="What is the problem/question the company is trying to solve?"
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
            <button :class="submitButtonClasses" @click="sendEmail">
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
  name: "Engagement Form",

  data() {
    return {
      submitted: false,
      email: "",
      company: "",
      location: "",
      numLoc: "",
      vertical: "",
      expense: "",
      sophisticated: "",
      capture: "",
      listComp: "",
      whatProblem: "",
      adNotEffective: "",
      locUnderPerforming: "",
      newLoc: "",
      growthExpectations: "",
      needPromo: "",
      newEntrant: "",
      emailMessage: "",
      companyMessage: "",
      locationMessage: "",
      numLocMessage: "",
      verticalMessage: "",
      expenseMessage: "",
      sophisticatedMessage: "",
      captureMessage: "",
      listCompMessage: "",
      whatProblemMessage: "",
      adNotEffectiveMessage: "",
      locUnderPerformingMessage: "",
      newLocMessage: "",
      growthExpectationsMessage: "",
      needPromoMessage: "",
      newEntrantMessage: "",
    };
  },

  computed: {
    emailValid() {
      return validator.isEmail(this.email);
    },
    requiredFields() {
      return (
        this.email.length > 0 &&
        this.company.length > 0 &&
        this.location.length > 0 &&
        this.numLoc.length > 0 &&
        this.vertical.length > 0
      );
    },
    submitButtonClasses() {
      return {
        button: true,
        "is-light": !this.requiredFields,
        "is-link": this.requiredFields,
      };
    },
    generatedLink() {
      return `mailto:info@vadoanalytics.com?subject=Vado%20Engagement%20Questionnaire&body=Email%3A%20${this.email}%0ACompany%3A%20${this.company}%0ALocation%3A%20${this.location}%0AProblem%3A%20${this.whatProblem}%0A`;
    },
  },

  methods: {
    fieldMessages() {
      this.emailMessage =
          this.email.length > 0 && this.emailValid
              ? ""
              : "A valid email is required.";
      this.companyMessage =
        this.company.length > 0 ? "" : "Company is required.";
      this.locationMessage =
        this.location.length > 0 ? "" : "Location is required.";
      this.numLocMessage =
          this.numLoc.length > 0 ? "" : "Number of Locations is required.";
      this.verticalMessage =
          this.vertical.length > 0 ? "" : "Vertical is required.";
      this.expenseMessage =
          this.expense.length > 0 ? "" : "Expense is required.";
      this.sophisticatedMessage =
          this.sophisticated.length > 0 ? "" : "Sophistication Level (Low/Medium/High) is required.";
      this.captureMessage =
          this.capture.length > 0 ? "" : "Data Capture (Y/N) is required.";
      this.listCompMessage =
          this.listComp.length > 0 ? "" : "Listing Competitors (Y/N) is required.";
    },
    inputClasses(input) {
      switch (input) {
        case "email":
          return {
            input: true,
            "is-danger":
                (this.email.length === 0 || !this.emailValid) && this.submitted,
          };
          break;
        case "company":
          return {
            input: true,
            "is-danger": this.company.length === 0 && this.submitted,
          };
          break;
        case "location":
          return {
            input: true,
            "is-danger": this.location.length === 0 && this.submitted,
          };
          break;
        case "numLoc":
          return {
            input: true,
            "is-danger": this.numLoc.length === 0 && this.submitted,
          };
          break;
        case "vertical":
          return {
            input: true,
            "is-danger": this.vertical.length === 0 && this.submitted,
          };
          break;
        case "expense":
          return {
            input: true,
            "is-danger": this.expense.length === 0 && this.submitted,
          };
          break;
        case "sophisticated":
          return {
            input: true,
            "is-danger": this.sophisticated.length === 0 && this.submitted,
          };
          break;
        case "capture":
          return {
            input: true,
            "is-danger": this.capture.length === 0 && this.submitted,
          };
          break;
        case "listComp":
          return {
            input: true,
            "is-danger": this.listComp.length === 0 && this.submitted,
          };
          break;
        case "whatProblem":
          return {
            input: true,
            "is-danger": this.whatProblem.length === 0 && this.submitted,
          };
        default:
          break;
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
    &.is-link {
      background-color: $vado-blue-2;
    }
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
