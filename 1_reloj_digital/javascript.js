
    let actualizarHora = function(){
        const fecha = new Date();
        let horas = fecha.getHours();
        let ampm;
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        const diaSemana = fecha.getDay();
        const dia = fecha.getDate();
        const mes = fecha.getMonth();
        const year = fecha.getFullYear();
    

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
        
        pDia.textContent = dia;

        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];

        pYear.textContent = year;

        
        if (horas >= 12) {
           horas = horas - 12; 
           ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        if (horas == 0) {
            horas = 12; 
        }
   
        
        if (minutos < 10 ){  minutos = "0"+ minutos};

        if (segundos < 10) { segundos = "0"+ segundos}

        if (horas  < 10 ){ horas = "0" + horas };
        
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;





    };

   
    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000);


