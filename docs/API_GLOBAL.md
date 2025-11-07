# 🌐 API Global - Documentación

## 📋 Resumen de implementación

Se ha implementado una **carga global de datos** usando Pinia para mejorar el rendimiento y simplificar el código.

## 🏗️ Arquitectura

### **Store Central**: `src/stores/appData.js`
- **Una sola carga** de todos los datos
- **Estado global** compartido entre componentes
- **Fallback robusto** en caso de errores
- **Computeds** para acceso fácil a datos

### **Vistas Actualizadas**:
- `src/views/Clients.vue` - Logos de clientes
- `src/views/Home.vue` - Datos de hero y empresa
- `src/views/Services.vue` - Categorías de servicios
- `src/views/Location.vue` - Información de ubicación
- `src/views/Contact.vue` - Datos de contacto
- `src/components/NavBar.vue` - Logo y redes sociales

## 🚀 Para Producción (Migration Guide)

### **Paso 1: Activar API Real**
En `src/stores/appData.js`, cambiar:

```javascript
// === MODO DESARROLLO (actual) ===
// Simular delay de API real
await new Promise(resolve => setTimeout(resolve, 800))
// Asignar datos del mock
navbarData.value = mockApiData.navbar
// ... resto de datos

// === MODO PRODUCCIÓN (futuro) ===
const response = await api.get('/company/all-data')
const data = response.data

// Asignar datos de la API
navbarData.value = data.navbar
homeData.value = data.home
servicesData.value = data.services
clientsData.value = data.clients
locationData.value = data.location
contactData.value = data.contact
```

### **Paso 2: Endpoint de Backend**
En tu backend, crear endpoint:

```javascript
// GET /api/company/all-data
app.get('/api/company/all-data', (req, res) => {
  const allData = {
    navbar: { /* datos navbar */ },
    home: { /* datos home */ },
    services: { /* datos services */ },
    clients: { /* datos clients */ },
    location: { /* datos location */ },
    contact: { /* datos contact */ }
  };
  
  res.json({ data: allData });
});
```

## 💡 Características

### **✅ Beneficios**
- **Una sola carga** de datos vs múltiples llamadas
- **Estado global** compartido entre vistas
- **Loading centralizado** para toda la app
- **Error handling** unificado
- **Código más limpio** y mantenible

### **🔧 Uso en Componentes**

```javascript
// Importar store
import { useAppDataStore } from "@/stores/appData.js";

const appDataStore = useAppDataStore();

// Acceder a datos
const navbarData = computed(() => appDataStore.navbarData);
const homeData = computed(() => appDataStore.homeData);
const isLoading = computed(() => appDataStore.isLoading);
const isDataReady = computed(() => appDataStore.isDataReady);

// Verificar estado
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// Manejar errores
if (appDataStore.hasError) {
  console.error('Error:', appDataStore.error);
}
```

## 📊 Performance

### **Antes** (múltiples llamadas):
- 5-6 llamadas API separadas
- Loading states independientes
- Código duplicado en cada vista

### **Ahora** (una llamada global):
- 1 llamada API
- Loading centralizado
- Datos compartidos
- Código simplificado

## 🔄 Flujo de Datos

```
1. App inicializa → Pinia store disponible
2. Primera vista → Detecta datos no cargados
3. Store ejecuta loadAllData() → Una sola llamada
4. Datos guardados en store → Disponibles globalmente
5. Todas las vistas acceden → Datos ya cargados
```

## 🛠️ Debug y Desarrollo

### **Logs de desarrollo**:
```javascript
// En appData.js ya incluido
console.log('✅ Todos los datos cargados exitosamente')
console.error('❌ Error cargando datos:', err)
```

### **Monitoreo de estado**:
```javascript
// En componentes para debug
console.log('Store loaded:', appDataStore.isLoaded)
console.log('Store loading:', appDataStore.isLoading)
console.log('Store error:', appDataStore.error)
```

## 🚨 Manejo de Errores

- **Fallback automático** con datos por defecto
- **Alert system** integrado con Vuetify
- **Console logging** para desarrollo
- **Estado de error** disponible globalmente

## 📈 Siguientes Pasos

1. **Testear** en desarrollo
2. **Crear endpoint** en backend
3. **Migrar** a API real
4. **Optimizar** carga (lazy loading si es necesario)
5. **Monitoring** de performance

---

**✨ Listo para producción con una sola migración de endpoint!**