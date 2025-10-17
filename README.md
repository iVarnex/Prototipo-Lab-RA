# Laboratorio 3D Interactivo con Realidad Aumentada

Este proyecto es una aplicación web diseñada para ofrecer experiencias educativas interactivas a través de la realidad aumentada (AR). La aplicación permite a los usuarios visualizar modelos 3D en su propio entorno utilizando la cámara de un dispositivo móvil.

## ✨ Características

- **Basado en la Web:** No requiere instalación. Accesible desde cualquier navegador moderno.
- **Realidad Aumentada sin Marcadores (Markerless):** Permite colocar modelos 3D en cualquier superficie del mundo real (suelo, mesas) utilizando la tecnología nativa del dispositivo.
- **Modular:** Fácil de extender con nuevos modelos 3D (`.glb`).
- **Diseño Responsivo:** Interfaz limpia y adaptable a diferentes tamaños de pantalla.

## 🚀 Tecnologías Utilizadas

- **`<model-viewer>` (de Google):** El componente principal para la experiencia de Realidad Aumentada. Permite visualizar modelos 3D (`.glb`) en el mundo real a través de ARCore (Android) y ARKit (iOS).
- **HTML5 / CSS3 / JavaScript ES6:** La base de la aplicación web.
- **[Vite](https://vitejs.dev/):** Herramienta de desarrollo para un servidor local rápido y empaquetado eficiente.

## ✅ Requerimientos

- **Node.js** (v18 o superior recomendado)
- **npm** (se instala automáticamente con Node.js)
- Un navegador web moderno en un smartphone compatible con ARCore/ARKit.

## 🔧 Cómo Iniciar el Servidor

1.  **Instalar dependencias:** Abre una terminal en la raíz del proyecto y ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo:** Una vez instaladas las dependencias, ejecuta:
    ```bash
    npm run dev
    ```
    Vite iniciará el servidor y te proporcionará una URL local (generalmente `https://localhost:5173`) pero para abrirlo en celular tienes que abrirlo con la opcion de Network (es decir, la IP + 5173.) Normalmente se debera configurar el firewall para que deje entrar otros dispositivos a la conexion de la IP.

## 📱 Cómo Usar

1.  **Accede a la aplicación:** Abre la URL del servidor desde el navegador de tu smartphone.

2.  **Selecciona un experimento:** Elige una de las opciones disponibles. Verás un modelo 3D en la página. Pulsa el icono de Realidad Aumentada (usualmente en la esquina inferior derecha) para activar la cámara. Mueve tu teléfono para detectar una superficie y toca la pantalla para colocar el objeto.

## 📁 Estructura del Proyecto

```
/
├── index.html                # Punto de entrada de la aplicación
├── package.json              # Dependencias y scripts del proyecto
├── vite.config.js            # Configuración de Vite
├── README.md                 # Este archivo
├── assets/
│   ├── css/                  # Estilos CSS
│   └── models/               # Contiene los modelos 3D en formato .glb
└── experiments/
    └── ...                   # Archivos HTML para cada escena AR individual
```
---
*Este README se mantendrá actualizado con cada cambio significativo en el proyecto.*