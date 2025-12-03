import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useApiDataStore = defineStore('apiData', () => {
  // estado global
  const isLoading = ref(false)
  const isLoaded = ref(false)
  const error = ref(null)
  
  const visibilityData = ref(null)
  const navbarData = ref(null)
  const homeData = ref(null)
  const servicesData = ref(null)
  const clientsData = ref(null)
  const locationData = ref(null)
  const contactData = ref(null)
  const privacyNoticeData = ref(null)
  const contactType = ref(null)

  // computed
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
      const apiMode = import.meta.env.VITE_API_MODE || 'mock'

      if (apiMode === 'real') {
        // modo producción (api real)
        // const response = await api.get('/company/all-data')
        // const data = response.data
        // asignar data desde response
        throw new Error('API real no implementada aún')
      } else {
        // modo desarrollo (mock data)
        const mockType = import.meta.env.VITE_MOCK_TYPE || 'corma'
        let apiData

        if (mockType === 'nomad') {
          apiData = (await import('@/services/nomad.js')).apiData
        } else if (mockType === 'ashop') {
          apiData = (await import('@/services/ashop.js')).apiData
        } else if (mockType === 'corma'){
          apiData = (await import('@/services/corma.js')).apiData
        } else if (mockType === 'medikaHome') {
          apiData = (await import('@/services/medikaHome.js')).apiData
        } else if (mockType === 'ascension') {
          apiData = (await import('@/services/ascension.js')).apiData
        } else {
          apiData = (await import('@/services/corma.js')).apiData
        }

        // asignar datos del mock
        visibilityData.value = apiData.visibility
        navbarData.value = apiData.navbar
        homeData.value = apiData.home
        servicesData.value = apiData.services
        clientsData.value = apiData.clients
        locationData.value = apiData.location
        contactData.value = apiData.contact || {}
        privacyNoticeData.value = apiData.privacyNotice || {}
        contactType.value = apiData.contactType || 'cards'
      }

      isLoaded.value = true
    } catch (err) {
      error.value = err.message || 'Error al cargar datos'
      
      // datos de fallback en caso de error
      visibilityData.value = { showHero: true, showServices: true, showContact: true } // flags básicos
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

  // recargar
  const reloadData = async () => {
    isLoaded.value = false
    await loadAllData()
  }

  // getters
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
    visibilityData,
    navbarData,
    homeData,
    servicesData,
    clientsData,
    locationData,
    contactData,
    privacyNoticeData,
    contactType,
    
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