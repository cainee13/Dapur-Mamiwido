// Elemen DOM
const inputPencarian = document.getElementById("searchInput")
const tombolCari = document.getElementById("searchBtn")
const productsGrid = document.getElementById("productsGrid")
const tautanNav = document.querySelectorAll(".nav-link")

// Data best sellers statis (menggantikan fetch dari JSON)
const bestSellersData = [
  {
    id: "lontong-kare",
    name: "Lontong Kare",
    category: "Best Seller",
    price: "15.000 - 25.000",
    description: "Lontong dengan kuah kare yang kaya rempah, disajikan dengan lauk pelengkap yang lezat.",
    image: "Lontong Kare.jpeg"
  },
  {
    id: "ongol-ongol",
    name: "Ongol-ongol",
    category: "Best Seller", 
    price: "20.000",
    description: "Kue tradisional berbahan dasar tepung sagu dengan kelapa parut dan gula merah.",
    image: "ongol.jpg"
  },
  {
    id: "cenil-gondrong",
    name: "Cenil Gondrong",
    category: "Best Seller",
    price: "25.000",
    description: "Kue tradisional kenyal dengan taburan kelapa parut dan gula merah yang manis.",
    image: "cenil.jpg"
  },
  {
    id: "pastel",
    name: "Pastel",
    category: "Best Seller",
    price: "4.000",
    description: "Pastel renyah dengan isian sayuran segar yang gurih dan lezat.",
    image: "pastel.jpg"
  },
  {
    id: "kue-sus",
    name: "Kue Sus",
    category: "Best Seller",
    price: "3.500 - 5.000", 
    description: "Kue sus lembut dengan isian cream yang manis dan tekstur yang sempurna.",
    image: "sus.jpg"
  },
  {
    id: "kastengel",
    name: "Kastengel Triple Keju",
    category: "Best Seller",
    price: "120.000",
    description: "Kue kering renyah dengan tiga jenis keju premium yang gurih.",
    image: "kastengel tiple keju.png"
  }
]

