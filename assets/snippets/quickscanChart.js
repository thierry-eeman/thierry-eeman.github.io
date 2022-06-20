// Field Lists
const functionality = [
    'field_h6ez0-0', 'field_h6ez0-1', 'field_h6ez0-2', 'field_h6ez0-3',
    'field_1w83v-0', 'field_1w83v-1', 'field_1w83v-2', 'field_1w83v-3',
    'field_t8gwf-0', 'field_t8gwf-1', 'field_t8gwf-2', 'field_t8gwf-3',
    'field_a0uzp-0', 'field_a0uzp-1', 'field_a0uzp-2', 'field_a0uzp-3'];
const interaction = [
    'field_vp7tp-0', 'field_vp7tp-1', 'field_vp7tp-2', 'field_vp7tp-3',
    'field_3jyhk-0', 'field_3jyhk-1', 'field_3jyhk-2', 'field_3jyhk-3',
    'field_b13ka-0', 'field_b13ka-1', 'field_b13ka-2', 'field_b13ka-3',
    'field_yma1n-0', 'field_yma1n-1', 'field_yma1n-2', 'field_yma1n-3'];
const transfer = [
    'field_hoxuw-0', 'field_hoxuw-1', 'field_hoxuw-2', 'field_hoxuw-3',
    'field_pzioc-0', 'field_pzioc-1', 'field_pzioc-2', 'field_pzioc-3',
    'field_i6f04-0', 'field_i6f04-1', 'field_i6f04-2', 'field_i6f04-3',
    'field_nehps-0', 'field_nehps-1', 'field_nehps-2', 'field_nehps-3'];
const strategy = [
    'field_o67zl-0', 'field_o67zl-1', 'field_o67zl-2', 'field_o67zl-3',
    'field_w730l-0', 'field_w730l-1', 'field_w730l-2', 'field_w730l-3',
    'field_ht9bk-0', 'field_ht9bk-1', 'field_ht9bk-2', 'field_ht9bk-3',
    'field_lw4x7-0', 'field_lw4x7-1', 'field_lw4x7-2', 'field_lw4x7-3'];
const motivation = [
    'field_qjai2-0', 'field_qjai2-1', 'field_qjai2-2', 'field_qjai2-3',
    'field_lj3m2-0', 'field_lj3m2-1', 'field_lj3m2-2', 'field_lj3m2-3',
    'field_j1qbp-0', 'field_j1qbp-1', 'field_j1qbp-2', 'field_j1qbp-3',
    'field_vr8qj-0', 'field_vr8qj-1', 'field_vr8qj-2', 'field_vr8qj-3'];

// Chart
const ctx = document.getElementById('myChart');
const bgColor = {
    id: 'bgColor',
    beforeDraw: (chart, steps, options) => {
        const { ctx, width, height } = chart;
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
    }
};

const Chart = require('chart.js')
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Functionaliteit', 'Interactie', 'Transfer', 'Strategie-instructie', 'Leesmotivatie'],
        datasets: [{
            label: '# of Votes',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            autocolors: false,
            title: {
                display: false,
                text: 'Resultaten Quickscan Leescoach'
            },
            bgColor: {
                backgroundColor: 'white'
            }
        }
    },
    plugins: ['chartjs-plugin-annotation', bgColor]
});

function pieSlice(list, index) {
    list.forEach((element) => {
        const button = document.getElementById(element);
        button.addEventListener('click', function () {
            let counter = 0;
            console.log(button);
            list.forEach((element) => {
                const buttonCheck = document.getElementById(element);
                if (buttonCheck.checked === true) {
                    if (buttonCheck.value === '(Eerder) niet akkoord') {
                        counter += 1;
                    }
                    if (buttonCheck.value === '(Eerder) akkoord') {
                        counter += 2;
                    }
                    if (buttonCheck.value === 'Helemaal akkoord') {
                        counter += 3;
                    }
                }
            });
            console.log(counter);
            myChart.data.datasets[0].data[index] = counter;
            myChart.update();
        });
    });
}

pieSlice(functionality, 0);
pieSlice(interaction, 1);
pieSlice(transfer, 2);
pieSlice(strategy, 3);
pieSlice(motivation, 4);