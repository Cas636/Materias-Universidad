# Monitoreo de Cupos en Materias - Universidad Distrital

Este proyecto es una aplicación web desarrollada con React que permite monitorear la disponibilidad de cupos en materias de la Universidad Distrital. Los usuarios pueden ingresar los datos de las materias que desean seguir, visualizar el estado de los cupos, recibir notificaciones de alerta y añadir nuevas materias a la búsqueda de forma dinámica.

## Funcionalidades

1. **Página de inicio (Homepage)**:  
   En la página principal, los usuarios pueden ingresar los siguientes datos:
   - **URL de la Materia**: La URL de la materia en el portal académico de la universidad.
   - **Grupos a Monitorear**: Los grupos de la materia, separados por comas. Ejemplo: `020-84,020-83,020-81`.
   - **Correos Electrónicos**: Las direcciones de correo electrónico donde se enviarán las notificaciones de alerta, separados por comas. Ejemplo: `email1@gmail.com,email2@gmail.com`.

2. **Listado de Materias y Grupos Monitoreados**:  
   Después de ingresar los datos de búsqueda, se muestra una lista de las materias y sus respectivos grupos. Los usuarios pueden:
   - Activar o desactivar la búsqueda de una materia.
   - Eliminar materias de la lista.

3. **Componente de Logs**:  
   Un componente en tiempo real que muestra los logs de las búsquedas de cupos. Además, este componente genera un sonido de alerta cuando se detecta que hay cupos disponibles en alguna materia.

4. **Agregar Más Materias a la Búsqueda**:  
   En cualquier momento, los usuarios pueden añadir nuevas materias a la búsqueda utilizando el mismo formulario que se presenta en la página de inicio.

## Tecnologías Utilizadas

- **Frontend**: React.js
- **Backend**: RESTful API Python
- **Notificaciones**: Sonido de alerta en tiempo real
- **Estilos**: CSS para personalización de la interfaz
- **Herramientas**: `fetch` para realizar solicitudes HTTP, `useState` y `useEffect` para el manejo del estado en React

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://gitlab.com/tu_usuario/monitoreo-cupos-universidad-distrital.git
   ```
   
2. Navega a la carpeta del proyecto:
   ```bash
   cd front
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Ejecuta el proyecto:
   ```bash
   npm start
   ```

El servidor de desarrollo se iniciará en [http://localhost:3000](http://localhost:3000).

## Uso

1. **Ingreso de Datos**:  
   En la página de inicio, ingresa la URL de la materia, los grupos que deseas monitorear y los correos electrónicos para recibir alertas.
   
2. **Monitoreo en Tiempo Real**:  
   A medida que los datos se ingresan, el sistema comenzará a monitorear los cupos de las materias en tiempo real y actualizará los logs de búsqueda. Si se detecta que hay cupos disponibles, se generará un sonido de alerta.

3. **Administrar Materias Monitoreadas**:  
   Puedes activar o desactivar la búsqueda de cualquier materia y eliminar materias de la lista.

4. **Añadir Nuevas Materias**:  
   Puedes agregar más materias a la búsqueda utilizando el formulario en la vista principal mientras monitoreas otras materias.

## Estructura del Proyecto

```bash
monitoreo-cupos-universidad-distrital/
│
├── public/
│   └── index.html           # Archivo HTML principal
│
├── src/
│   ├── components/          # Componentes React
│   │   ├── LogViewer.js     # Componente para mostrar logs
│   │   ├── App.js           # Componente principal de la aplicación para ingresar los datos de búsqueda
│   │   └── BoxUpdate.js     # Componente para mostrar materias y grupos
│   └── index.js             # Punto de entrada de React
└── package.json             # Dependencias y scripts de NPM
```

## Imágenes del Proyecto

### Página de Inicio

![Página de Inicio](./assets/imagen_inicio.png)

### Listado de Materias Monitoreadas

Captura de pantalla del listado de materias y grupos, donde los usuarios pueden activar o desactivar la búsqueda.

![Listado de Materias](./assets/imagen_listado_materias.png)

### Logs en Tiempo Real

Imagen del componente de logs que muestra las actualizaciones y alertas en tiempo real.

![Logs en Tiempo Real](./assets/imagen_logs.png)

### Agregar Nuevas Materias

Captura de pantalla del formulario para agregar nuevas materias mientras se monitorean otras.

![Agregar Nuevas Materias](./assets/imagen_agregar_materias.png)

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios.
4. Haz un commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`).
5. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
6. Abre un Pull Request en este repositorio.

## Licencia

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.

You are free to:

Share — copy and redistribute the material in any medium or format.
Adapt — remix, transform, and build upon the material.
Under the following terms:

Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
NonCommercial — You may not use the material for commercial purposes.
ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
Read more about this license at CC BY-NC-SA 4.0.
