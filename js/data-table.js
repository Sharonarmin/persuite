// data table

document.addEventListener('DOMContentLoaded', function () {
  // Initialize DataTables
  var table = $('#example').DataTable({
    language: {
      lengthMenu: 'Show _MENU_ entries',
      "paginate": {
        "previous": "<ion-icon name='chevron-back-outline'></ion-icon> Previous",
        "next": "Next <ion-icon name='chevron-forward-outline'></ion-icon>",
        "info": "Page _PAGE_ of _PAGES_",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "infoEmpty": "No records available",
      }
    },
    dom: '<"top"lf>rt<"bottom_dtls"ip><"clear">',
    "columnDefs": [{
        "orderable": false,
        "targets": [1, 3]
      } // Disable sorting for columns with indices 1 and 3
    ],
    pageLength: 10,
    columnDefs: [{
        width: '3%',
        targets: 0
      },
      {
        width: '20%',
        targets: 1
      },
      {
        width: '20%',
        targets: 2
      },
      {
        width: '20%',
        targets: 3
      },
      {
        width: '15%',
        targets: 4
      },
      {
        width: '11%',
        targets: 5
      },
      {
        width: '11%',
        targets: 6
      }
    ],
    autoWidth: false
    
  });
  $('.dt-search input[type="search"]').attr('placeholder', 'Search');



  // Handle click on "Select all" control
  document.getElementById('select-all').addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('#example tbody .select-row');
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
  });

  // Handle click on checkbox to set state of "Select all" control
  var tbody = document.querySelector('#example tbody');
  tbody.addEventListener('change', function (event) {
    if (event.target.classList.contains('select-row')) {
      var selectAll = document.getElementById('select-all');
      if (!event.target.checked) {
        selectAll.checked = false;
        selectAll.indeterminate = true;
      } else {
        var checkboxes = tbody.querySelectorAll('.select-row');
        var allChecked = true;
        for (var checkbox of checkboxes) {
          if (!checkbox.checked) {
            allChecked = false;
            break;
          }
        }
        selectAll.checked = allChecked;
        selectAll.indeterminate = !allChecked;
      }
    }
  });


// Filter table based on the selected filter values
function filterTable() {
    var role = document.getElementById('role-filter').value;
    //   var department = document.getElementById('department-filter').value;
    var branch = document.getElementById('branch-filter').value;
    var status = document.getElementById('status-filter').value;

    table.column(2).search(role ? '^' + role + '$' : '', true, false);
    //   table.column(3).search(department ? '^' + department + '$' : '', true, false);
    table.column(4).search(branch ? '^' + branch + '$' : '', true, false);
    table.column(5).search(status ? '^' + status + '$' : '', true, false);

    table.draw();
  }

  // Add event listeners to the filter dropdowns
  document.getElementById('role-filter').addEventListener('change', filterTable);
  // document.getElementById('department-filter').addEventListener('change', filterTable);
  document.getElementById('branch-filter').addEventListener('change', filterTable);
  document.getElementById('status-filter').addEventListener('change', filterTable);
});


