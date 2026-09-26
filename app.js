/**
 * ELVY HARDWARE - JAVASCRIPT APPLICATION
 * Complete Product Database & Interactive Features
 * Extracted directly from official ELVY CATALOGUE 2026.pdf
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. ELVY HARDWARE PRODUCT DATABASE (from 2026 Catalogue)
  // =========================================================================
  const products = [
    // --- Cabinet Handles (Zinc Die Cast) ---
    {
      code: "CH-1011",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast (White Metal)",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black, SS Satin, Pastel Blue, Pastel Green, Gold Glossy PVD, Rose Gold Glossy PVD",
      tagline: "Designed with Purpose",
      desc: "A sleek silhouette meets refined detailing, creating a handle that feels both modern and timeless. Perfect for interiors where simplicity makes the strongest statement.",
      page: "Page 05",
      type: "handle-straight",
      primaryColor: "gold"
    },
    {
      code: "CH-1012",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black, SS Satin, Gray",
      tagline: "Bold Geometry. Timeless Sophistication.",
      desc: "Defined by sharp angular edges and a sleek linear profile, this handle brings architectural elegance to contemporary wardrobes and drawers.",
      page: "Page 06",
      type: "handle-angular",
      primaryColor: "rosegold"
    },
    {
      code: "CH-1013",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Rose Gold Glossy PVD",
      tagline: "Grace in Every Curve",
      desc: "With its flowing silhouette and polished rose gold finish, this handle brings a soft yet luxurious character to modern interiors and designer furniture.",
      page: "Page 07",
      type: "handle-curved",
      primaryColor: "rosegold"
    },
    {
      code: "CH-1014",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black, Rose Gold Glossy PVD",
      tagline: "Artistry in Every Detail",
      desc: "A striking fusion of sleek geometry and intricate textured knurling, creating a captivating interplay of light and texture.",
      page: "Page 08",
      type: "handle-textured",
      primaryColor: "gold"
    },
    {
      code: "CH-1015",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black, SS Satin, Rose Gold Glossy PVD",
      tagline: "Fluid Lines. Effortless Elegance.",
      desc: "Defined by its gracefully tapered silhouette and gently curved profile, bringing a sense of fluidity and understated luxury to contemporary cabinetry.",
      page: "Page 09",
      type: "handle-curved",
      primaryColor: "black"
    },
    {
      code: "CH-1016",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black, Rose Gold",
      tagline: "Elegance in Every Contour",
      desc: "Inspired by the beauty of flowing forms, featuring a gracefully arched profile with softly broadened ends for comfortable luxury grip.",
      page: "Page 10",
      type: "handle-curved",
      primaryColor: "rosegold"
    },
    {
      code: "CH-1017",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black-Gray Dual Tone",
      tagline: "Pure Lines. Powerful Presence.",
      desc: "Defined by its elongated silhouette, softly rounded edges, and refined matte black finish. Embodies contemporary minimalist sophistication.",
      page: "Page 11",
      type: "handle-straight",
      primaryColor: "black"
    },
    {
      code: "CH-1018",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black, Gray, Pastel Blue, Pastel Green, Gold Glossy PVD, Rose Gold Glossy PVD",
      tagline: "Modern Simplicity. Distinctive Style.",
      desc: "Featuring a sleek rectangular silhouette with softly rounded corners, bringing a refined architectural touch to wardrobes and cabinetry.",
      page: "Page 12",
      type: "handle-straight",
      primaryColor: "gold"
    },
    {
      code: "CH-1021",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 128mm, 160mm, 224mm",
      finishes: "Black, SS Satin, Rosegold",
      tagline: "Sharp Angles. Refined Expression.",
      desc: "Defined by its precise angular ends and slender linear silhouette. Its polished metallic finishes add a sophisticated finishing touch.",
      page: "Page 15",
      type: "handle-angular",
      primaryColor: "rosegold"
    },
    {
      code: "CH-1023",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black Dual Tone, Black-Pastel Green, Gold Dual Tone PVD, Rosegold Dual Tone PVD",
      tagline: "The Art of Understated Luxury",
      desc: "A slender silhouette with luminous edges, crafted to bring quiet sophistication and dual-tone elegance to every modern room.",
      page: "Page 17",
      type: "handle-straight",
      primaryColor: "gold"
    },
    {
      code: "CH-1028",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black Dual Tone, Rosegold Dual Tone",
      tagline: "Precision with Presence",
      desc: "A bold rectangular profile gives CH-1028 its architectural character. The slim inset detail adds a subtle point of interest.",
      page: "Page 22",
      type: "handle-straight",
      primaryColor: "rosegold"
    },
    {
      code: "CH-1030",
      series: "01",
      category: "cabinet-zinc",
      categoryName: "Cabinet Handles",
      material: "Zinc Die Cast",
      sizes: "96mm, 160mm, 224mm, 288mm",
      finishes: "Black, SS Satin, Pastel Blue, Pastel Green, Rose Gold Glossy PVD",
      tagline: "The Beauty of a Gentle Curve",
      desc: "Flows from a smooth, rounded grip into softly angled ends, creating a calm and elegant silhouette for modern cabinetry.",
      page: "Page 24",
      type: "handle-curved",
      primaryColor: "gold"
    },

    // --- Designer Drawer Knobs ---
    {
      code: "KN-1501",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard Ergonomic Grip",
      finishes: "Black, SS Satin, Gray, Pastel Blue, Pastel Green, Antique Brass, Rosegold Matt, Gold Matt",
      tagline: "Faceted Elegance",
      desc: "A hexagonal drawer knob with crisp, sculpted geometric edges that catch the light and bring a bold architectural accent to cabinetry.",
      page: "Page 26",
      type: "knob-hex",
      primaryColor: "gold"
    },
    {
      code: "KN-1502",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black, Gold Matt",
      tagline: "The Art of Angles",
      desc: "A drawer knob with a sculpted diamond face that catches the light, adding a striking jewel-like detail to modern cabinetry.",
      page: "Page 27",
      type: "knob-diamond",
      primaryColor: "gold"
    },
    {
      code: "KN-1503",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black, SS Satin, Gray, Rosegold Glossy PVD, Gold Glossy PVD",
      tagline: "Elegance in Motion",
      desc: "A drawer knob with a softly sculpted, flowing fluid face that brings an organic and graceful luxury accent to modern furniture.",
      page: "Page 28",
      type: "knob-round",
      primaryColor: "rosegold"
    },
    {
      code: "KN-1504",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black, Brown, Gray, Pastel Blue, Pastel Green, Pastel Pink, Pastel Yellow, Walnut, Teakwood",
      tagline: "A Playful Arc",
      desc: "A half-circle drawer knob with a clean edge and gentle curve, adding a distinctive colorful accent to modern drawers.",
      page: "Page 29",
      type: "knob-halfmoon",
      primaryColor: "gold"
    },
    {
      code: "KN-1505",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black, SS Satin, Gray, Pastel Blue, Pastel Green, Gold Glossy PVD, Antique Brass, Rose Gold Glossy PVD",
      tagline: "Inspired by Nature",
      desc: "A leaf-shaped drawer knob with layered, flowing edges that lend cabinetry a sculptural, organic masterpiece finish.",
      page: "Page 30",
      type: "knob-leaf",
      primaryColor: "antique"
    },
    {
      code: "KN-1507",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "SS-Gray, Black Dual Tone, Rosegold Dual Tone, Gold Dual Tone",
      tagline: "A Circle of Sophistication",
      desc: "A sleek circular drawer knob with a subtle finger notch, pairing clean geometry with an easy and satisfying grip.",
      page: "Page 32",
      type: "knob-notch",
      primaryColor: "gold"
    },
    {
      code: "KN-1512",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast with Corian Stone",
      sizes: "Standard",
      finishes: "Black-White, Rosegold PVD-White, SS Satin-Smoky Brown",
      tagline: "An Accent to Admire",
      desc: "An oval drawer knob with a contrasting luxury Corian marble inset and slim metallic border, bringing jewel-like luxury to cabinetry.",
      page: "Page 37",
      type: "knob-corian",
      primaryColor: "rosegold"
    },
    {
      code: "KN-1513",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast with Corian Stone",
      sizes: "Standard",
      finishes: "Black-White, Rosegold PVD-White, Gold PVD-Smoky White, Antique Brass-Smoky Antique",
      tagline: "Half-Moon, Full of Character",
      desc: "A half-moon drawer knob with a contrasting stone inset and fine polished metallic border, adding a graceful detail to luxury cabinetry.",
      page: "Page 38",
      type: "knob-halfmoon",
      primaryColor: "gold"
    },
    {
      code: "KN-1521",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast with Natural Wood",
      sizes: "Standard",
      finishes: "Black Dual Tone, Walnut-Rosegold PVD",
      tagline: "Warmth in Every Detail",
      desc: "A round drawer knob with an authentic woodgrain face and high-gloss polished rim, creating a warm organic accent.",
      page: "Page 42",
      type: "knob-round",
      primaryColor: "wood"
    },
    {
      code: "KN-1523",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black Dual Tone, Gray-Rosegold Glossy PVD, Pastel Green-Gold Glossy PVD",
      tagline: "Detail in Every Circle",
      desc: "A round drawer knob with concentric textured rings and a polished dome centre, adding tactile depth and character.",
      page: "Page 43",
      type: "knob-rings",
      primaryColor: "gold"
    },
    {
      code: "KN-1528",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black, Gray, SS Satin, Pastel Blue, Pastel Green, Antique Brass, Rosegold Matt, Gold Matt",
      tagline: "Rhythm in the Details",
      desc: "A round drawer knob with a smooth face crossed by fine parallel grooves, adding rich texture and a modern architectural accent.",
      page: "Page 48",
      type: "knob-rings",
      primaryColor: "antique"
    },
    {
      code: "KN-1530",
      series: "02",
      category: "knobs",
      categoryName: "Drawer Knobs",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black Dual Tone, Gold PVD Dual Tone, Rosegold PVD Dual Tone, Gray-Rose Gold Glossy PVD",
      tagline: "Geometry with Depth",
      desc: "A triangular drawer knob with nested geometric grooves at its centre, bringing bold architectural detail to drawers and cabinetry.",
      page: "Page 50",
      type: "knob-diamond",
      primaryColor: "gold"
    },

    // --- Concealed & Sliding Handles (Zinc) ---
    {
      code: "SH-1606",
      series: "03",
      category: "conceal",
      categoryName: "Concealed Handles",
      material: "Zinc Die Cast",
      sizes: "Standard Flush Depth",
      finishes: "Black, Rosegold Matt",
      tagline: "Precision Framed in Elegance",
      desc: "Defined by its crisp rectangular frame and sleek recessed grip, SH-1606 brings architectural precision to sliding wardrobes and contemporary furniture.",
      page: "Page 53",
      type: "conceal-box",
      primaryColor: "rosegold"
    },
    {
      code: "SH-1607",
      series: "03",
      category: "conceal",
      categoryName: "Concealed Handles",
      material: "Zinc Die Cast",
      sizes: "Standard Flush Depth",
      finishes: "Black, Rosegold Glossy PVD",
      tagline: "Soft Curves. Seamless Luxury.",
      desc: "Gracefully rounded edges give SH-1607 a softer expression of minimalism. Its elongated recessed form creates a clean, effortless grip.",
      page: "Page 54",
      type: "conceal-round",
      primaryColor: "gold"
    },
    {
      code: "SH-1608",
      series: "03",
      category: "conceal",
      categoryName: "Concealed Handles",
      material: "Zinc Die Cast",
      sizes: "Standard Flush Depth",
      finishes: "Black, SS Satin, Rosegold Matt, Gold Matt",
      tagline: "Sharp Lines. Striking Presence.",
      desc: "Sculpted with angular ends and a sharply defined profile, where geometric precision meets understated luxury for sliding doors.",
      page: "Page 55",
      type: "conceal-box",
      primaryColor: "gold"
    },
    {
      code: "SH-1609",
      series: "03",
      category: "conceal",
      categoryName: "Concealed Handles",
      material: "Zinc Die Cast",
      sizes: "Standard Flush Depth",
      finishes: "Black, SS Satin, Rosegold Glossy PVD, Gold Glossy PVD",
      tagline: "Depth Defines the Detail",
      desc: "A beautifully layered border gives SH-1609 remarkable visual depth. Its deep recessed centre transforms a functional grip into an elegant statement.",
      page: "Page 56",
      type: "conceal-box",
      primaryColor: "rosegold"
    },

    // --- Drawer Pulls (Kadi) ---
    {
      code: "DK-1801",
      series: "04",
      category: "pulls",
      categoryName: "Drawer Pulls (Kadi)",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black, SS Satin, Antique Brass, Pastel Blue, Pastel Green, Rosegold Matt, Gold Matt",
      tagline: "A Refined Geometric Touch",
      desc: "A sleek drawer kadi with a rectangular base and square grip, bringing modern geometric elegance to every drawer.",
      page: "Page 57",
      type: "kadi-square",
      primaryColor: "gold"
    },
    {
      code: "DK-1802",
      series: "04",
      category: "pulls",
      categoryName: "Drawer Pulls (Kadi)",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black Dual Tone, Rose Gold Dual Tone, Antique Brass, CP-SS Satin",
      tagline: "A Touch of Quiet Opulence",
      desc: "A gently curved drawer kadi with a textured knurled grip and smooth, sweeping face. A refined detail for elegant cabinetry.",
      page: "Page 58",
      type: "kadi-drop",
      primaryColor: "antique"
    },
    {
      code: "DK-1803",
      series: "04",
      category: "pulls",
      categoryName: "Drawer Pulls (Kadi)",
      material: "Zinc Die Cast",
      sizes: "Standard",
      finishes: "Black Dual Tone, Black-Pastel Blue, Rose Gold Dual Tone, Gold-Antique Brass, Gold Dual Tone, CP-SS Satin",
      tagline: "A Graceful Half-Moon",
      desc: "A half-moon drawer kadi with a smooth face and curved lip, bringing a polished finishing touch to vanity drawers and consoles.",
      page: "Page 59",
      type: "kadi-halfmoon",
      primaryColor: "rosegold"
    },
    {
      code: "DP-1951",
      series: "06",
      category: "pulls",
      categoryName: "Drawer Puller",
      material: "Zinc Die Cast",
      sizes: "Standard Recessed Form",
      finishes: "CP-SS Satin, Black Dual Tone, Rosegold Dual Tone, Gold Dual Tone",
      tagline: "Perfect Rounded. Effortlessly Refined.",
      desc: "A sculpted circular profile with a seamlessly recessed grip, turning simplicity into sophisticated luxury on modern cabinets.",
      page: "Page 62",
      type: "puller-circle",
      primaryColor: "gold"
    },

    // --- Main Door & Double Door Handles ---
    {
      code: "MD-1901 RAJWADI",
      series: "05",
      category: "main-door",
      categoryName: "Main Door Handle",
      material: "Zinc Die Cast",
      sizes: "Standard 14” (Large Entrance)",
      finishes: "Antique Brass Dual Shade",
      tagline: "A Grand Welcome, Rich in Detail",
      desc: "The Rajwadi main door handle brings a regal royal touch to the entrance with its antique brass tone and ornate, leaf-inspired detailing. Turned ends and round mounting bases create a striking focal point.",
      page: "Page 61",
      type: "handle-rajwadi",
      primaryColor: "antique"
    },
    {
      code: "DD-4401",
      series: "11",
      category: "double-door",
      categoryName: "Double Door Handle",
      material: "Solid Brass",
      sizes: "6” Standard Diameter",
      finishes: "Black, Antique Brass Glossy, Rose Gold Glossy PVD",
      tagline: "Designed to Complete",
      desc: "A versatile half-moon handle crafted for wardrobes, cabinets and mandir doors. Elegant on its own, exceptional as a pair forming a complete circle on double doors.",
      page: "Page 80",
      type: "double-door-halfmoon",
      primaryColor: "gold"
    },
    {
      code: "MD-5601",
      series: "12",
      category: "main-door",
      categoryName: "Main Door Handle",
      material: "Heavy Stainless Steel Solid",
      sizes: "12”, 18”, 36” Lengths",
      finishes: "Antique Brass Finish",
      tagline: "Lines That Make an Entrance",
      desc: "A heavy main door handle with a broad, antique-toned face and sharp diagonal grooves, bringing a bold geometric statement to the villa entrance.",
      page: "Page 81",
      type: "handle-straight",
      primaryColor: "antique"
    },
    {
      code: "MD-5602",
      series: "12",
      category: "main-door",
      categoryName: "Main Door Handle",
      material: "Heavy Stainless Steel Solid",
      sizes: "12”, 18”, 36”",
      finishes: "Brushed Gold / Antique Brass",
      tagline: "A Refined First Impression",
      desc: "A cylindrical main door handle with a brushed gold-toned grip and polished ribbed fluted accents at each heavy mounting point.",
      page: "Page 82",
      type: "handle-straight",
      primaryColor: "gold"
    },

    // --- Aluminium Long Series Handles ---
    {
      code: "CH-2201",
      series: "07",
      category: "aluminium",
      categoryName: "Aluminium Cabinet Handle",
      material: "Solid Extruded Aluminium",
      sizes: "128mm, 160mm, 224mm, 450mm",
      finishes: "Black, Rose Gold (Anodized)",
      tagline: "Texture That Tells a Story",
      desc: "An elongated profile gives CH-2201 a striking presence, while fine linear detailing adds texture along its surface. Raised grip with slim architectural supports.",
      page: "Page 63",
      type: "handle-straight",
      primaryColor: "rosegold"
    },
    {
      code: "CH-2203",
      series: "07",
      category: "aluminium",
      categoryName: "Aluminium Cabinet Handle",
      material: "Solid Extruded Aluminium",
      sizes: "160mm, 224mm, 900mm (Floor to Ceiling)",
      finishes: "SS, Shiny Black, Rose Gold (Anodized)",
      tagline: "The Rhythm of Refined Lines",
      desc: "Parallel grooves run the entire length of CH-2203, bringing rich texture and subtle play of light to its bold profile. Broad sculpted ends frame the open grip.",
      page: "Page 65",
      type: "handle-straight",
      primaryColor: "black"
    },
    {
      code: "CH-2205",
      series: "07",
      category: "aluminium",
      categoryName: "Aluminium Cabinet Handle",
      material: "Solid Extruded Aluminium",
      sizes: "96mm, 160mm, 224mm, 320mm, 575mm, 900mm",
      finishes: "Shiny Black, Gold (Anodized), Rose Gold Glossy PVD",
      tagline: "A Line of Pure Luxury",
      desc: "Makes an impression through its long, uninterrupted face and precise understated edges. The recessed opening beneath the grip adds architectural depth.",
      page: "Page 67",
      type: "handle-straight",
      primaryColor: "gold"
    },
    {
      code: "CH-2209",
      series: "07",
      category: "aluminium",
      categoryName: "Aluminium Cabinet Handle",
      material: "Solid Extruded Aluminium",
      sizes: "50mm, 160mm, 224mm, 320mm, 900mm",
      finishes: "Black Dual Tone, Rosegold Dual Tone, Green-Gold (Anodized)",
      tagline: "Detail Worth Discovering",
      desc: "Fine horizontal texture gives this long handle depth, while small contrasting accents near each end add a distinctive designer touch.",
      page: "Page 71",
      type: "handle-straight",
      primaryColor: "gold"
    },
    {
      code: "SH-2401",
      series: "08",
      category: "conceal",
      categoryName: "Aluminium Sliding Handle",
      material: "Solid Extruded Aluminium",
      sizes: "160mm, 224mm, 900mm",
      finishes: "Black Dual Tone, Rosegold Dual Tone (Anodized)",
      tagline: "Sleek from End to End",
      desc: "An elongated wardrobe sliding handle with a recessed grip and clean flat face for a streamlined contemporary aesthetic.",
      page: "Page 73",
      type: "conceal-box",
      primaryColor: "rosegold"
    },
    {
      code: "PR-2502",
      series: "09",
      category: "aluminium",
      categoryName: "Profile Handle",
      material: "Solid Aluminium (Brush Anodized)",
      sizes: "3”, 6”, 8”, 12”, 16”, 18”, 20”, 22”, 24”, 26”, 30”",
      finishes: "SS, Black, Rosegold, Gold (Brush Anodized)",
      tagline: "Minimal Form. Maximum Impact.",
      desc: "Defined by a sleek linear profile and crisp architectural edges, PR-2502 blends effortlessly into contemporary kitchen and wardrobe shutters.",
      page: "Page 74",
      type: "handle-straight",
      primaryColor: "gold"
    },

    // --- Solid Wooden Series ---
    {
      code: "WC-7001",
      series: "13",
      category: "wooden",
      categoryName: "Solid Wooden Cabinet Handle",
      material: "100% Solid Seasoned Wood",
      sizes: "6”, 12”, 18”, 24”",
      finishes: "Natural Wood Grain Finish",
      tagline: "Warmth in Every Detail",
      desc: "A wooden wardrobe handle with a slender profile, visible natural grain and gently sculpted ends for an understated, organic look.",
      page: "Page 86",
      type: "handle-wood",
      primaryColor: "wood"
    },
    {
      code: "WC-7002",
      series: "13",
      category: "wooden",
      categoryName: "Solid Wooden Cabinet Handle",
      material: "Solid Natural Wood",
      sizes: "6”, 12”, 18”, 24”, 36”",
      finishes: "Natural Wood",
      tagline: "Nature Takes Shape",
      desc: "A wooden wardrobe handle with an angular, tapered profile and visible grain, adding a sculptural accent to designer cabinetry.",
      page: "Page 87",
      type: "handle-wood",
      primaryColor: "wood"
    },
    {
      code: "WDP-7201",
      series: "14",
      category: "wooden",
      categoryName: "Wooden Drawer Puller",
      material: "Solid Natural Wood",
      sizes: "4”, 8”, 12”, 18”",
      finishes: "Natural Wood",
      tagline: "A Natural Touch, Beautifully Framed",
      desc: "A wooden handle for drawers and wardrobes, shown with elongated grip openings and softly carved channels. Visible grain brings warmth to modern lines.",
      page: "Page 92",
      type: "handle-wood",
      primaryColor: "wood"
    },
    {
      code: "WSL-7301",
      series: "15",
      category: "wooden",
      categoryName: "Wooden Conceal Handle",
      material: "Solid Natural Wood",
      sizes: "4”, 8”, 12”, 18”",
      finishes: "Natural Wood",
      tagline: "Naturally Understated",
      desc: "A wooden sliding and concealed handle with a slim rectangular profile and recessed finger grip. Brings natural warmth to low-profile designs.",
      page: "Page 95",
      type: "conceal-box",
      primaryColor: "wood"
    },
    {
      code: "WKN-7401",
      series: "16",
      category: "wooden",
      categoryName: "Wooden Drawer Knob",
      material: "Solid Natural Wood",
      sizes: "Small, Big (Dual Set)",
      finishes: "Natural Wood",
      tagline: "Naturally Rounded",
      desc: "A wooden drawer knob with a smooth, rounded domed top and visible grain, adding a warm understated touch to custom cabinetry.",
      page: "Page 97",
      type: "knob-round",
      primaryColor: "wood"
    },
    {
      code: "WDD-7501",
      series: "17",
      category: "double-door",
      categoryName: "Wooden Double Door Handle",
      material: "Solid Natural Wood",
      sizes: "Standard 6” Diameter",
      finishes: "Natural Wood",
      tagline: "Two Halves, One Statement",
      desc: "A wooden handle pair for double wardrobe doors. The two semicircular pieces form a complete circle when the doors close, with visible organic grain.",
      page: "Page 103",
      type: "double-door-halfmoon",
      primaryColor: "wood"
    },
    {
      code: "WKH-7601",
      series: "18",
      category: "wooden",
      categoryName: "Cloth Hanger (Khuti)",
      material: "Solid Natural Wood",
      sizes: "4 Hook, 6 Hook Options",
      finishes: "Natural Wood",
      tagline: "A Place for Every Layer",
      desc: "A wooden wall-mounted cloth hanger with evenly spaced pegs, offering a neat, architectural place for coats, scarves, and everyday essentials.",
      page: "Page 106",
      type: "khuti-wood",
      primaryColor: "wood"
    }
  ];

  // =========================================================================
  // 2. PRODUCT SVG GRAPHIC GENERATOR (Photorealistic Metallic Styles)
  // =========================================================================
  function generateProductSVG(type, primaryColor) {
    let gradDef = '';
    let mainColor = '';

    if (primaryColor === 'gold') {
      gradDef = `
        <linearGradient id="grad-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b8860b" />
          <stop offset="35%" stop-color="#ffd700" />
          <stop offset="65%" stop-color="#fff4b8" />
          <stop offset="100%" stop-color="#996515" />
        </linearGradient>`;
      mainColor = 'url(#grad-gold)';
    } else if (primaryColor === 'rosegold') {
      gradDef = `
        <linearGradient id="grad-rosegold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#803e35" />
          <stop offset="40%" stop-color="#d98880" />
          <stop offset="70%" stop-color="#fedbd0" />
          <stop offset="100%" stop-color="#6e2c24" />
        </linearGradient>`;
      mainColor = 'url(#grad-rosegold)';
    } else if (primaryColor === 'antique') {
      gradDef = `
        <linearGradient id="grad-antique" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4a3713" />
          <stop offset="45%" stop-color="#bfa254" />
          <stop offset="75%" stop-color="#543b12" />
          <stop offset="100%" stop-color="#2b1f09" />
        </linearGradient>`;
      mainColor = 'url(#grad-antique)';
    } else if (primaryColor === 'wood') {
      gradDef = `
        <linearGradient id="grad-wood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a0683a" />
          <stop offset="35%" stop-color="#deaa79" />
          <stop offset="70%" stop-color="#b67a49" />
          <stop offset="100%" stop-color="#704423" />
        </linearGradient>`;
      mainColor = 'url(#grad-wood)';
    } else {
      // Black / Dark Metallic
      gradDef = `
        <linearGradient id="grad-black" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18181a" />
          <stop offset="50%" stop-color="#3d3d42" />
          <stop offset="100%" stop-color="#141416" />
        </linearGradient>`;
      mainColor = 'url(#grad-black)';
    }

    if (type === 'knob-hex') {
      return `
        <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <ellipse cx="80" cy="98" rx="42" ry="12" fill="#000000" opacity="0.45" />
          <polygon points="80,20 120,40 120,80 80,100 40,80 40,40" fill="${mainColor}" stroke="#ffffff" stroke-width="0.75" />
          <polygon points="80,32 108,46 108,74 80,88 52,74 52,46" fill="rgba(255,255,255,0.18)" />
          <circle cx="80" cy="60" r="14" fill="${mainColor}" opacity="0.8" />
        </svg>`;
    } else if (type === 'knob-diamond') {
      return `
        <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <ellipse cx="80" cy="95" rx="38" ry="10" fill="#000000" opacity="0.45" />
          <polygon points="80,18 128,60 80,102 32,60" fill="${mainColor}" stroke="#ffffff" stroke-width="0.75" />
          <polygon points="80,30 114,60 80,90 46,60" fill="rgba(255,255,255,0.25)" />
        </svg>`;
    } else if (type === 'knob-round' || type === 'knob-rings') {
      return `
        <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <ellipse cx="80" cy="92" rx="40" ry="12" fill="#000000" opacity="0.45" />
          <circle cx="80" cy="56" r="38" fill="${mainColor}" stroke="#ffffff" stroke-width="0.75" />
          <circle cx="80" cy="56" r="26" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" />
          <circle cx="80" cy="56" r="16" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" />
          <circle cx="80" cy="56" r="8" fill="#ffffff" opacity="0.4" />
        </svg>`;
    } else if (type === 'knob-halfmoon') {
      return `
        <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <ellipse cx="80" cy="94" rx="42" ry="10" fill="#000000" opacity="0.45" />
          <path d="M30 65 A 50 50 0 0 0 130 65 Z" fill="${mainColor}" stroke="#ffffff" stroke-width="0.75" />
          <path d="M40 65 A 40 40 0 0 0 120 65 Z" fill="rgba(255,255,255,0.2)" />
        </svg>`;
    } else if (type === 'knob-corian') {
      return `
        <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <ellipse cx="80" cy="95" rx="42" ry="11" fill="#000000" opacity="0.45" />
          <ellipse cx="80" cy="58" rx="44" ry="28" fill="${mainColor}" stroke="#ffffff" stroke-width="1" />
          <ellipse cx="80" cy="58" rx="34" ry="20" fill="#f8f9fa" />
          <path d="M60 52 Q 72 64 92 50 Q 104 60 110 54" stroke="#c0b299" stroke-width="1.5" fill="none" opacity="0.7"/>
        </svg>`;
    } else if (type === 'conceal-box' || type === 'conceal-round') {
      const rx = type === 'conceal-round' ? '18' : '4';
      return `
        <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <rect x="20" y="36" width="140" height="48" rx="${rx}" fill="${mainColor}" stroke="#ffffff" stroke-width="0.75" />
          <rect x="36" y="46" width="108" height="28" rx="${rx}" fill="#08080a" />
          <line x1="42" y1="60" x2="138" y2="60" stroke="${mainColor}" stroke-width="2" opacity="0.7"/>
        </svg>`;
    } else if (type === 'kadi-square' || type === 'kadi-drop' || type === 'kadi-halfmoon') {
      return `
        <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <rect x="62" y="24" width="36" height="22" rx="3" fill="#1b1c24" stroke="${mainColor}" stroke-width="1.5" />
          <path d="M42 46 C42 46, 80 88, 118 46" fill="none" stroke="${mainColor}" stroke-width="10" stroke-linecap="round" />
          <circle cx="80" cy="74" r="7" fill="#ffffff" opacity="0.4" />
        </svg>`;
    } else if (type === 'double-door-halfmoon') {
      return `
        <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <path d="M74 20 A 40 40 0 0 0 74 100 Z" fill="${mainColor}" stroke="#ffffff" stroke-width="0.75"/>
          <path d="M86 20 A 40 40 0 0 1 86 100 Z" fill="${mainColor}" stroke="#ffffff" stroke-width="0.75"/>
        </svg>`;
    } else if (type === 'handle-rajwadi') {
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <line x1="30" y1="60" x2="170" y2="60" stroke="${mainColor}" stroke-width="14" stroke-linecap="round" />
          <circle cx="45" cy="60" r="12" fill="${mainColor}" stroke="#ffffff" stroke-width="1" />
          <circle cx="155" cy="60" r="12" fill="${mainColor}" stroke="#ffffff" stroke-width="1" />
          <ellipse cx="100" cy="60" rx="18" ry="14" fill="${mainColor}" stroke="#ffffff" stroke-width="1" />
          <path d="M88 60 Q 100 48 112 60 Q 100 72 88 60 Z" fill="#2b1f09" opacity="0.6"/>
        </svg>`;
    } else if (type === 'khuti-wood') {
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <rect x="25" y="50" width="150" height="20" rx="4" fill="${mainColor}" stroke="#523214" stroke-width="1" />
          <rect x="45" y="32" width="12" height="24" rx="2" fill="${mainColor}" transform="rotate(-15 45 32)" />
          <rect x="85" y="32" width="12" height="24" rx="2" fill="${mainColor}" transform="rotate(-15 85 32)" />
          <rect x="125" y="32" width="12" height="24" rx="2" fill="${mainColor}" transform="rotate(-15 125 32)" />
          <rect x="165" y="32" width="12" height="24" rx="2" fill="${mainColor}" transform="rotate(-15 165 32)" />
        </svg>`;
    } else {
      // Default: Elegant Straight or Curved Handle
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>${gradDef}</defs>
          <ellipse cx="100" cy="85" rx="75" ry="10" fill="#000000" opacity="0.45" />
          <!-- Base Supports -->
          <rect x="36" y="55" width="16" height="24" rx="2" fill="${mainColor}" />
          <rect x="148" y="55" width="16" height="24" rx="2" fill="${mainColor}" />
          <!-- Main Bar -->
          <rect x="24" y="44" width="152" height="15" rx="4" fill="${mainColor}" stroke="#ffffff" stroke-width="0.75" />
          <line x1="30" y1="47" x2="170" y2="47" stroke="#ffffff" stroke-width="1.5" opacity="0.4"/>
        </svg>`;
    }
  }

  // =========================================================================
  // 3. CATALOG RENDERING & FILTERING
  // =========================================================================
  const productGrid = document.getElementById('productGrid');
  const resultsCount = document.getElementById('resultsCount');
  const catalogSearch = document.getElementById('catalogSearch');
  const clearSearch = document.getElementById('clearSearch');
  const filterPills = document.querySelectorAll('.pill-btn');

  let activeFilter = 'all';
  let searchTerm = '';

  function renderProducts() {
    if (!productGrid) return;

    const filtered = products.filter(item => {
      // Category match
      const matchCat = activeFilter === 'all' || item.category === activeFilter;
      // Search match
      const q = searchTerm.toLowerCase();
      const matchSearch = !searchTerm || 
        item.code.toLowerCase().includes(q) ||
        item.finishes.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });

    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${products.length} models`;
    }

    if (filtered.length === 0) {
      productGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #4b5563; margin-bottom: 16px;"></i>
          <h3 style="color: #ffffff; font-size: 1.4rem;">No matching models found</h3>
          <p style="color: #9ca3af; margin-top: 6px;">Try searching with a different product code like "CH-1011" or "KN-1501".</p>
          <button class="btn btn-outline" style="margin-top: 18px;" onclick="resetSearch()">Reset Filters</button>
        </div>`;
      return;
    }

    productGrid.innerHTML = filtered.map(item => {
      const waMessage = encodeURIComponent(`Hello Elvy Hardware, I would like to inquire about Product Model: ${item.code} (${item.categoryName}) from your 2026 Catalogue.`);
      
      return `
        <article class="product-card" data-code="${item.code}">
          <div class="card-top">
            <span class="product-chip">${item.categoryName}</span>
            <span class="page-chip">${item.page}</span>
          </div>

          <div class="product-visual-box">
            ${generateProductSVG(item.type, item.primaryColor)}
          </div>

          <h3 class="product-code">${item.code}</h3>
          <h4 class="product-tagline">${item.tagline}</h4>
          <p class="product-desc">${item.desc}</p>

          <div class="product-specs">
            <div class="spec-row">
              <span class="spec-key">Material:</span>
              <span class="spec-val">${item.material}</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Sizes:</span>
              <span class="spec-val">${item.sizes}</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Finishes:</span>
              <span class="spec-val" title="${item.finishes}">${item.finishes}</span>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-card-view" onclick="openProductModal('${item.code}')">
              <i class="fa-solid fa-eye"></i> Quick View
            </button>
            <a href="https://wa.me/918828188854?text=${waMessage}" target="_blank" class="btn-card-wa">
              <i class="fa-brands fa-whatsapp"></i> Inquire
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter Pill Click Handlers
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter');
      renderProducts();
    });
  });

  // Global Function for Flipbox Jump
  window.filterCatalog = function(categoryKey) {
    activeFilter = categoryKey;
    filterPills.forEach(p => {
      if (p.getAttribute('data-filter') === categoryKey) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // Scroll smoothly to catalog section
    const catSection = document.getElementById('catalogue');
    if (catSection) {
      catSection.scrollIntoView({ behavior: 'smooth' });
    }
    renderProducts();
  };

  // Search Input Handler
  if (catalogSearch) {
    catalogSearch.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      if (clearSearch) {
        clearSearch.style.display = searchTerm.length > 0 ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      catalogSearch.value = '';
      searchTerm = '';
      clearSearch.style.display = 'none';
      renderProducts();
      catalogSearch.focus();
    });
  }

  window.resetSearch = function() {
    activeFilter = 'all';
    searchTerm = '';
    if (catalogSearch) catalogSearch.value = '';
    if (clearSearch) clearSearch.style.display = 'none';
    filterPills.forEach(p => {
      if (p.getAttribute('data-filter') === 'all') p.classList.add('active');
      else p.classList.remove('active');
    });
    renderProducts();
  };

  // Initial render
  renderProducts();

  // =========================================================================
  // 4. QUICK VIEW MODAL SYSTEM
  // =========================================================================
  const productModalOverlay = document.getElementById('productModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  window.openProductModal = function(code) {
    const item = products.find(p => p.code === code);
    if (!item || !modalBody || !productModalOverlay) return;

    const waText = encodeURIComponent(`Hello Elvy Hardware, I am inquiring about model ${item.code} from the 2026 Catalogue. Please provide pricing and availability for wholesale orders.`);

    modalBody.innerHTML = `
      <div class="modal-grid">
        <div class="modal-visual-card">
          ${generateProductSVG(item.type, item.primaryColor)}
        </div>

        <div class="modal-info-col">
          <div class="modal-badge">${item.categoryName} &bull; ${item.page}</div>
          <h2 class="modal-title">${item.code}</h2>
          <h4 class="modal-tagline">${item.tagline}</h4>
          <p class="modal-desc">${item.desc}</p>

          <div class="modal-specs-table">
            <div class="spec-row">
              <span class="spec-key">Material Specification:</span>
              <span class="spec-val">${item.material}</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Available Sizes:</span>
              <span class="spec-val">${item.sizes}</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Finish Palette:</span>
              <span class="spec-val">${item.finishes}</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Wholesale Packaging:</span>
              <span class="spec-val">Bulk Master Cartons with Protective Foams</span>
            </div>
          </div>

          <div class="modal-actions">
            <a href="https://wa.me/918828188854?text=${waText}" target="_blank" class="btn btn-primary" style="flex: 1;">
              <i class="fa-brands fa-whatsapp"></i> WhatsApp Quote for ${item.code}
            </a>
            <a href="tel:+918828188854" class="btn btn-outline">
              <i class="fa-solid fa-phone"></i> Call Sales
            </a>
          </div>
        </div>
      </div>
    `;

    productModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (productModalOverlay) {
      productModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (productModalOverlay) {
    productModalOverlay.addEventListener('click', (e) => {
      if (e.target === productModalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // =========================================================================
  // 5. MOBILE DRAWER NAVIGATION
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // =========================================================================
  // 6. SCROLLSPY & HEADER SHADOW
  // =========================================================================
  const mainHeader = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header Blur/Shadow
    if (scrollPos > 60) {
      mainHeader.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
    } else {
      mainHeader.style.boxShadow = 'none';
    }

    // Back to top button visibility
    if (backToTop) {
      if (scrollPos > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Active link highlighting
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 7. WHOLESALE INQUIRY FORM & WHATSAPP DISPATCH
  // =========================================================================
  const wholesaleForm = document.getElementById('wholesaleForm');
  const directWhatsAppBtn = document.getElementById('directWhatsAppBtn');
  const formFeedback = document.getElementById('formFeedback');

  function gatherFormData() {
    const name = document.getElementById('fullName')?.value || '';
    const company = document.getElementById('companyName')?.value || 'N/A';
    const phone = document.getElementById('phoneNum')?.value || '';
    const email = document.getElementById('emailAddr')?.value || '';
    const city = document.getElementById('cityState')?.value || '';
    const type = document.getElementById('businessType')?.value || '';
    const message = document.getElementById('inquiryMessage')?.value || '';

    const checkedBoxes = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
      .map(cb => cb.value)
      .join(', ');

    return { name, company, phone, email, city, type, interests: checkedBoxes, message };
  }

  if (wholesaleForm) {
    wholesaleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = gatherFormData();

      if (!data.name || !data.phone) {
        alert('Please fill out your Name and Phone Number.');
        return;
      }

      const msg = `*NEW WHOLESALE INQUIRY - ELVY HARDWARE*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Company:* ${data.company}\n` +
        `*Phone:* ${data.phone}\n` +
        `*Email:* ${data.email}\n` +
        `*Location:* ${data.city}\n` +
        `*Type:* ${data.type}\n` +
        `*Interested Categories:* ${data.interests}\n` +
        `*Message/Specs:* ${data.message}`;

      const waUrl = `https://wa.me/918828188854?text=${encodeURIComponent(msg)}`;

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>Thank you, ${data.name}!</strong><br/>
          Your wholesale inquiry has been recorded. Redirecting to WhatsApp for immediate executive dispatch...
        `;
      }

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 900);
    });
  }

  if (directWhatsAppBtn) {
    directWhatsAppBtn.addEventListener('click', () => {
      const data = gatherFormData();
      const clientName = data.name || 'Client';
      const msg = `Hello Elvy Hardware! My name is ${clientName} (${data.type || 'Architect/Retailer'}). I would like to inquire about your 2026 Collection, catalogue pricing, and sample availability for ${data.city || 'our projects'}.`;
      window.open(`https://wa.me/918828188854?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // Setia Electricals style 3D touch toggle for mobile devices
  const flipboxes = document.querySelectorAll('.flipbox-item');
  flipboxes.forEach(fb => {
    fb.addEventListener('click', (e) => {
      // If clicked on button inside, don't toggle
      if (e.target.closest('button')) return;
      fb.classList.toggle('flipped');
    });
  });

});
