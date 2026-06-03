const products = [
  {
    id: 1,
    name: "Pel",
    price: "Rs.119,900",
    image: "assets/img/pel fridge red.webp",
    description: "Pel digitiron ultra invertor curved glassdoor refrigerator."
  },
  {
    id: 2,
    name: "Pel",
    price: "Rs.109,000",
    image: "assets/img/pel fridge golden.webp",
    description: "Pel life pro prlp 21860 refrigerator"
  },
  {
    id: 3,
    name: "Pel",
    price: "Rs.89,900",
    image: "assets/img/pel glassdoor red fridge.webp",
    description: "Pel invertoron flatglassdoor refrigerator."
  },
  {
    id: 4,
    name: "Pel",
    price: "Rs.112,500",
    image: "assets/img/pel fridge green.webp",
    description: " Pel invertoron glassdoor refrigerator 6350 GD INV."
  },
  {
    id: 5,
    name: "Pel",
    price: "Rs.47,500",
    image: "assets/img/pel room fridge white.webp",
    description: "Pel life pro refrigeartor room series."
  },
  {
    id: 6,
    name: "Pel",
    price: "Rs,45,999",
    image: "assets/img/pel full red glassdoor.webp",
    description: "pel 8 cu ft glassdoor Refrigerator (PRGD120)"
  },
  {
    id: 7,
    name: "Pel",
    price: "Rs.94,700",
    image: "assets/img/pel green and blue fridge.webp",
    description: "Pel Refrigerator PRGD-2350."
  },
  {
    id: 8,
    name: "",
    price: "Rs.86,000",
    image: "assets/img/pel fridge purple.png",
    description: "Pel Rfrigerator 2350 cuved invertor cuved glassdoor"
  },
  {
    id: 9,
    name: "Samsung",
    price: "Rs.161,999",
    image: "assets/img/samsung led  1.jpg",
    description: "Samsung 4K smart LED 50AU7000 crysttal UHD "
  },
  {
    id: 10,
    name: "Samsung",
    price: "RS.174,999",
    image: "assets/img/samsung led 2.jpg",
    description: "Samsung 50 UHD smart LED TV 50DU8000"
  }, 
  {
    id: 11,
    name: "Samsung",
    price: "Rs.24,199",
    image: "assets/img/samsung led 3.webp",
    description: "Samsung 32 Inch UHD flat smart TV (MU5300) "
  },
  {
    id: 12,
    name: "Samsung",
    price: "Rs.69,999",
    image: "assets/imG/samsung led 4.png",
    description: "Samsung 43 Inch (43NU7100)  UHD 4K smart LED "
  },
  {
    id: 13,
    name: "Samsung",
    price: "Rs,78,669",
    image: "assets/img/samsung led  5.webp",
    description: "Samsung 48 Inch FHD smart LED TV (48K5000)"
  },
  {
    id: 14,
    name: "Samsung",
    price: "Rs,159,999",
    image: "assets/img/samsung led 6.webp",
    description: " 50JS7200 Samsung SUHD smart 4K LED TV black "
  },
  {
    id: 15,
    name: "Samsung",
    price: "Rs.265,000",
    image: "assets/img/samsung led 7.jpg",
    description: "Samsung 55 Inch curved 4K HD smart LED YV ( 55Q8C)"
  },
  {
    id: 16,
    name: "Samsung",
    price: "Rs.128,899",
    image: "assets/img/samsung led 8.jpg",
    description: "Samsung 55Inch 4K UHD smart LED (55RU7400)"
  },
  {
    id: 17,
    name: "DAWLANCE",
    price: "Rs.180,500",
    image: "assets/img/dawlance ac 1.webp",
    description: "Invertor Ac 1.5 Ton Enercon-30"
  },
{
    id: 18,
    name: "DAWLANCE",
    price: "RS.160,000",
    image: "assets/img/dawlance ac 2.webp",
    description: "Air Conditioner 1.5 Ton - Avante 30 Invertor (classic maroon)"
  },
  {
    id: 19,
    name: "DAWLANCE",
    price: "Rs.165,000",
    image: "assets/img/dawlance ac 3.jpg",
    description: "1.5 Ton Invertor AC megat -30 plus"
  },
  {
    id: 20,
    name: "DAWLANCE",
    price: "Rs.150,000",
    image: "assets/imG/dawlance ac 4.webp",
    description: "Econo+ X 1.5 Ton Invertor Split AC "
  },
  {
    id: 21,
    name: "DAWLANCE",
    price: "Rs,134,000",
    image: "assets/img/dawlance ac 5.jpg",
    description: "1.5 Ton Sprinter T3 Sprinter 30 "
  },
  {
    id: 22,
    name: "DAWLANCE",
    price: "Rs,134,000",
    image: "assets/img/dawlance 2 ac 6.png",
    description: "AC 30 ENERCON X T3 Ton heat and cool Invertor split"
  },
  {
    id: 23,
    name: "DAWLANCE",
    price: "Rs.304,300",
    image: "assets/img/dawlance ac 7.jpg",
    description: "Gallant FS Invertor 45 Invertor Floor Standing AC "
  },
  {
    id: 24,
    name: "DAWLANCE",
    price: "Rs.345,000",
    image: "assets/img/dawlance ac 8.webp",
    description: "2 Ton Gallant FS45 Invertor Floor standing AC"
  },
  {
    id: 25,
    name: "Dawlance",
    price: "Rs.140,000",
    image: "assets/img/dawlance wm 1.webp",
    description: "DWF 7200 X Invertor Front Load Washin Machine"
  },
  {
    id: 26,
    name: "Dawlance",
    price: "RS.76,000",
    image: "assets/img/dawlance wm 2.jpg",
    description: "Top Loading Washing Machine 11671FLT"
  },
  {
    id: 27,
    name: "Dawlance",
    price: "Rs.52,500",
    image: "assets/img/dawlance wm 3.jpg",
    description: "Washing Machine 9kg Automatic Top Load"
  },
  {
    id: 28,
    name: "Dawlance",
    price: "Rs.85,599",
    image: "assets/img/dawlance wm 4.webp",
    description: "Top Load Fully Automatic Machine(DWT 116XADS+) "
  },
  {
    id: 29,
    name: "Dawlance",
    price: "Rs,137,800",
    image: "assets/img/daawlance wm 5.jpg",
    description: "Front Load 7kg Washin Machine"
  },
  {
    id: 30,
    name: "Dawlance",
    price: "Rs,68,999",
    image: "assets/img/dawlance wm 6.webp",
    description: "DWT-1167 FLP Top Load Washing Machine"
  },
  {
    id: 31,
    name: "Dawlance",
    price: "Rs.216,700",
    image: "assets/img/dawlance wm 7.webp",
    description: "DWD 85400 S Invertor Front Load Washing Machine"
  },
  {
    id: 32,
    name: "Dawlance",
    price: "Rs.100,400",
    image: "assets/img/dawlance wm 8.webp",
    description: "DWT 270 C LVS+ top Load Washing Machine"
  },
  {
   id: 33,
    name: "NATIONAL",
    price: "Rs.27,900.00",
    image: "assets/img/natl cooloer 1.webp",
    description: "Air Cooler NAC-4200"
  },
   {
   id: 34,
    name: "NATIONAL",
    price: "Rs.33,000.00",
    image: "assets/img/natl cooloer 2.webp",
    description: "Air cooler NAC-6500"
  },
   {
   id: 35,
    name: "NATIONAL",
    price: "Rs.30,500.00",
    image: "assets/img/natl iron 3.webp",
    description: "Air Cooler NAC-5100"
  },
  {
   id:36 ,
    name: "National",
    price: "Rs.19,000.00",
    image: "assets/img/natl geyser2.webp",
    description: "GEYSER NEWH-11000"
  },
  {
   id: 37,
    name: "National",
    price: "Rs.26,500.00",
    image: "assets/img/natl geyser3.webp",
    description: "GEYSER NEWH-32000"
  },
  {
   id: 38,
    name: "National",
    price: "Rs.49,000.00",
    image: "assets/img/natl geyser4.webp",
    description: "Geyser NG-2035 EG"
  },
  {
   id: 39,
    name: "National",
    price: "Rs.44,000.00",
    image: "assets/img/natl geyser5.webp",
    description: "Geyser NG-2035 EG"
  },
  {
   id: 40,
    name: "National",
    price: "Rs.18,500.00",
    image: "assets/img/national geyser 1.webp",
    description: "Instant Geyser NWH-207 NG"
  },
  {
   id: 41 ,
    name: "Haier",
    price: "Rs.194,000",
    image: "assets/img/Haier AC.jpeg",
    description: "Haier 2 Ton Inverter AC HSU-24HFCD"
  },
  {
   id: 42,
    name: "Haier",
    price: "Rs.177,000",
    image: "assets/img/HAIER AC 2.jpeg",
    description: "Haier HSU-18HFTCA Thunder Inverter Air Conditioner"
  },
  {
   id: 43,
    name: "Haier",
    price: "Rs.137,000",
    image: "assets/img/haier ac 3.jpeg",
    description: "Haier Pearl PRO Inverter Series 1.5 ton Heat & Cool ac HSU-19HFPA"
  },
  {
   id: 44,
    name: "Haier",
    price: "Rs.150,000",
    image: "assets/img/haier AC 4.JPEG",
    description: "Haier 1.6 Ton UltimateCool Inverter Pro Split AC HSU-19"
  },
  {
   id: 45,
    name: "Haier",
    price: "Rs.237,000",
    image: "assets/img/haier ac 5.jpeg",
    description: "Haier HSU-18HJ Puri Inverter Air Conditioner"
  },
  {
   id: 46,
    name: "Haier",
    price: "Rs.129,999",
    image: "assets/img/HAIER AC 1.jpeg",
    description: "Haier 1.5 Ton DC Inverter A/C RF Series – Model 19-RFP"
  },
  {
   id: 47,
    name: "Haier",
    price: "Rs.61,000.00",
    image: "assets/img/led 1.jpeg",
    description: "Haier LED 50 50K85FUX"
  },
  {
   id: 48,
    name: "Haier",
    price: "Rs.109,000.00",
    image: "assets/img/led6_clean.jpeg",
    description: "Haier LED TV 40 Inch H40K800FX (Android Google TV)"
  },
  {
   id: 49,
    name: "Haier",
    price: "Rs.73,999.00",
    image: "assets/img/led7_clean.jpeg",
    description: "Haier LED 43 H43K800FX"
  },
  {
   id: 50,
    name: "Haier",
    price: "",
    image: "assets/img/led_10_clean.jpeg",
    description: ""
  },
  {
   id: 51,
    name: "Haier",
    price: "",
    image: "assets/img/LED3_clean.jpeg",
    description: ""
  },
  {
   id: 52,
    name: "Haier",
    price: "",
    image: "assets/img/LED4_clean.jpeg",
    description: ""
  },
  {
   id: 53,
    name: "Haier",
    price: "",
    image: "assets/img/tv2_no_je.jpeg",
    description: ""
  },
  {
   id: 54,
    name: "Haier",
    price: "",
    image: "assets/img/tv1_no_je.jpeg",
    description: ""
  },
];