// Data produk untuk autocomplete - DIPERLUAS
const searchData = [
  // Best Seller
  { name: "Lontong Kare", category: "Best Seller", keywords: ["lontong", "kare", "curry", "nasi", "makanan utama", "tradisional"], detailPage: "detail lontong kare.html" },
  { name: "Ongol-ongol", category: "Best Seller", keywords: ["ongol", "kue", "tradisional", "manis", "dessert", "basah"], detailPage: "detail ongol-ongol.html" },
  { name: "Cenil Gondrong", category: "Best Seller", keywords: ["cenil", "gondrong", "kue", "tradisional", "manis", "basah"], detailPage: "detail cenil.html" },
  { name: "Pastel", category: "Best Seller", keywords: ["pastel", "snack", "gorengan", "isi", "sayuran"], detailPage: "detail pastel.html" },
  { name: "Kue Sus", category: "Best Seller", keywords: ["sus", "kue", "modern", "cream", "manis"], detailPage: "detail kue sus.html" },
  
  // Kue Kering
  { name: "Kastengel Triple Keju", category: "Kue Kering", keywords: ["kastengel", "keju", "kering", "renyah", "cheese", "triple"], detailPage: "detail kastengel.html" },
  { name: "Kue Cocho Mede", category: "Kue Kering", keywords: ["cocho", "mede", "cookies", "kering", "renyah"], detailPage: "detail cocho mede.html" },
  { name: "Kue Pie Susu Jumbo", category: "Kue Kering", keywords: ["pie", "susu", "jumbo", "kue", "kering"], detailPage: "detail pie susu.html" },
  { name: "Kue Pie Buah", category: "Kue Kering", keywords: ["pie", "buah", "kue", "kering"], detailPage: "detail pie buah.html" },
  { name: "Kue Cocho Almond", category: "Kue Kering", keywords: ["cocho", "almond", "cookies", "kering", "renyah"], detailPage: "detail cocho almond cookies.html" },
  { name: "Kue Coklat Pelangi", category: "Kue Kering", keywords: ["coklat", "pelangi", "cookies", "kering", "warna"], detailPage: "detail coklat pelangi.html" },
  { name: "Kue Coklat Mede", category: "Kue Kering", keywords: ["coklat", "mede", "cookies", "kering"], detailPage: "detail coklat mede kukis.html" },
  { name: "Kue Kacang", category: "Kue Kering", keywords: ["kacang", "kue", "kering", "renyah"], detailPage: "detail kue kacang.html" },
  { name: "Florentine Cookies", category: "Kue Kering", keywords: ["florentine", "cookies", "kering", "renyah"], detailPage: "detail Florentine cookies.html" },
  { name: "Oatmeal Cookies", category: "Kue Kering", keywords: ["oatmeal", "cookies", "kering", "sehat"], detailPage: "detail oatmeal kukis.html" },
  
  // Kue Basah
  { name: "Kue Bugis Mandi", category: "Kue Basah", keywords: ["bugis", "mandi", "kue", "basah", "tradisional"], detailPage: "detail bugis mandi.html" },
  { name: "Kue Wajik Hias Hantaran", category: "Kue Basah", keywords: ["wajik", "hias", "hantaran", "tradisional", "basah"], detailPage: "detail wajik hias.html" },
  { name: "Kue Lumpur Surga", category: "Kue Basah", keywords: ["lumpur", "surga", "kue", "basah", "manis"], detailPage: "detail lumpur surga.html" },
  { name: "Apem Tepung Beras", category: "Kue Basah", keywords: ["apem", "tepung", "beras", "tradisional", "basah"], detailPage: "detail apem tepung beras.html" },
  { name: "Kue Lopis", category: "Kue Basah", keywords: ["lopis", "kue", "tradisional", "basah"], detailPage: "detail kue lopis.html" },
  { name: "Kue Tampah", category: "Kue Basah", keywords: ["tampah", "kue", "tradisional", "basah"], detailPage: "detail kue tampah.html" },
  { name: "Mata Roda", category: "Kue Basah", keywords: ["mata", "roda", "kue", "tradisional"], detailPage: "detail mata roda.html" },
  { name: "Snack Box", category: "Kue Basah", keywords: ["snack", "box", "kemasan", "acara"], detailPage: "detail snack box.html" },
  
  // Puding
  { name: "Miloreo", category: "Puding", keywords: ["miloreo", "puding", "milo", "oreo", "dessert"], detailPage: "detail puding miloreo.html" },
  { name: "Kolam Regal", category: "Puding", keywords: ["kolam", "regal", "puding", "dessert"], detailPage: "detail kolam regal.html" },
  { name: "Kolam Gula Aren", category: "Puding", keywords: ["kolam", "gula", "aren", "puding", "dessert"], detailPage: "detail kolam gula aren.html" },
  { name: "Puding Lumut Gula Merah", category: "Puding", keywords: ["puding", "lumut", "gula", "merah", "dessert"], detailPage: "detail puding lumut gula merah.html" },
  { name: "Puding Cincau", category: "Puding", keywords: ["puding", "cincau", "dessert", "segar"], detailPage: "detail puding cincau.html" },
  
  // Masakan
  { name: "Nasi Tumpeng", category: "Masakan", keywords: ["nasi", "tumpeng", "tradisional", "acara", "kuning"], detailPage: "detail nasi tumpeng.html" },
  { name: "Nasi Liwet", category: "Masakan", keywords: ["nasi", "liwet", "tradisional", "gurih"], detailPage: "detail nasi liwet.html" },
  { name: "Nasi Box Ayam Bakar", category: "Masakan", keywords: ["nasi", "box", "ayam", "bakar", "kotak"], detailPage: "detail nasi box ayam bakar.html" },
  { name: "Nasi Uduk", category: "Masakan", keywords: ["nasi", "uduk", "santan", "gurih", "tradisional"], detailPage: "detail Nasi uduk.html" },
  
  // Tambahan kata kunci umum
  { name: "Makanan Tradisional", category: "Kategori", keywords: ["tradisional", "heritage", "warisan", "klasik"], detailPage: "menu.html" },
  { name: "Kue Basah", category: "Kategori", keywords: ["basah", "lembab", "soft", "empuk"], detailPage: "menu.html" },
  { name: "Kue Kering", category: "Kategori", keywords: ["kering", "renyah", "crispy", "tahan lama"], detailPage: "menu.html" },
  { name: "Snack", category: "Kategori", keywords: ["snack", "cemilan", "ringan", "gorengan"], detailPage: "menu.html" },
]

