let data = [
    {
        "date": "2023-08-21",
        "weight": 79
    },
    {
        "date": "2023-09-20",
        "weight": 81
    },
    {
        "date": "2023-10-22",
        "weight": 78
    },
    {
        "date": "2023-11-20",
        "weight": 80
    }
];
let weightChart;
createTable(data);

function createTable(data) {
    for (let i = 0; i < data.length; i++) {
        var tableRow = "";
        const tr = document.createElement('tr');
        tableRow += `<td>${data[i].date}</td>`;
        tableRow += `<td>${data[i].weight} kg</td>`;
        tr.innerHTML = tableRow;
        document.getElementById("tbody").append(tr);
    }

    createChart(data);
}

function createChart() {
    var labels = [];
    var dataset = [];
    for (let j = 0; j < data.length; j++) {
        labels.push(data[j].date);
        dataset.push(data[j].weight);
    }

    const weightData = {
        labels: labels,
        datasets: [{
            axis: 'y',
            label: 'Weight Chart',
            data: dataset,
            fill: true,
            backgroundColor: '#8DD7FF',
            borderColor: '#204886',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'line',
        data: weightData,
        options: {
            indexAxis: 'x',
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    };

    const ctx = document.getElementById('weightChart');
    weightChart = new Chart(ctx, config);
}

const addButton = document.getElementById("add");
const dialog = document.getElementById("dialogBox");
const updateButton = document.getElementById("update");
const cancelButton = document.getElementById("cancel");

addButton.addEventListener("click", () => {
    dialog.showModal();
});

updateButton.addEventListener("click", (e) => {
    e.preventDefault();
    const weightInput = document.getElementById("weight").value;
    const dateInput = document.getElementById("date").value;

    if (!weightInput) {
        document.getElementById("error1").textContent = "Weight Input Required!"
    }
    else {
        document.getElementById("error1").textContent = ""
    }
    if (!dateInput) {
        document.getElementById("error2").textContent = "Date Input Required!"
    }
    else {
        document.getElementById("error2").textContent = ""
    }
    if (weightInput && dateInput) {
        const updateData = {
            "date": dateInput,
            "weight": weightInput
        };
        data.push(updateData);
        console.log(data);
        updateTable();
        dialog.close();
        document.getElementById("weightForm").reset();
    }
});

function updateTable() {
    var tableRow = "";
    const tr = document.createElement('tr');
    tableRow += `<td>${data[data.length - 1].date}</td>`;
    tableRow += `<td>${data[data.length - 1].weight} kg</td>`;
    tr.innerHTML = tableRow;
    document.getElementById("tbody").append(tr);
    weightChart.destroy();
    createChart();
}

cancelButton.addEventListener("click", () => {
    dialog.close();
});