
const menu = document.getElementById('mobile-menu');
const open = document.getElementById('open');
const close = document.getElementById('close');

function openmobilenav() {
    var scrollTop = document.getElementById('page2').pageYOffset || document.documentElement.scrollTop;
    menu.style.display = 'block';
    menu.style.position = 'absolute';
    menu.style.top = scrollTop + 'px';
    menu.style.left = 0 + 'px';
    document.body.style.overflow = 'hidden';
    open.style.display = 'none';
    close.style.display = 'block';
}



function closemobilenav() {
    menu.style.display = 'none';
    document.body.style.overflow = 'initial';
    open.style.display = 'block';
    close.style.display = 'none';
}

function scrollToApropos() {
    document.getElementById('APROPOS').scrollIntoView({ behavior: 'smooth' });
    menu.style.display = 'none';
    document.body.style.overflow = 'initial';
    open.style.display = 'block';
    close.style.display = 'none';
}

function scrollToAlternance() {
    document.getElementById('ALTERNANCE-TITLE').scrollIntoView({ behavior: 'smooth' });
    menu.style.display = 'none';
    document.body.style.overflow = 'initial';
    open.style.display = 'block';
    close.style.display = 'none';
}

function scrollToProjets() {
    document.getElementById('PROJETS').scrollIntoView({ behavior: 'smooth' });
    menu.style.display = 'none';
    document.body.style.overflow = 'initial';
    open.style.display = 'block';
    close.style.display = 'none';
}

function scrollToContact() {
    document.getElementById('CONTACT').scrollIntoView({ behavior: 'smooth' });
    menu.style.display = 'none';
    document.body.style.overflow = 'initial';
    open.style.display = 'block';
    close.style.display = 'none';
}

function scrollToVeille() {
    document.getElementById('VEILLE').scrollIntoView({ behavior: 'smooth' });
    menu.style.display = 'none';
    document.body.style.overflow = 'initial';
    open.style.display = 'block';
    close.style.display = 'none';
}






//show backToTop button on scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

//back to top on click
backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});



window.addEventListener("mousemove", handleMouseMove = (event) => {
    const y = event.pageY;
    const x = event.pageX;
    const ref = document.querySelector('#cursor');
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    ref.style.left = x - scrollLeft + 'px';
    ref.style.top = y - scrollTop + 'px';
});

window.addEventListener('resize', allowscroll);

function allowscroll() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth >= 765) {
        document.body.style.overflow = 'initial';
    }
}



//line that grow when page scroll
// const line = document.querySelector('.line');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     line.style.width = value / 3.32 + 'px';
// });



let viewportWidth = window.innerWidth;
if (viewportWidth <= 765) {
    var placementHAUT = "right";
    var placementBAS = "right";

} else {
    var placementHAUT = "top";
    var placementBAS = "bottom";
}

window.addEventListener('resize', positionnement);


async function positionnement() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth <= 765) {
        const state = await popperInstanceDEBUT.setOptions({ placement: 'right' });
        const state2 = await popperInstance.setOptions({ placement: 'right' });
        const state3 = await popperInstanceIRIS.setOptions({ placement: 'right' });
        const state4 = await popperInstanceSTAGE.setOptions({ placement: 'right' });
        const state5 = await popperInstanceDANNEE.setOptions({ placement: 'right' });
        const state6 = await popperInstanceALTERNANCE.setOptions({ placement: 'right' });

    } else {
        const state = await popperInstanceDEBUT.setOptions({ placement: 'top' });
        const state2 = await popperInstance.setOptions({ placement: 'bottom' });
        const state3 = await popperInstanceIRIS.setOptions({ placement: 'top' });
        const state4 = await popperInstanceSTAGE.setOptions({ placement: 'bottom' });
        const state5 = await popperInstanceDANNEE.setOptions({ placement: 'top' });
        const state6 = await popperInstanceALTERNANCE.setOptions({ placement: 'bottom' });
    }
}
const DEBUT = document.querySelector('#DEBUT');
const tooltipDEBUT = document.querySelector('#tooltip-DEBUT');

