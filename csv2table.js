var csv;

var processData=function(data) {
  csv = $.csv.toObjects(data);
  
  $('#datatable').bootstrapTable({
      pagination: true,
      search: true,
      toggle: "table",
      pagination: true,
      toolbar: "#toolbar-table",
      showExport: true,
      showToggle: true,
      showColumns: true,
      showFullscreen: true,
      columns: [{
        field: 'organization',
        title: 'Organization',
        sortable: true
      }, {
        field: 'category',
        title: 'Category',
        sortable: true
      }, {
        field: 'country',
        title: 'Country',
        sortable: true
      }, {
        field: 'url',
        title: 'Url'
      }, {
        field: 'description',
        title: 'Description',
        cardVisible: true,
        visible: false
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
