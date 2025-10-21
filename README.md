# Prototipo de Laboratorio Educativo 3D en Realidad Aumentada

## Descripción del Proyecto
Este proyecto es un prototipo de laboratorio educativo en Realidad Aumentada (RA) diseñado para visualizar modelos 3D interactivos en un entorno web. Utiliza la tecnología WebXR a través del componente `<model-viewer>` de Google, lo que permite la compatibilidad con ARKit (iOS) y ARCore (Android) para experiencias de RA en dispositivos móviles. El objetivo es proporcionar una herramienta interactiva para la enseñanza y el aprendizaje de conceptos tridimensionales.

## ✨ Características
- **Interfaz de Usuario Mejorada**: Estilos actualizados para una apariencia más moderna y limpia.
- **Interruptor de Tema**: Un botón (☀️/🌙) permite cambiar entre un tema oscuro (por defecto) y un tema claro.
- **Persistencia de Tema**: La elección del tema se guarda en el navegador, por lo que se mantiene en futuras visitas y al navegar entre experimentos.
- **Botones Personalizados**: Diseño de botones unificado y mejorado en toda la aplicación para una experiencia de usuario más consistente.

## Estructura del Proyecto
-   `index.html`: Archivo principal de la aplicación web.
-   `package.json`: Define las dependencias del proyecto y los scripts de ejecución.
-   `vite.config.js`: Configuración del servidor de desarrollo Vite.
-   `assets/`: Contiene los recursos estáticos del proyecto.
    -   `assets/css/`: Archivos CSS (Bootstrap y estilos personalizados).
    -   `assets/Js/`: Archivos JavaScript (lógica principal de la aplicación).
    -   `assets/models/`: Modelos 3D en formato GLB.
-   `experiments/`: Archivos HTML de ejemplo para probar funcionalidades específicas (ej. `ejemplo-modelo-local.html`, `model-viewer-ar.html`).

## Requisitos
-   Node.js (versión 14 o superior recomendada)
-   npm o Yarn

## Instalación
1.  Clona este repositorio (si aplica) o descarga los archivos del proyecto.
2.  Navega hasta el directorio raíz del proyecto en tu terminal.
3.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```

## Ejecución del Proyecto
Para iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```
Esto iniciará un servidor local (generalmente en `http://localhost:5173`). Abre esta URL en tu navegador para ver el prototipo.

## Modelos 3D
Los modelos 3D se encuentran en la carpeta `assets/models/` y deben estar en formato GLB para ser utilizados eficientemente con `<model-viewer>`.

## Experimentos
La carpeta `experiments/` contiene archivos HTML de ejemplo que demuestran diferentes configuraciones y usos de `<model-viewer>`, como la carga de modelos locales (`ejemplo-modelo-local.html`) y la activación de la experiencia de Realidad Aumentada (`model-viewer-ar.html`).