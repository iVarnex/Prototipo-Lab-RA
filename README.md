# Laboratorio AR Educativo

Este proyecto es una aplicación web diseñada para ofrecer experiencias educativas interactivas sobre conceptos de física y química a través de la realidad aumentada (AR). La aplicación utiliza la cámara de un dispositivo (preferiblemente un celular) para superponer modelos 3D en el mundo real.

## ✨ Características

- **Basado en la Web:** No requiere instalación. Accesible desde cualquier navegador moderno.
- **Realidad Aumentada sin Marcadores (Markerless):** Permite colocar modelos 3D en cualquier superficie del mundo real (suelo, mesas) utilizando la tecnología nativa del dispositivo.
- **Modular:** Fácil de extender con nuevos modelos 3D (`.glb`).
- **Diseño Responsivo:** Interfaz limpia y adaptable a diferentes tamaños de pantalla.

## 🚀 Tecnologías Utilizadas

- **`<model-viewer>` (de Google):** El componente principal para la experiencia de Realidad Aumentada. Permite visualizar modelos 3D (`.glb`) en el mundo real a través de ARCore (Android) y ARKit (iOS).
- **HTML5 / CSS3 / JavaScript ES6:** La base de la aplicación web.
- **[Vite](https://vitejs.dev/):** Herramienta de desarrollo para un servidor local rápido y empaquetado eficiente.
- **[vite-plugin-mkcert](https://github.com/liuweiGL/vite-plugin-mkcert):** Genera certificados SSL locales para habilitar un entorno de desarrollo seguro (HTTPS), necesario para probar funciones de AR.

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
    Vite iniciará un servidor de desarrollo seguro (HTTPS) y lo hará accesible en tu red local. Podrás acceder a él desde tu celular usando la dirección IP de tu computadora (ej. `https://192.168.1.10:5173`).

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
│   ├── Js/                   # Scripts de JavaScript
│   └── models/               # Contiene los modelos 3D en formato .glb
└── experiments/
    └── ...                   # Archivos HTML para cada escena AR individual
```
---
*Este README se mantendrá actualizado con cada cambio significativo en el proyecto.*