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
        width: '20',
        widthUnit: '%',
        sortable: true,
        formatter: linkAccount
      }, {
        field: 'category',
        title: 'Category',
        width: '20',
        widthUnit: '%',
        sortable: true
      }, {
        field: 'country',
        title: 'Country',
        width: '10',
        widthUnit: '%',
        sortable: true
      }, {
        field: 'description',
        title: 'Description',
        cardVisible: true,
        width: '40',
        widthUnit: '%',
        visible: true
      }, {
        field: 'url2',
	title: 'Additional link',
        width: '10',
        widthUnit: '%',
        title: 'url'
      }],
      data: csv
  })
  
};

var linkAccount = function (value, row, index) {
		return [
				'<a href="http://',
				row.url,
				'" title="Open webpage of ',
				row.organization,
				' in antoher window." target="_blank">',
				value,
				'</a>'].join('');
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
