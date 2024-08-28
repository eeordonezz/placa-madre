const vinculomother = document.querySelector(".placa_madre");

vinculomother.innerHTML = `
    <div id="seccion1">
        <h2>Selecciona un Componente</h2>

        <label>
            <input type="checkbox" value="componente0" class="component-checkbox"> Placa Madre
        </label>
        <label>
            <input type="checkbox" value="componente1" class="component-checkbox"> CHIPS
        </label>
        <label>
            <input type="checkbox" value="componente2" class="component-checkbox"> DISIPADORES
        </label>
        <label>
            <input type="checkbox" value="componente3" class="component-checkbox"> Fuente De Poder
        </label>
        <label>
            <input type="checkbox" value="componente5" class="component-checkbox"> Ranuras
        </label>
       
    </div>

    <div id="seccion2">
        <h2>MotherBoard</h2>
        <img id="componente-imagen" src="https://www.build-gaming-computers.com/images/anatomy-of-computer-motherboard.jpg" alt="Imagen del Component" />
        <div id="botones-componente">
            <button class="component-button" id="btn-componente0" style="display: none;" data-componente="componente0">Placa Madre</button>
            <button class="component-button" id="btn-componente1" style="display: none;" data-componente="componente1">CPU</button>
            <button class="component-button" id="btn-componente2" style="display: none;" data-componente="componente2">GPU</button>
            <button class="component-button" id="btn-componente3" style="display: none;" data-componente="componente3">Fuente De Poder</button>
            <button class="component-button" id="btn-componente4" style="display: none;" data-componente="componente4">Bios</button>
            <button class="component-button" id="btn-componente5" style="display: none;" data-componente="componente5">Ram</button>
            <button class="component-button" id="btn-componente6" style="display: none;" data-componente="componente6">Disipador</button>
        </div>
    </div>

    <div id="seccion3">
        <h2>Información del Componente</h2>
        <div id="componente-info"></div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.component-checkbox');
    const buttons = document.querySelectorAll('.component-button');
    const infoDiv = document.getElementById('componente-info');

    const componentes = {
        'componente0': {
            imagen: 'https://www.easypc.io/wp-content/uploads/2023/12/img/gpu/1080ti/motherboard/gaming.png', 
            info: `
                <h3>Placa Madre (Motherboard)</h3>
                <p><strong>Función:</strong> Conecta y permite la comunicación entre todos los componentes de la PC, gestionando el flujo de datos y la energía.</p>
                <p><strong>Tipos y Factores de Forma:</strong> ATX, Micro-ATX, Mini-ITX, donde ATX es el más común.</p>
                <p><strong>Chipset:</strong> Maneja las comunicaciones entre el CPU, memoria, GPU, y otros periféricos.</p>
                <p><strong>Ranuras de Expansión:</strong> Incluyen PCIe, M.2, y puertos SATA.</p>
                <p><strong>Puertos y Conectores:</strong> USB, Ethernet, HDMI, DisplayPort, y puertos de audio.</p>
            `
        },
        'componente1': {
            imagen: 'https://img.freepik.com/vector-premium/procesador-computadora-aislado-blanco_169241-946.jpg', 
            info: `
                <h3>CPU (Unidad Central de Procesamiento)</h3>
                <p><strong>Función:</strong> Realiza las instrucciones de programas y cálculos esenciales.</p>
                <p><strong>Núcleos:</strong> Cada núcleo puede ejecutar su propio hilo de tareas.</p>
                <p><strong>Velocidad de Reloj:</strong> Medida en GHz, determina cuántas operaciones puede realizar por segundo.</p>
                <p><strong>Caché:</strong> Almacena instrucciones frecuentemente utilizadas, mejorando la velocidad.</p>
                <p><strong>Hyper-Threading/SMT:</strong> Permite a cada núcleo manejar dos hilos de procesamiento a la vez.</p>
                <p><strong>Overclocking:</strong> Aumenta la velocidad de reloj para mayor rendimiento.</p>
            `
        },
        'componente2': {
            imagen: 'https://static.vecteezy.com/system/resources/previews/014/351/807/non_2x/gpu-icon-cartoon-style-vector.jpg',
            info: `
                <h3>GPU (Unidad de Procesamiento Gráfico)</h3>
                <p><strong>Función:</strong> Renderiza gráficos y videos, esencial para juegos y aplicaciones 3D.</p>
                <p><strong>Tipos:</strong> Integrada (para tareas básicas) y Dedicada (para aplicaciones gráficas intensivas).</p>
                <p><strong>VRAM:</strong> Influye en la capacidad para manejar texturas y resoluciones altas.</p>
                <p><strong>Núcleos CUDA/Cores Stream:</strong> Indicador de la potencia de procesamiento de la GPU.</p>
                <p><strong>Ray Tracing:</strong> Tecnología para un renderizado más realista de la iluminación.</p>
                <p><strong>Puertos de Salida:</strong> HDMI, DisplayPort, y otros para conectar monitores.</p>
            `
        },
        'componente3': {
            imagen: 'https://cdn-icons-png.flaticon.com/512/1470/1470179.png', 
            info: `
                <h3>Fuente De Poder </h3>
                <p><strong>Función:</strong> Convierte la corriente alterna en continua, crucial para la estabilidad del sistema.</p>
                <p><strong>Potencia:</strong> Medida en vatios (W), determina cuánta energía puede proporcionar.</p>
                <p><strong>Eficiencia:</strong> Indicada por certificaciones como 80 PLUS (Bronze, Silver, Gold, Platinum).</p>
                <p><strong>Modularidad:</strong> Permite conectar solo los cables necesarios, mejorando la gestión de cables.</p>
                <p><strong>Protecciones:</strong> Contra sobrecargas, cortocircuitos, y picos de voltaje.</p>
            `
        },
        'componente4': {
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0b5XiLyYDZ_JRN2Gd1r5-J4yC5ZDRYKGrA&s', 
            info: `
                <h3>BIOS </h3>
                <p><strong>Función:</strong> Inicia el hardware del sistema y prepara el PC para el sistema operativo.</p>
                <p><strong>UEFI:</strong> Versión más moderna del BIOS, ofrece una interfaz gráfica y soporte para discos de más de 2TB.</p>
                <p><strong>Configuración:</strong> Permite configurar la secuencia de arranque, activar o desactivar puertos y dispositivos.</p>
                <p><strong>Actualizaciones:</strong> Agregan compatibilidad con nuevos componentes y corrigen errores.</p>
            `
        },
        'componente5': {
            imagen: 'https://i.blogs.es/3ce3df/ddr5/1366_521.jpg', 
            info: `
                <h3>RAM </h3>
                <p><strong>Función:</strong> Almacena temporalmente datos y programas para acceso rápido por el CPU.</p>
                <p><strong>Tipos:</strong> DDR4 es la más común, DDR5 es la nueva generación con mayores velocidades.</p>
                <p><strong>Capacidad:</strong> 8 GB es lo mínimo recomendado para tareas generales, 16 GB o más para gaming y aplicaciones intensivas.</p>
                <p><strong>Velocidad:</strong> Medida en MHz, afecta la rapidez con la que la RAM puede leer y escribir datos.</p>
                <p><strong>Latencia:</strong> Tiempo que tarda la RAM en acceder a los datos.</p>
            `
        },
        'componente6': {
            imagen: 'https://cdn.kemik.gt/2020/12/E97379-003-INTEL-1200x1200-1-1-526x526.jpg', 
            info: `
                <h3>Disipador </h3>
                <p><strong>Función:</strong> Mantiene la temperatura del CPU o GPU al enfriarlo para evitar el sobrecalentamiento.</p>
                <p><strong>Tipos:</strong> Disipadores de aire (con ventiladores) y de agua (con radiadores y bombas).</p>
                <p><strong>Tamaño:</strong> A mayor tamaño, mayor capacidad de enfriamiento.</p>
                <p><strong>Compatibilidad:</strong> Asegúrate de que sea compatible con tu socket de CPU.</p>
                <p><strong>Ruido:</strong> Los ventiladores pueden generar ruido, elige uno silencioso si es importante para ti.</p>
            `
        }
    };

    function updateComponentInfo(componenteId) {
        const componente = componentes[componenteId];
        if (componente) {
            infoDiv.innerHTML = `
                <h3>${componenteId.replace('componente', '')}</h3>
                <img src="${componente.imagen}" alt="${componenteId}" style="width: 300px; height: auto;"/>
                ${componente.info}
            `;
        }
    }

    function updateButtonsVisibility() {
        const checkedValues = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        buttons.forEach(button => {
            const buttonComponent = button.dataset.componente;

            if (checkedValues.includes('componente0')) {
                button.style.display = 'inline-block'; 
            } else if (checkedValues.includes('componente1') && (buttonComponent === 'componente1' || buttonComponent === 'componente4')) {
                button.style.display = 'inline-block'; 
            } else if (checkedValues.includes('componente2') && (buttonComponent === 'componente2' || buttonComponent === 'componente6')) {
                button.style.display = 'inline-block'; 
            } else if (checkedValues.includes('componente3') && buttonComponent === 'componente3') {
                button.style.display = 'inline-block'; 
            } else if (checkedValues.includes('componente5') && buttonComponent === 'componente5') {
                button.style.display = 'inline-block'; 
            } else {
                button.style.display = 'none';
            }
        });

        if (checkedValues.length === 0) {
            infoDiv.innerHTML = '';
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateButtonsVisibility();
        });
    });

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const componenteId = event.target.dataset.componente;
            updateComponentInfo(componenteId);
        });
    });

});