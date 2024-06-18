$(document).ready(function() {
    // Sample data object
    var data = [
        { name: "John Doe", age: 30, occupation: "Engineer" },
        { name: "Jane Smith", age: 25, occupation: "Designer" },
        { name: "Sam Brown", age: 35, occupation: "Developer" }
    ];

    // Create a table element
    var $table = $('<table></table>').addClass('data-table');

    // Add table header
    var $thead = $('<thead></thead>');
    var $headerRow = $('<tr></tr>');
    $headerRow.append($('<th></th>').text('Name'));
    $headerRow.append($('<th></th>').text('Age'));
    $headerRow.append($('<th></th>').text('Occupation'));
    $thead.append($headerRow);
    $table.append($thead);

    // Add table body
    var $tbody = $('<tbody></tbody>');
    data.forEach(function(item) {
        var $row = $('<tr></tr>');
        $row.append($('<td></td>').text(item.name));
        $row.append($('<td></td>').text(item.age));
        $row.append($('<td></td>').text(item.occupation));
        $tbody.append($row);
    });
    $table.append($tbody);

    // Append the table to the container
    $('#table-container').append($table);
});