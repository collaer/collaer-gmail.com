var csv;

var processData=function(data) {
  csv = $.csv.toObjects(data);
  
  $('#datatable').bootstrapTable({
  columns: [{
    field: 'organization',
    title: 'Organization'
  }, {
    field: 'category',
    title: 'Category'
  }, {
    field: 'country',
    title: 'Country'
  }, {
    field: 'url',
    title: 'Url'
  }, {
    field: 'description',
    title: 'Description'
  }],
  data: csv
})
  
};

$(document).ready(function() {
  $.ajax({
        type: "GET",
        url: "data/sample.csv",
        dataType: "text",
        success: function(data) {
          processData(data);
        }
     });
});
