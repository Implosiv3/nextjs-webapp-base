# ARCHITECTURE.md

# Next.js WebApp Base

Este documento recoge las decisiones de arquitectura del proyecto.

El objetivo es mantener una base limpia, coherente y reutilizable para cualquier aplicación futura.

---

# Principios

## 1. Arquitectura antes que implementación

Antes de comenzar una nueva funcionalidad se define su estructura.

No se crean archivos o carpetas sin una responsabilidad clara.

---

## 2. Una responsabilidad por componente

Cada componente debe tener una única responsabilidad.

Si un componente necesita una explicación larga para entender qué hace, probablemente está haciendo demasiado y debe dividirse.

---

## 3. Crecimiento progresivo

No se crean:

* carpetas vacías
* componentes vacíos
* abstracciones sin uso

Cada elemento del proyecto debe existir porque aporta valor en ese momento.

---

# Estructura del proyecto

```text
app/
components/
public/

auth.ts
```

La estructura seguirá la organización oficial de Next.js siempre que sea posible.

---

# Componentes

Los componentes se agrupan por dominio funcional.

Ejemplo:

```text
components/
├── auth/
├── layout/
└── ...
```

No se agrupan todos en una única carpeta.

---

# Estilos

## Componentes

Cada componente tendrá un archivo:

```text
Component.tsx
Component.module.scss
```

únicamente cuando necesite estilos.

No se crearán archivos SCSS vacíos.

---

## Páginas

Cada página tendrá su propio archivo de estilos.

Ejemplo:

```text
app/
└── about/
    ├── page.tsx
    └── page.module.scss
```

---

## Estilos globales

`app/globals.css` contendrá únicamente:

* variables globales
* reset
* tipografía
* estilos realmente globales

Nunca contendrá estilos de componentes o páginas.

---

# Tailwind

Tailwind permanecerá instalado.

Su uso será principalmente para:

* prototipos
* experimentación
* integración con bibliotecas compatibles

Los componentes propios utilizarán preferentemente SCSS Modules.

---

# Layout

El layout principal será siempre el proporcionado por Next.js:

```text
app/layout.tsx
```

No se crearán capas adicionales de layout salvo que aporten una responsabilidad real.

---

# Contenedores

Los componentes de infraestructura, como `PageContainer`, existirán únicamente cuando tengan una responsabilidad clara y reutilizable.

---

# Código

* Se evitarán estilos inline salvo cuando sean realmente dinámicos.
* Se priorizará código sencillo frente a abstracciones prematuras.
* Los archivos generados por Next.js se modificarán lo mínimo posible.

---

# Flujo de desarrollo

Cada paso del desarrollo debe:

1. Tener un único objetivo.
2. Dejar el proyecto en un estado funcional.
3. Ser un buen punto para realizar un commit.

---

# Filosofía

Este proyecto no pretende ser una única aplicación.

Pretende convertirse en una base sólida sobre la que desarrollar cualquier aplicación futura con Next.js.
