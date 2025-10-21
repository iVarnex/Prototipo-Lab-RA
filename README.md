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
-   npm

## Instalación
1.  Clona este repositorio.
2.  Navega hasta el directorio raíz del proyecto en tu terminal.
3.  Instala las dependencias:
    ```bash
    npm install
    ```

## Ejecución del Proyecto
Para iniciar el servidor de desarrollo:
```bash
npm run dev
```
Esto iniciará un servidor local. Vite te proporcionará varias URLs en la terminal. Para probar la funcionalidad de Realidad Aumentada, **debes usar la dirección de red (Network) que empieza por `https://`**.

## 📱 Pruebas en Dispositivos Móviles

Para que tu teléfono móvil pueda acceder al servidor de desarrollo de tu PC, ambos deben estar en la misma red Wi-Fi y debes configurar el firewall de tu PC para permitir la conexión.

1.  **Busca tu IP local**:
    -   En Windows, abre una terminal (Símbolo del sistema o PowerShell) y ejecuta el comando `ipconfig`.
    -   Busca la dirección que dice "Dirección IPv4". Generalmente es algo como `192.168.1.X`.

2.  **Abre el puerto en el Firewall de Windows**:
    -   Abre "Firewall de Windows Defender con seguridad avanzada".
    -   Haz clic en "Reglas de entrada" en el panel izquierdo.
    -   En el panel derecho, haz clic en "Nueva regla...".
    -   Selecciona `Puerto` y haz clic en "Siguiente".
    -   Selecciona `TCP` y en "Puertos locales específicos", escribe el puerto que usa Vite (normalmente es `5173`).
    -   Selecciona "Permitir la conexión" y avanza.
    -   Asegúrate de que la regla se aplique al perfil de red "Privada".
    -   Dale un nombre a la regla (ej. "Vite Dev Server") y finaliza.

3.  **Accede desde tu móvil**:
    -   Abre el navegador en tu teléfono y escribe la dirección de red que te dio Vite al iniciar el servidor. Será algo como: `https://192.168.1.X:5173`.

## Modelos 3D
Los modelos 3D se encuentran en la carpeta `assets/models/` y deben estar en formato GLB para ser utilizados eficientemente con `<model-viewer>`.

## Experimentos
La carpeta `experiments/` contiene archivos HTML de ejemplo que demuestran diferentes configuraciones y usos de `<model-viewer>`.
