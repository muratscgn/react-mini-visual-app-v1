import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@picocss/pico'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* Yapılacak Islemler:
- [x] Pico CSS Kullanılsın
- [x] Ana Gorsel olsun
- [ ] Hemen Altta 5 Adet Kucuk Gorsel Olsun
- [ ] Kucuk Gorsellerden Birine Tıklayınca Ana Görsel Degissin
- [x] Gorseller Lorem Picsun'dan Gelsin
- [x] Default Olarak 200 Nolu ID Secilsin
*/
