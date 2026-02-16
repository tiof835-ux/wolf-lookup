# WOLF PSN LOOKUP

Herramienta de terminal para consultar perfiles reales de PlayStation Network usando la librería psn-api.

Esta herramienta obtiene información REAL desde los servidores de PlayStation Network.

---

## ⚙️ Requisitos

- Node.js 18 o superior
- Cuenta de PlayStation
- Token NPSSO válido

---

## 📦 Instalación

Clona el repositorio:

git clone 

Entra en la carpeta:

cd wolf-psn-lookup

Instala dependencias:

npm install

---

## 🔑 Obtener NPSSO

1. Abre este enlace en tu navegador:
   https://ca.account.sony.com/api/v1/ssocookie

2. Inicia sesión con tu cuenta de PlayStation.

3. Copia el valor que aparece después de:

npsso=

Ejemplo:
npsso=eyJhbGciOi...

4. Abre el archivo `lookup.js` y reemplaza:

const NPSSO = "PON_AQUI_TU_NPSSO";

por tu NPSSO real:

const NPSSO = "TU_NPSSO_AQUI";

---

## ▶️ Ejecutar la herramienta

node lookup.js

o

npm start

Luego escribe el PSN ID cuando lo solicite.

---

## 📊 Información que puede mostrar

- ID de usuario
- Account ID
- Juegos recientes
- Datos públicos del perfil

La información depende de la privacidad del perfil consultado.

---

## 🖥 Compatible con

- Windows (CMD / PowerShell)
- Kali Linux
- Ubuntu
- Termux
- MacOS

---

## ⚠️ Aviso

Esta herramienta usa la librería psn-api y requiere autenticación mediante NPSSO.

No almacenes tu NPSSO en repositorios públicos.

