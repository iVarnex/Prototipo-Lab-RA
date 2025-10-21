# Prototipo de Laboratorio Educativo 3D en Realidad Aumentada

## Descripción del Proyecto
Este proyecto es un prototipo de laboratorio educativo en Realidad Aumentada (RA) diseñado para visualizar modelos 3D interactivos en un entorno web. Utiliza la tecnología WebXR a través del componente `<model-viewer>` de Google, lo que permite la compatibilidad con ARKit (iOS) y ARCore (Android) para experiencias de RA en dispositivos móviles. El objetivo es proporcionar una herramienta interactiva para la enseñanza y el aprendizaje de conceptos tridimensionales.

## Estructura del Proyecto
-   `index.html`: Archivo principal de la aplicación web.
-   `package.json`: Define las dependencias del proyecto y los scripts de ejecución.
-   `vite.config.js`: Configuración del servidor de desarrollo Vite.
-   `public/`: Contiene los recursos estáticos del proyecto.
    -   `public/assets/css/`: Archivos CSS (Bootstrap y estilos personalizados).
    -   `public/assets/Js/`: Archivos JavaScript (lógica principal de la aplicación).
    -   `public/assets/models/`: Modelos 3D en formato GLB.
    -   `public/experiments/`: Archivos HTML de ejemplo para probar funcionalidades específicas (ej. `ejemplo-modelo-local.html`, `model-viewer-ar.html`).

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

## Configuración de Firewall para Pruebas en Dispositivos Móviles
Para probar el prototipo en dispositivos móviles conectados a la misma red Wi-Fi, es posible que necesites configurar tu firewall para permitir el acceso a tu servidor local.

### Acceso a `localhost` desde Dispositivos Móviles (HTTP)
1.  **Identifica tu IP local**: En Windows, abre el Símbolo del sistema y ejecuta `ipconfig`. Busca la dirección IPv4 de tu adaptador de red (ej. `192.168.1.X`).
2.  **Abre el puerto en el Firewall de Windows**:
    -   Ve a "Panel de control" > "Sistema y seguridad" > "Firewall de Windows Defender" > "Configuración avanzada".
    -   En el panel izquierdo, selecciona "Reglas de entrada".
    -   En el panel derecho, haz clic en "Nueva regla...".
    -   Selecciona "Puerto" y haz clic en "Siguiente".
    -   Selecciona "TCP" y en "Puertos locales específicos", introduce el puerto que usa Vite (por defecto `5173`). Haz clic en "Siguiente".
    -   Selecciona "Permitir la conexión" y haz clic en "Siguiente".
    -   Selecciona los perfiles de red aplicables (ej. "Privada") y haz clic en "Siguiente".
    -   Asigna un nombre a la regla (ej. "Vite Dev Server") y haz clic en "Finalizar".
3.  **Accede desde el móvil**: En tu dispositivo móvil, abre el navegador y navega a `http://<TU_IP_LOCAL>:5173` (reemplaza `<TU_IP_LOCAL>` con la dirección IP que identificaste).

### Acceso Seguro (HTTPS) con IP Local
Para pruebas de RA que requieren HTTPS (especialmente en algunos navegadores o para ciertas funcionalidades de WebXR), necesitarás una configuración más avanzada, como un certificado SSL/TLS autofirmado y la configuración de Vite para usar HTTPS.

1.  **Generar un certificado SSL/TLS autofirmado**: Puedes usar herramientas como `mkcert` o `OpenSSL`.
    -   **Con `mkcert`**:
        ```bash
        mkcert -install
        mkcert localhost <TU_IP_LOCAL>
        ```
        Esto generará `localhost+X.pem` y `localhost+X-key.pem` (donde X es el número de hosts).
2.  **Configurar Vite para usar HTTPS**:
    -   Instala `@vitejs/plugin-basic-ssl` o configura manualmente en `vite.config.js`.
    -   Ejemplo con `@vitejs/plugin-basic-ssl`:
        ```bash
        npm install -D @vitejs/plugin-basic-ssl
        ```
        En `vite.config.js`:
        ```javascript
        import { defineConfig } from 'vite';
        import basicSsl from '@vitejs/plugin-basic-ssl';

        export default defineConfig({
          plugins: [
            basicSsl()
          ],
          server: {
            host: true, // Permite el acceso desde la red local
            https: true // Habilita HTTPS
          }
        });
        ```
    -   Si usas certificados generados manualmente (ej. con `mkcert` o `OpenSSL`), configura `vite.config.js` para apuntar a tus archivos `.pem`:
        ```javascript
        import { defineConfig } from 'vite';
        import fs from 'fs';

        export default defineConfig({
          server: {
            host: true,
            https: {
              key: fs.readFileSync('path/to/your/localhost+X-key.pem'),
              cert: fs.readFileSync('path/to/your/localhost+X.pem')
            }
          }
        });
        ```
3.  **Abre el puerto HTTPS en el Firewall de Windows**: Repite el paso 2 de la sección anterior, pero para el puerto `443` (o el puerto que configure Vite para HTTPS, si es diferente).
4.  **Confía en el certificado en tu dispositivo móvil**: Para evitar advertencias de seguridad, deberás instalar el certificado raíz de tu CA (ej. `mkcert -CAROOT`) en tu dispositivo móvil. Los pasos varían según el sistema operativo.
5.  **Accede desde el móvil**: En tu dispositivo móvil, abre el navegador y navega a `https://<TU_IP_LOCAL>:5173` (o el puerto HTTPS configurado).

## Modelos 3D
Los modelos 3D se encuentran en la carpeta `public/assets/models/` y deben estar en formato GLB para ser utilizados eficientemente con `<model-viewer>`.

## Experimentos
La carpeta `public/experiments/` contiene archivos HTML de ejemplo que demuestran diferentes configuraciones y usos de `<model-viewer>`, como la carga de modelos locales (`ejemplo-modelo-local.html`) y la activación de la experiencia de Realidad Aumentada (`model-viewer-ar.html`).
