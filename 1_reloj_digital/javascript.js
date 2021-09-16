(function(){
    let actualizarHora = function(){
        let fecha = new Date();
        let horas = fecha.getHours();
        let ampm;
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let diaSemana = fecha.getDay();
        let dia = fecha.getDate();
        let mes = fecha.getMounth();
        let year = fecha.getFullYear();
    

        const pHoras = document.getElementById('horas');
        const pAMPM = document.getElementById('ampm');
        const pMinutos = document.getElementById('minutos');
        const pSegundos = document.getElementById('segundos');
        const pDiaSemana = document.getElementById('diaSemana');
        const pDia = document.getElementById('dia');
        const pMes = document.getElementById('mes');
        const pYear = document.getElementById('year');
        
        const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];
        
    };
    actualizarHora();
} () )

