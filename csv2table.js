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
      showFooter: true,
      columns: [{
        field: 'organization',
        title: 'Organization',
        width: '25',
        widthUnit: '%',
        sortable: true
      }, {
        field: 'category',
        title: 'Category',
        width: '25',
        widthUnit: '%',
        sortable: true
      }, {
        field: 'country',
        title: 'Country',
        width: '10',
        widthUnit: '%',
        sortable: true
      }, {
        field: 'url',
        width: '15',
        widthUnit: '%',
        title: 'url'
      }, {
        field: 'description',
        title: 'Description',
        cardVisible: true,
        width: '35',
        widthUnit: '%',
        visible: true
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
