"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Camera, Trophy, Users, BookOpen, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryCategories = [
  { id: "all", name: "All Photos", icon: Camera, color: "bg-[#2B6CB0] hover:bg-[#255a99]" }, // Blue gradient base
  { id: "tournaments", name: "Tournaments", icon: Trophy, color: "bg-[#D69E2E] hover:bg-[#b6861f]" }, // Golden amber
  { id: "certificate", name: "Certificate", icon: Users, color: "bg-[#2C7A7B] hover:bg-[#245e5f]" }, // Teal base
  { id: "events", name: "Events", icon: BookOpen, color: "bg-[#276749] hover:bg-[#1f5139]" }, // Dark emerald
]

const galleryImages = [
  // No color changes - colors come from galleryCategories color property
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Chess Tournament 2024",
    category: "tournaments",
    title: "Organising Tournaments",
    description: "Our students competing in the championship",
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Beginner Chess Class",
    category: "tournaments",
    title: "Tournaments",
    description: "Young minds learning the mastery of chess",
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Chess Workshop",
    category: "tournaments",
    title: "Inhouse Tournaments",
    description: "Advanced strategy inhouse tournaments.",
  },
  {
    id: 4,
    src: "/certificate-1.jpg",
    alt: "Youth Tournament",
    category: "certificate",
    title: "Fide Arbiter",
    description: "Tejavath Naresh Sir",
  },
  {
    id: 5,
    src: "/certificate-2.jpeg",
    alt: "Advanced Chess Class",
    category: "certificate",
    title: "Certification",
    description: "Tejawat Naresh Sir",
  },
  {
    id: 6,
    src: "/certificate-3.jpeg",
    alt: "Chess Seminar",
    category: "certificate",
    title: "National Arbiter",
    description: "Tejawat Naresh Sir",
  },
  {
    id: 7,
    src: "/academy.jpeg",
    alt: "School Tournament",
    category: "events",
    title: "Inter-School Championship",
    description: "Schools competing for the championship title",
  },
  {
    id: 7,
    src: "/certificate.jpg",
    alt: "School Tournament",
    category: "certificate",
    title: "Arena International Master",
    description: "Tejawat Naresh Sir",
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const closeLightbox = () => setSelectedImage(null)

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7FAFC] via-[#E0F2FE] to-[#D1FAE5]">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-r from-[#2B6CB0] via-[#2C7A7B] to-[#276749] text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-4xl font-bold mb-6">Chess Gallery</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-200">Capturing moments of learning, competition, and chess excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {galleryCategories.map(category => {
                const Icon = category.icon
                const selected = selectedCategory === category.id
                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 text-white ${
                      selected ? `${category.color} shadow-lg scale-105` : `${category.color} opacity-80 hover:opacity-100`
                    }`}
                  >
                    <Icon className="mr-2" /> {category.name}
                  </Button>
                )
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
              <Button onClick={() => setViewMode("grid")} variant={viewMode === "grid" ? "default" : "ghost"} size="sm" className="px-4">
                <Grid3X3 className="mr-2" /> Grid
              </Button>
              <Button onClick={() => setViewMode("masonry")} variant={viewMode === "masonry" ? "default" : "ghost"} size="sm" className="px-4">
                <List className="mr-2" /> Masonry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            }
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer break-inside-avoid"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-300 ${
                      viewMode === "grid" ? "h-64" : "h-auto"
                    } group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                      galleryCategories.find(cat => cat.id === image.category)?.color ?? "bg-slate-600"
                    } text-white`}
                  >
                    {galleryCategories.find(cat => cat.id === image.category)?.name ?? "Other"}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-full" onClick={e => e.stopPropagation()}>
            <div className="bg-white rounded-xl shadow-lg p-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            <Button onClick={closeLightbox} variant="outline" size="icon" className="absolute top-4 right-4 bg-white/90 border border-slate-200 text-slate-700 hover:bg-white">
              <X className="w-6 h-6" />
            </Button>

            <Button onClick={prevImage} variant="outline" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 border border-slate-200 text-slate-700 hover:bg-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button onClick={nextImage} variant="outline" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 border border-slate-200 text-slate-700 hover:bg-white">
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur-sm p-4 text-slate-800">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-slate-600">{selectedImage.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
