import React from 'react'
import Navbar from './GalleryComponents/NavbarGallery'
import '../css/shop_styles.css'
import Header from './GalleryComponents/HeaderGallery'
import ShoppingGallery from './GalleryComponents/ShoppingGallery'
import { useAuth } from "./auth";

export default function Gallery() {
  const auth = useAuth();
  auth.currentPage("/gallery");
  return (
    <div>
      <Navbar />
      <Header />
      <ShoppingGallery />
    </div>
  )
}
