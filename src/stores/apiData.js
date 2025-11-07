import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { mockApiData } from '@/services/mockData.js'

export const useApiDataStore = defineStore('apiData', () => {
  // estado global
  const isLoading = ref(false)
  const isLoaded = ref(false)
  const error = ref(null)
  
  // datos de la aplicación
  const navbarData = ref(null)
  const homeData = ref(null)
  const servicesData = ref(null)
  const clientsData = ref(null)
  const locationData = ref(null)
  const contactData = ref(null)

  // computeds para comodidad
  const isDataReady = computed(() => isLoaded.value && !isLoading.value)
  const hasError = computed(() => !!error.value)
  
  // función de carga global
  const loadAllData = async () => {
    // evitar carga duplicada
    if (isLoaded.value || isLoading.value) {
      return
    }

    isLoading.value = true
    error.value = null

    try {
      // modo producción (api real)
      // const response = await api.get('/company/all-data')
      // const data = response.data
      
      // modo desarrollo (mock data)
      // carga instantánea de datos
      
      // asignar datos del mock
      navbarData.value = mockApiData.navbar
      homeData.value = mockApiData.home
      servicesData.value = mockApiData.services
      clientsData.value = mockApiData.clients
      locationData.value = mockApiData.location
      contactData.value = {
        // datos específicos de contacto si los necesitas
        formFields: mockApiData.contact?.form || {},
        info: mockApiData.contact?.info || {}
      }

      isLoaded.value = true
    } catch (err) {
      error.value = err.message || 'Error al cargar datos'
      
      // datos de fallback en caso de error
      navbarData.value = { logoUrl: '/src/assets/logo.svg', socialLinks: {} }
      homeData.value = { hero: {}, companyInfo: {} }
      servicesData.value = { header: {}, categories: [] }
      clientsData.value = { logos: [] }
      locationData.value = { address: {}, map: {}, contact: {} }
      contactData.value = {}
    } finally {
      isLoading.value = false
    }
  }

  // función para recargar
  const reloadData = async () => {
    isLoaded.value = false
    await loadAllData()
  }

  // getters específicos
  const getNavbarSocialLinks = computed(() => navbarData.value?.socialLinks || {})
  const getHeroData = computed(() => homeData.value?.hero || {})
  const getCompanyInfo = computed(() => homeData.value?.companyInfo || {})
  const getServicesCategories = computed(() => servicesData.value?.categories || [])
  const getClientLogos = computed(() => clientsData.value?.logos || [])
  const getLocationInfo = computed(() => locationData.value || {})

  return {
    // estado
    isLoading,
    isLoaded,
    error,
    navbarData,
    homeData,
    servicesData,
    clientsData,
    locationData,
    contactData,
    
    // computeds
    isDataReady,
    hasError,
    getNavbarSocialLinks,
    getHeroData,
    getCompanyInfo,
    getServicesCategories,
    getClientLogos,
    getLocationInfo,
    
    // acciones
    loadAllData,
    reloadData
  }
})