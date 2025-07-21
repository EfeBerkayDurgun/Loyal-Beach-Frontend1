import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Car, Utensils, Waves } from "lucide-react";
import { useState } from "react";
import hotel1 from "@/assets/hotel1.jpg";
import hotel2 from "@/assets/hotel2.jpg";
import hotel3 from "@/assets/hotel3.jpg";

const hotel = {
  name: "Loyal Garden Beach Resort",
  location: "Antalya, Türkiye",
  description:
    "Denize sıfır konumda, her şey dahil konseptiyle hizmet veren lüks bir tatil köyü. Türkiye'nin en güzel koylarından birinde yer alan otelimiz, modern konforu geleneksel Türk misafirperverliği ile buluşturuyor.",
  pricePerNight: 3200,
  paymentOptions: ["Kredi Kartı", "Taksitli Ödeme", "İade Garantisi"],
  rating: 4.5,
  amenities: [
    { icon: Wifi, name: "Ücretsiz WiFi" },
    { icon: Car, name: "Vale Park Hizmeti" },
    { icon: Utensils, name: "Her Şey Dahil" },
    { icon: Waves, name: "Özel Plaj" },
  ],
  reviews: [
    {
      name: "Ayşe Y.",
      comment: "Otel harikaydı, deniz ve yemekler muhteşemdi! Personel çok ilgiliydi ve tüm ihtiyaçlarımız karşılandı. Kesinlikle tekrar geleceğiz.",
      rating: 5,
    },
    {
      name: "Mehmet A.",
      comment: "Temizlik iyi ama animasyon ekibi yetersizdi. Yemekler lezzetliydi, deniz harika. Genel olarak memnun kaldık.",
      rating: 3.5,
    },
    {
      name: "Fatma K.",
      comment: "Mükemmel bir tatil geçirdik! Çocuklar için harika aktiviteler vardı. Spa merkezi de çok kaliteli.",
      rating: 4.5,
    },
  ],
  images: [hotel1, hotel2, hotel3],
};

export default function HotelPage() {
  const [userRating, setUserRating] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6"
    };
    
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= Math.floor(rating) ? "fill-accent text-accent" : 
              star <= rating && rating % 1 !== 0 ? "fill-accent/50 text-accent" : 
              "text-muted-foreground"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground font-medium">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="animate-fade-in">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {hotel.name}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{hotel.location}</span>
              </div>
              {renderStars(hotel.rating, "lg")}
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">
                {hotel.pricePerNight.toLocaleString("tr-TR")} TL
              </div>
              <div className="text-muted-foreground">/ gece</div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <Card className="overflow-hidden shadow-luxury animate-scale-in">
          <div className="relative">
            <img
              src={hotel.images[selectedImageIndex]}
              alt={`${hotel.name} görseli ${selectedImageIndex + 1}`}
              className="w-full h-96 md:h-[500px] object-cover transition-all duration-500"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {hotel.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedImageIndex 
                      ? "bg-white shadow-glow" 
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2">
              {hotel.images.map((src, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 ${
                    index === selectedImageIndex ? "ring-2 ring-primary shadow-card-custom" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Description */}
            <Card className="shadow-card-custom animate-slide-up">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Otel Hakkında</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {hotel.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="shadow-card-custom animate-slide-up">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Otel Olanakları</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {hotel.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-lg bg-gradient-card hover:shadow-card-custom transition-all duration-300 hover:scale-105"
                    >
                      <amenity.icon className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm font-medium text-center">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="shadow-card-custom animate-slide-up">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Müşteri Yorumları</h2>
                <div className="space-y-4">
                  {hotel.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-card border border-border/50 hover:shadow-card-custom transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{review.name}</span>
                        {renderStars(review.rating, "sm")}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rating Section */}
            <Card className="shadow-card-custom animate-slide-up">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Deneyiminizi Puanlayın</h2>
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setUserRating(star)}
                      className="transition-all duration-300 hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 cursor-pointer ${
                          star <= userRating
                            ? "fill-accent text-accent"
                            : "text-muted-foreground hover:text-accent"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {userRating > 0 && (
                  <p className="text-primary font-medium animate-fade-in">
                    Teşekkürler! {userRating} yıldız verdiniz.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-luxury animate-scale-in sticky top-6">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {hotel.pricePerNight.toLocaleString("tr-TR")} TL
                  </div>
                  <div className="text-muted-foreground">gece başına</div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Ödeme Seçenekleri</h3>
                  <ul className="space-y-2">
                    {hotel.paymentOptions.map((option, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-muted-foreground">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="luxury" size="lg" className="w-full text-lg">
                  Rezervasyon Yap
                </Button>
                
                <Button variant="outline" size="lg" className="w-full">
                  Fiyat Teklifi Al
                </Button>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    ✓ Ücretsiz iptal
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ✓ En iyi fiyat garantisi
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}