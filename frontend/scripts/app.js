document.addEventListener('DOMContentLoaded', init);

const adapter = new Adapter('http://127.0.0.1:3000');
const _ = new Utils();
const ui = new Ui();
const jobSearch = new JobSearch();

let debug;

function init(evt) {
  let storedId = adapter.getStoredId();
  if (storedId) {
    adapter.getJobSearch(storedId, function (json) {
      jobSearch.id = storedId;
      jobSearch.jobs = json.jobs;
      jobSearch.populateJobsList(jobSearch.jobs);
    });
  } else {
    //TODO: this is rough but works
    ui.showWorkPane();
    adapter.getJobSearches(function (json) {
      jobSearch.buildJobSearchForm(json);
    });
  }
}