const popperInstanceDEBUT = Popper.createPopper(DEBUT, tooltipDEBUT, {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 15],
            },
        },
    ],
    placement: placementHAUT
});




const button = document.querySelector('#BAC');
const tooltip = document.querySelector('#tooltip-BAC');

const popperInstance = Popper.createPopper(button, tooltip, {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 15],
            },
        },
    ],
    placement: placementBAS
});


const IRIS = document.querySelector('#IRIS');
const tooltipIRIS = document.querySelector('#tooltip-IRIS');

const popperInstanceIRIS = Popper.createPopper(IRIS, tooltipIRIS, {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 15],
            },
        },
    ],
    placement: placementHAUT
});



const STAGE = document.querySelector('#STAGE');
const tooltipSTAGE = document.querySelector('#tooltip-STAGE');

const popperInstanceSTAGE = Popper.createPopper(STAGE, tooltipSTAGE, {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 15],
            },
        },
    ],
    placement: placementBAS
});






const DANNEE = document.querySelector('#ANNEE');
const tooltipDANNEE = document.querySelector('#tooltip-ANNEE');

const popperInstanceDANNEE = Popper.createPopper(DANNEE, tooltipDANNEE, {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 15],
            },
        },
    ],
    placement: placementHAUT
});







const ALTERNANCE = document.querySelector('#ALTERNANCE');
const tooltipALTERNANCE = document.querySelector('#tooltip-ALTERNANCE');

const popperInstanceALTERNANCE = Popper.createPopper(ALTERNANCE, tooltipALTERNANCE, {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 15],
            },
        },
    ],
    placement: placementBAS
});

























const HTML = document.getElementById('HTML');
const CSS = document.getElementById('CSS');
const JS = document.getElementById('JS');
const PHP = document.getElementById('PHP');
const MYSQL = document.getElementById('MYSQL');
const CHARTSJS = document.getElementById('CHARTSJS');
const APACHE = document.getElementById('APACHE');
const NODEJS = document.getElementById('NODEJS');

new Chart(HTML, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [9, 1],
            borderWidth: 0,
            backgroundColor: ["#E1C118", "#3D3D3D"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        cutout: 70,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'HTML',
                color: "white"
            }
        }
    }
});

new Chart(CSS, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [7.5, 2.5],
            borderWidth: 0,
            backgroundColor: ["#E1C118", "#3D3D3D"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        cutout: 70,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'CSS',
                color: "white"
            }
        }
    }
});


new Chart(JS, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [5.5, 4.5],
            borderWidth: 0,
            backgroundColor: ["#E1C118", "#3D3D3D"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        cutout: 70,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'JAVA SCRIPT',
                color: "white"
            }
        }
    }
});



new Chart(PHP, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [6, 4],
            borderWidth: 0,
            backgroundColor: ["#E1C118", "#3D3D3D"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        cutout: 70,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'PHP',
                color: "white"
            }
        }
    }
});


new Chart(MYSQL, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [7, 3],
            borderWidth: 0,
            backgroundColor: ["#E1C118", "#3D3D3D"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        cutout: 70,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'MYSQL',
                color: "white"
            }
        }
    }
});



new Chart(CHARTJS, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [7, 3],
            borderWidth: 0,
            backgroundColor: ["#E1C118", "#3D3D3D"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        cutout: 70,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'CHARTS JS',
                color: "white"
            }
        }
    }
});



new Chart(APACHE, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [8, 2],
            borderWidth: 0,
            backgroundColor: ["#E1C118", "#3D3D3D"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        cutout: 70,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'APACHE',
                color: "white"
            }
        }
    }
});



new Chart(NODEJS, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [5, 5],
            borderWidth: 0,
            backgroundColor: ["#E1C118", "#3D3D3D"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        cutout: 70,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false // <-- this option disables tooltips
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'NODE JS',
                color: "white"
            }
        }
    }
});

