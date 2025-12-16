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
  const productsData = ref(null)
  const clientsData = ref(null)
  const locationData = ref(null)
  const contactData = ref(null)
  const privacyNoticeData = ref(null)
  const galleryData = ref(null)
  const videosData = ref(null)
  const documentsData = ref(null)

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
        productsData.value = apiData.products
        clientsData.value = apiData.clients
        locationData.value = apiData.location
        contactData.value = apiData.contact || {}
        privacyNoticeData.value = apiData.privacyNotice || {}
        galleryData.value = apiData.gallery || {}
        videosData.value = apiData.videos || {}
        documentsData.value = apiData.documents || {}
      }

      isLoaded.value = true
    } catch (err) {
      error.value = err.message || 'Error al cargar datos'
      
      // datos de fallback en caso de error
      visibilityData.value = { showCarousel: true, showAboutUs: true, showServices: true, showProducts: true, showContact: true } // flags básicos
      navbarData.value = { logoUrl: '/src/assets/logo.svg', socialLinks: {} }
      homeData.value = { carousel: [], companyInfo: {} }
      servicesData.value = { header: {}, categories: [] }
      productsData.value = { header: {}, categories: [] }
      clientsData.value = { logos: [] }
      locationData.value = { address: {}, map: {}, contact: {} }
      contactData.value = {}
      galleryData.value = { header: {}, categories: [] }
      videosData.value = { header: {}, videos: [] }
      documentsData.value = { header: {}, documents: [] }
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
  const getCarouselData = computed(() => homeData.value?.carousel || [])
  const getCompanyInfo = computed(() => homeData.value?.companyInfo || {})
  const getServicesCategories = computed(() => servicesData.value?.categories || [])
  const getProductsCategories = computed(() => productsData.value?.categories || [])
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
    productsData,
    clientsData,
    locationData,
    contactData,
    privacyNoticeData,
    galleryData,
    videosData,
    documentsData,
    
    // computeds
    isDataReady,
    hasError,
    getNavbarSocialLinks,
    getCarouselData,
    getCompanyInfo,
    getServicesCategories,
    getProductsCategories,
    getClientLogos,
    getLocationInfo,
    
    // acciones
    loadAllData,
    reloadData
  }
})