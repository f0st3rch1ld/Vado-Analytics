<template>
  <div class="box">
    <div class="columns is-multiline">
      <div class="column is-full">
        <h4 class="title is-size-3 m-3 pb-4">The following is intended to help a potential requestor determine if a given company opportunity is optimal for a database analysis project with Vado Analytics</h4>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>AE point of contact email•</label>
          <div class="control">
            <input
                v-model="email"
                :class="inputClasses('email')"
                type="text"
                placeholder="AE Email"
            />
          </div>
          <p v-if="emailMessage" class="help is-danger">{{ emailMessage }}</p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Client name•</label>
          <div class="control">
            <input
                v-model="company"
                :class="inputClasses('company')"
                type="text"
                placeholder="Client Name"
            />
          </div>
          <p v-if="companyMessage" class="help is-danger">
            {{ companyMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Retail Locations•</label>
          <div class="control">
            <input
                v-model="location"
                :class="inputClasses('location')"
                type="text"
                placeholder="Retail Locations, City & State"
            />
          </div>
          <p v-if="locationMessage" class="help is-danger">
            {{ locationMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="field">
          <label>Number of Company Retail Locations•</label>
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
              placeholder="Company Industry/Vertical"
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
        <div class="pl-3">
          <div>
            <label class="checkbox">
              <input
                  class="p-2"
                  v-model="capture"
                  :class="inputClasses('capture')"
                  type="checkbox"
              /><span class="p-3">Does the company capture any first party customer data/website activity that they are willing to provide for analysis?</span>
            </label>
          </div>
          <p v-if="captureMessage" class="help is-danger">
            {{ captureMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="pl-3">
          <div>
            <label class="checkbox">
              <input
                  class="p-2"
                  v-model="listComp"
                  :class="inputClasses('listComp')"
                  type="checkbox"
              /><span class="p-3">Does the company have a list of competitors they would like to be matched against?</span>
            </label>
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

      <div class="column is-full p-4">
        <h4 class="title is-size-3 mb-0">Has the company expressed any of the following concerns:</h4>
      </div>

      <div class="column is-half">
        <div class="pl-3">
          <div>
            <label class="checkbox">
              <input
                  class="p-2"
                  v-model="adNotEffective"
                  :class="inputClasses('adNotEffective')"
                  type="checkbox"
              /><span class="p-3">Current Advertising is seen as not being effective enough?</span>
            </label>
          </div>
          <p v-if="adNotEffectiveMessage" class="help is-danger">
            {{ adNotEffectiveMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="pl-3">
          <div>
            <label class="checkbox">
              <input
                  class="p-2"
                  v-model="locUnderPerforming"
                  :class="inputClasses('locUnderPerforming')"
                  type="checkbox"
              /><span class="p-3">Some number of existing locations are under-performing?</span>
            </label>
          </div>
          <p v-if="locUnderPerformingMessage" class="help is-danger">
            {{ locUnderPerformingMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="pl-3">
          <div>
            <label class="checkbox">
              <input
                  class="p-2"
                  v-model="newLoc"
                  :class="inputClasses('newLoc')"
                  type="checkbox"
              /><span class="p-3">A new location is needed and site selection/first 1-2 year “grand opening” campaign needed?</span>
            </label>
          </div>
          <p v-if="newLocMessage" class="help is-danger">
            {{ newLocMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="pl-3">
          <div>
            <label class="checkbox">
              <input
                  class="p-2"
                  v-model="growthExpectations"
                  :class="inputClasses('growthExpectations')"
                  type="checkbox"
              /><span class="p-3">Management has set growth expectations that sales is unsure how to fully meet?</span>
            </label>
          </div>
          <p v-if="growthExpectationsMessage" class="help is-danger">
            {{ growthExpectationsMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="pl-3">
          <div>
            <label class="checkbox">
              <input
                  class="p-2"
                  v-model="needPromo"
                  :class="inputClasses('needPromo')"
                  type="checkbox"
              /><span class="p-3">A promotion is needed for a given holiday/overstock situation/point-in-time need?</span>
            </label>
          </div>
          <p v-if="needPromoMessage" class="help is-danger">
            {{ needPromoMessage }}
          </p>
        </div>
      </div>

      <div class="column is-half">
        <div class="pl-3">
          <div>
            <label class="checkbox">
              <input
                  class="p-2"
                  v-model="newEntrant"
                  :class="inputClasses('newEntrant')"
                  type="checkbox"
              /><span class="p-3">There is a new entrant to the competitive marketplace?</span>
            </label>
          </div>
          <p v-if="newEntrantMessage" class="help is-danger">
            {{ newEntrantMessage }}
          </p>
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
      capture: false,
      listComp: false,
      whatProblem: "",
      adNotEffective: false,
      locUnderPerforming: false,
      newLoc: false,
      growthExpectations: false,
      needPromo: false,
      newEntrant: false,
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
      return `mailto:info@vadoanalytics.com?subject=Vado%20Engagement%20Questionnaire&body=Email%3A%20${this.email}%0ACompany%3A%20${this.company}%0ALocation%3A%20${this.location}%0ANumber%20Locations%3A%20${this.numLoc}%0ACompany%20Vertical%3A%20${this.vertical}%0AAdvertising%20Expense%3A%20${this.expense}%0AAnalytics%20Sophistication%3A%20${this.sophisticated}%0ACustomer%20Data%3A%20${this.capture}%0ACompetitor%20List%3A%20${this.listComp}%0AProblem%3A%20${this.whatProblem}%0ACurrent%20Advertising%20Not%20Effective%3A%20${this.adNotEffective}%0AUnderPerforming%20Locations%3A%20${this.locUnderPerforming}%0ANew%20Locations%3A%20${this.newLoc}%0AHard%20Growth%20Expectations%3A%20${this.growthExpectations}%0APromo%20Needed%3A%20${this.needPromo}%0ANew%20Entrant%3A%20${this.newEntrant}%0A%0A`;
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
/*      this.captureMessage =
          this.capture.length > 0 ? "" : "Data Capture (Y/N) is required.";
      this.listCompMessage =
          this.listComp.length > 0 ? "" : "Listing Competitors (Y/N) is required.";*/
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
