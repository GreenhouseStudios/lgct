<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <div>
          <h1 class="f-headline-ns">Assumption vs Truth</h1>
        </div>
      </div>
      <div class="section flex justify-center align-center">
        <div class="w-50 center">
          <h1>Statement of Purpose</h1>
          <div>
            <p class="f3">
              American understanding of historical and contemporary events often
              purposefully excludes the involvement of Indigenous people in the
              founding and expansion of the United States.
            </p>
            <p class="f3">
              Mainstream news articles, political speeches, emails, press
              releases, and more are created from non-Native, colonized
              perspectives that often contain erasure language or fail to show
              the full truth through omission. This is part of an intentional
              political process to create and uphold a myth of America
              constructed “from carving communities out of a vast, untamed
              wilderness” to become an “exemplary nation”, as in the recent 1776
              Report. Non-Native citizens often participate in this myth,
              oftentimes unknowingly, due to the framing of historical events
              during their education and the presentation of contemporary events
              through the white lens of the media. This page contains examples
              of erasure language or exclusion in historical events with an
              analysis that focuses on encompassing a more cohesive
              understanding of the event and history. The goal is to provide
              real-world examples so that you, as a viewer, have an
              understanding and ability to notice instances of erasure and
              exclusion as an informed reader to apply in your own studies.
            </p>
          </div>
        </div>
      </div>

      <div class="section">
          <div class="w-30 h-100 pa3 ma0 fl">
              <h1 class="f-subheadline">Article 1</h1>
          </div>
          <div class="w-70 h-100 pa3 fl">
              <div class="h-50">
                  <h1 class="f1 ma0">Assumption</h1>
              </div>
              <div class="h-50">
                  <h1 class="f1 ma0">Truth</h1>
              </div>
              
          </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        scrollBar: true,
        menu: "#menu",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>