// Mapping nama produk ke file detail - DIPERLUAS
const productDetailMap = {
  "Lontong Kare": "detail lontong kare.html",
  "Ongol-ongol": "detail ongol-ongol.html",
  "Cenil Gondrong": "detail cenil.html",
  "Pastel": "detail pastel.html",
  "Kue Sus": "detail kue sus.html",
  "Kastengel Triple Keju": "detail kastengel.html",
  "Kue Cocho Mede": "detail cocho mede.html",
  "Kue Pie Susu Jumbo": "detail pie susu.html",
  "Kue Pie Buah": "detail pie buah.html",
  "Kue Cocho Almond": "detail cocho almond cookies.html",
  "Kue Coklat Pelangi": "detail coklat pelangi.html",
  "Kue Coklat Mede": "detail coklat mede kukis.html",
  "Kue Kacang": "detail kue kacang.html",
  "Florentine Cookies": "detail Florentine cookies.html",
  "Oatmeal Cookies": "detail oatmeal kukis.html",
  "Kue Bugis Mandi": "detail bugis mandi.html",
  "Kue Wajik Hias Hantaran": "detail wajik hias.html",
  "Kue Lumpur Surga": "detail lumpur surga.html",
  "Apem Tepung Beras": "detail apem tepung beras.html",
  "Kue Lopis": "detail kue lopis.html",
  "Kue Tampah": "detail kue tampah.html",
  "Mata Roda": "detail mata roda.html",
  "Snack Box": "detail snack box.html",
  "Miloreo": "detail puding miloreo.html",
  "Kolam Regal": "detail kolam regal.html",
  "Kolam Gula Aren": "detail kolam gula aren.html",
  "Puding Lumut Gula Merah": "detail puding lumut gula merah.html",
  "Puding Cincau": "detail puding cincau.html",
  "Nasi Tumpeng": "detail nasi tumpeng.html",
  "Nasi Liwet": "detail nasi liwet.html",
  "Nasi Box Ayam Bakar": "detail nasi box ayam bakar.html",
  "Nasi Uduk": "detail Nasi uduk.html"
}

// Variables untuk autocomplete
let currentSuggestionIndex = -1
let suggestions = []

// Inisialisasi website
document.addEventListener("DOMContentLoaded", () => {
  loadBestSellers()
  inisialisasiNavigasi()
  inisialisasiPencarian()
  inisialisasiGulirHalus()
  setupAutocomplete()
  handleURLSearchParams()
  setupLazyLoading()
})

// Handle URL search parameters (untuk menu page)
function handleURLSearchParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const searchQuery = urlParams.get('search')
  
  if (searchQuery && inputPencarian) {
    inputPencarian.value = searchQuery
    // Jika di halaman menu, lakukan pencarian
    if (document.querySelectorAll('.menu-card').length > 0) {
      performMenuSearch()
    }
  }
}

// Function to load best seller menu items - DIUBAH UNTUK MENGGUNAKAN DATA STATIS
function loadBestSellers() {
  try {
    // Tampilkan loading
    if (productsGrid) {
      productsGrid.innerHTML =
        '<div class="loading-container"><div class="loading"></div><p>Memuat menu terbaik kami...</p></div>'
    }

    // Simulasi delay loading untuk UX yang lebih baik
    setTimeout(() => {
      // Check if the container exists
      if (!productsGrid) {
        console.error("Products grid container not found")
        return
      }

      // Clear any existing content
      productsGrid.innerHTML = ""

      // Loop through each best seller and create a card
      bestSellersData.forEach((item) => {
        const productCard = createProductCard(item)
        productsGrid.appendChild(productCard)
      })
    }, 500) // Delay 500ms untuk efek loading

  } catch (error) {
    console.error("Error loading best sellers:", error)
    showErrorMessage()
  }
}

