# Plataforma Web MSCM (Sistema de Monitoreo de Salud Móvil)

**Desarrollador:** Jose Antonio Salcido Salcedo
**Tecnología Base:** React (Vite) + JavaScript / JSX
**Metodología:** Scrum (Ciclos de 2 semanas)

---

## 📌 Enlaces del Proyecto
* **Tablero en Jira Software:** [Ver Backlog y Sprints en Jira](https://joseantoniosalcidosalcedo19.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog)
* **Demostración en Vivo (GitHub Pages):** [Ver Aplicación Desplegada](https://tony0710.github.io/plataforma-web-mscm./)

---

## 🚀 Avances por Sprint (Tercera Fase de Progreso)

### 🟢 Sprint 1 (100% Completado - 13 pts)
* **Ingesta MDM (SCRUM-7 / MSCM-1):** Módulo en React para carga y lectura de archivos CSV/XLSX con metadatos de la flota.
* **Algoritmo de Inactividad (SCRUM-10 / MSCM-2):** Clasificación en tiempo real en categorías Verde (0-3d), Amarillo (4-6d) y Rojo (+7d).
* **Dashboard Semáforo (SCRUM-13 / MSCM-3):** Interfaz gráfica interactiva con indicadores clave y resumen de riesgo.

### 🟢 Sprint 2 (100% Completado - 13 pts)
* **Parsing de Fechas (Subtarea SCRUM-1.3):** Normalización de formatos de fecha exportados desde la consola MDM para corregir inconsistencias regionales.
* **Arquitectura de Componentes:** Refactorización en componentes declarativos (`Header.jsx`, `FileUpload.jsx`, `Dashboard.jsx`).

### 🟢 Sprint 3 (100% Completado - 8 pts)
* **Módulo de Salud de Software - Fase 1 (HU004):** Componente `SoftwareHealth.jsx` para la identificación de dispositivos con versiones de sistema operativo obsoletas y parches de seguridad atascados.
* **Optimización y Filtros Dinámicos (Subtarea SCRUM-3.2):** Implementación de `useMemo` para filtrado multi-criterio en tiempo real sin recargar el navegador.

### 🟡 Sprint 4 (En Proceso - 40% - 8 pts)
* **Alertas Automatizadas (SCRUM-4 / HU015):** Maquetación de componentes para notificaciones por correo ante incidencias críticas de seguridad.

---

## 🛠️ Estructura del Código en React (`/src`)
* `/src/components/FileUpload.jsx` - Módulo de carga y parsing CSV/XLSX.
* `/src/components/Dashboard.jsx` - Semáforo visual y métricas globales.
* `/src/components/SoftwareHealth.jsx` - Módulo de parches atascados y versiones de SO.
* `/src/App.jsx` - Componente principal de la aplicación.
* `/src/main.jsx` - Punto de entrada de React / DOM.