// Function to create a product card element (dengan link ke halaman detail)
function createProductCard(item) {
  // Create the card container
  const card = document.createElement("div")
  card.className = "product-card"

  // Get detail page link
  const detailLink = productDetailMap[item.name] || "menu.html"

  // Create the HTML structure for the card dengan link ke halaman detail
  card.innerHTML = `
        <div class="product-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='Logo_design.svg'">
        </div>
        <div class="product-info">
            <div class="product-category">${item.category}</div>
            <a href="${detailLink}" class="product-name-link">
                <h3 class="product-name">${item.name}</h3>
            </a>
            <div class="product-price">Rp ${item.price}</div>
            <p class="product-description">${item.description}</p>
            <div class="product-actions">
                <button class="btn-read-more" onclick="orderItem('${item.id}', '${item.name}')">
                    <i class="fas fa-shopping-cart"></i> Pesan Sekarang
                </button>
            </div>
        </div>
    `

  // Add hover effect
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })

  return card
}

// Function to handle ordering an item
function orderItem(itemId, itemName) {
  const phoneNumber = "6287873073356"
  const message = `Halo, saya tertarik untuk memesan ${itemName}. Bisakah Anda memberikan informasi lebih lanjut?`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank")
}

// Function to show error message if loading fails
function showErrorMessage() {
  if (productsGrid) {
    productsGrid.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Maaf, terjadi kesalahan saat memuat menu.</h3>
                <p>Silakan refresh halaman atau hubungi kami di WhatsApp.</p>
                <button class="btn-retry" onclick="loadBestSellers()">
                    <i class="fas fa-redo"></i> Coba Lagi
                </button>
            </div>
        `
  }
}

// Setup Autocomplete functionality - DIPERBAIKI
function setupAutocomplete() {
  if (!inputPencarian) return

  // Create suggestions dropdown
  const suggestionsContainer = document.createElement("div")
  suggestionsContainer.className = "search-suggestions"
  suggestionsContainer.id = "searchSuggestions"
  inputPencarian.parentNode.appendChild(suggestionsContainer)

  // Input event listener dengan debounce
  inputPencarian.addEventListener(
    "input",
    debounce((e) => {
      const query = e.target.value.toLowerCase().trim()

      if (query.length < 2) {
        hideSuggestions()
        // Reset search jika di halaman menu
        if (document.querySelectorAll('.menu-card').length > 0) {
          resetMenuSearch()
        }
        return
      }

      showSuggestions(query)
    }, 200),
  )

  // Keyboard navigation
  inputPencarian.addEventListener("keydown", (e) => {
    const suggestionsContainer = document.getElementById("searchSuggestions")
    const suggestionItems = suggestionsContainer.querySelectorAll(".suggestion-item")

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        currentSuggestionIndex = Math.min(currentSuggestionIndex + 1, suggestionItems.length - 1)
        updateSuggestionHighlight(suggestionItems)
        break

      case "ArrowUp":
        e.preventDefault()
        currentSuggestionIndex = Math.max(currentSuggestionIndex - 1, -1)
        updateSuggestionHighlight(suggestionItems)
        break

      case "Enter":
        e.preventDefault()
        if (currentSuggestionIndex >= 0 && suggestionItems[currentSuggestionIndex]) {
          const suggestionName = suggestionItems[currentSuggestionIndex].getAttribute('data-name')
          selectSuggestion(suggestionName)
        } else {
          tombolCari.click()
        }
        break

      case "Escape":
        hideSuggestions()
        inputPencarian.blur()
        break
    }
  })

  // Hide suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!inputPencarian.contains(e.target) && !document.getElementById("searchSuggestions").contains(e.target)) {
      hideSuggestions()
    }
  })
}

// Function to show suggestions - DIPERBAIKI
function showSuggestions(query) {
  const suggestionsContainer = document.getElementById("searchSuggestions")

  // Find matching suggestions
  suggestions = findMatches(query)

  if (suggestions.length === 0) {
    suggestionsContainer.innerHTML = '<div class="no-suggestions">Tidak ada menu yang ditemukan</div>'
    suggestionsContainer.style.display = "block"
    return
  }

  // Create suggestions HTML
  const suggestionsHTML = suggestions
    .slice(0, 6) // Limit to 6 suggestions
    .map((suggestion, index) => {
      const highlightedText = highlightMatch(suggestion.name, query)
      const categoryBadge =
        suggestion.category !== "Kategori" ? `<span class="suggestion-category">${suggestion.category}</span>` : ""

      return `
      <div class="suggestion-item" data-index="${index}" data-name="${suggestion.name}" onclick="selectSuggestion('${suggestion.name}')">
        <div class="suggestion-content">
          <div class="suggestion-name">${highlightedText}</div>
          ${categoryBadge}
        </div>
        <i class="fas fa-search suggestion-icon"></i>
      </div>
    `
    })
    .join("")

  suggestionsContainer.innerHTML = suggestionsHTML
  suggestionsContainer.style.display = "block"
  currentSuggestionIndex = -1
}

// Function to find matching suggestions
function findMatches(query) {
  const matches = []
  const exactMatches = []
  const partialMatches = []

  searchData.forEach((item) => {
    const itemName = item.name.toLowerCase()
    const queryLower = query.toLowerCase()

    // Exact name match (highest priority)
    if (itemName.includes(queryLower)) {
      exactMatches.push(item)
      return
    }

    // Keyword match
    const keywordMatch = item.keywords.some((keyword) => keyword.toLowerCase().includes(queryLower))

    if (keywordMatch) {
      partialMatches.push(item)
    }
  })

  // Combine results: exact matches first, then partial matches
  return [...exactMatches, ...partialMatches]
}

// Function to highlight matching text
function highlightMatch(text, query) {
  const regex = new RegExp(`(${escapeRegex(query)})`, "gi")
  return text.replace(regex, "<mark>$1</mark>")
}

// Escape special regex characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Function to update suggestion highlight
function updateSuggestionHighlight(suggestionItems) {
  suggestionItems.forEach((item, index) => {
    if (index === currentSuggestionIndex) {
      item.classList.add("highlighted")
    } else {
      item.classList.remove("highlighted")
    }
  })
}

// Function to select a suggestion - DIPERBAIKI UNTUK LANGSUNG KE DETAIL
function selectSuggestion(suggestionText) {
  inputPencarian.value = suggestionText
  hideSuggestions()

  // Cari item di searchData
  const selectedItem = searchData.find(item => item.name === suggestionText)
  
  if (selectedItem && selectedItem.detailPage && selectedItem.category !== "Kategori") {
    // Jika ada halaman detail dan bukan kategori, langsung ke detail
    window.location.href = selectedItem.detailPage
  } else {
    // Jika kategori atau tidak ada detail page, ke menu dengan search
    const kueri = suggestionText.toLowerCase().trim()
    window.location.href = `menu.html?search=${encodeURIComponent(kueri)}`
  }
}

// Function to hide suggestions
function hideSuggestions() {
  const suggestionsContainer = document.getElementById("searchSuggestions")
  if (suggestionsContainer) {
    suggestionsContainer.style.display = "none"
    suggestionsContainer.innerHTML = ""
  }
  currentSuggestionIndex = -1
}

// Perform search untuk halaman menu
function performMenuSearch() {
  const keyword = inputPencarian.value.toLowerCase().trim()
  const menuCards = document.querySelectorAll('.menu-card')

  if (menuCards.length === 0) return

  menuCards.forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase()
    
    if (keyword === '' || title.includes(keyword)) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  })

  // Hide empty sections
  document.querySelectorAll('.menu-section').forEach(section => {
    const visibleCards = section.querySelectorAll('.menu-card[style="display: block"], .menu-card:not([style*="display: none"])')
    if (keyword !== '' && visibleCards.length === 0) {
      section.style.display = 'none'
    } else {
      section.style.display = 'block'
    }
  })
}

// Reset search untuk halaman menu
function resetMenuSearch() {
  const menuCards = document.querySelectorAll('.menu-card')
  
  if (menuCards.length === 0) return
  
  menuCards.forEach(card => {
    card.style.display = 'block'
  })
  
  document.querySelectorAll('.menu-section').forEach(section => {
    section.style.display = 'block'
  })
}

// Inisialisasi navigasi
function inisialisasiNavigasi() {
  tautanNav.forEach((tautan) => {
    tautan.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      // Jika link menuju halaman lain, biarkan default behavior
      if (href.includes(".html")) {
        return
      }

      e.preventDefault()

      // Hapus kelas aktif dari semua tautan
      tautanNav.forEach((t) => t.classList.remove("active"))

      // Tambah kelas aktif ke tautan yang diklik
      this.classList.add("active")

      // Gulir halus ke bagian
      const idTarget = href
      const bagianTarget = document.querySelector(idTarget)

      if (bagianTarget) {
        const tinggiBagianAtas = document.querySelector(".header").offsetHeight
        const posisiTarget = bagianTarget.offsetTop - tinggiBagianAtas

        window.scrollTo({
          top: posisiTarget,
          behavior: "smooth",
        })
      }
    })
  })
}

// Inisialisasi fungsi pencarian
function inisialisasiPencarian() {
  if (!inputPencarian || !tombolCari) return

  tombolCari.addEventListener("click", () => {
    const kueri = inputPencarian.value.toLowerCase().trim()

    if (kueri.length === 0) {
      alert("Silakan masukkan kata kunci pencarian.")
      return
    }

    // Hide suggestions before action
    hideSuggestions()

    // Cek apakah di halaman menu
    if (document.querySelectorAll('.menu-card').length > 0) {
      // Jika di halaman menu, lakukan pencarian langsung
      performMenuSearch()
    } else {
      // Jika di homepage, redirect ke halaman menu dengan parameter pencarian
      window.location.href = `menu.html?search=${encodeURIComponent(kueri)}`
    }
  })

  inputPencarian.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && currentSuggestionIndex === -1) {
      tombolCari.click()
    }
  })
}

// Inisialisasi gulir halus untuk tautan jangkar
function inisialisasiGulirHalus() {
  // Perbarui navigasi aktif berdasarkan posisi gulir
  window.addEventListener(
    "scroll",
    debounce(() => {
      const bagianDenganId = document.querySelectorAll("section[id]")
      const tinggiBagianAtas = document.querySelector(".header").offsetHeight

      bagianDenganId.forEach((bagian) => {
        const atasBagian = bagian.offsetTop - tinggiBagianAtas - 50
        const bawahBagian = atasBagian + bagian.offsetHeight
        const posisiGulir = window.scrollY

        if (posisiGulir >= atasBagian && posisiGulir < bawahBagian) {
          const tautanTerkait = document.querySelector(`a[href="#${bagian.id}"]`)
          if (tautanTerkait) {
            tautanNav.forEach((tautan) => tautan.classList.remove("active"))
            tautanTerkait.classList.add("active")
          }
        }
      })
    }, 100),
  )
}

// Debounce function untuk optimasi performa
function debounce(fungsi, tunggu) {
  let timeout
  return function fungsiYangDieksekusi(...args) {
    const nanti = () => {
      clearTimeout(timeout)
      fungsi(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(nanti, tunggu)
  }
}

// Fungsi utilitas tambahan
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka)
}

// Lazy loading untuk gambar
function setupLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src || img.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Fungsi tambahan untuk smooth scrolling ke elemen tertentu
function scrollToElement(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    })
  }
}

// Fungsi untuk menangani resize window
function handleWindowResize() {
  // Hide suggestions saat resize untuk menghindari positioning issues
  hideSuggestions()
}

window.addEventListener('resize', debounce(handleWindowResize, 250))

// Export functions untuk digunakan di HTML
window.orderItem = orderItem
window.selectSuggestion = selectSuggestion
window.loadBestSellers = loadBestSellers
window.scrollToElement = scrollToElement