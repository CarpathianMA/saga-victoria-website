$ErrorActionPreference = "Stop"
$base = "https://sagavictoria.ro/Portals/sagavictoria"
$root = Join-Path $PSScriptRoot "..\public\images\saga"
New-Item -ItemType Directory -Force -Path $root | Out-Null

function Get-File($Url, $OutPath) {
  $dir = Split-Path $OutPath -Parent
  if ($dir) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  if (Test-Path $OutPath) { Write-Host "skip $OutPath"; return }
  Write-Host "GET $Url"
  Invoke-WebRequest -Uri $Url -OutFile $OutPath -UseBasicParsing
}

# Hero & misc
Get-File "https://sagavictoria.ro/Portals/_default/skins/ru-transition/images/banner_2024_2.jpg" (Join-Path $root "hero-banner.jpg")
Get-File "$base/img/diverse/imprejurimi.jpeg" (Join-Path $root "imprejurimi.jpeg")
Get-File "$base/img/diverse/livrari.jpeg" (Join-Path $root "livrari.jpeg")
Get-File "$base/img/2026/tarife_2026.jpeg" (Join-Path $root "tarife-2026.jpeg")

# Menus PDF
Get-File "$base/img/2026/meniu-pizza-2026_2.pdf" (Join-Path (Split-Path $root -Parent) "menus\meniu-pizza-2026.pdf")
Get-File "$base/img/2026/meniu-events-2026_2.pdf" (Join-Path (Split-Path $root -Parent) "menus\meniu-events-2026.pdf")

# Rooms
foreach ($i in 1..4) { Get-File "$base/img/rooms/single%20($i).jpeg" (Join-Path $root "rooms\single-$i.jpeg") }
foreach ($i in 1,2,6,7) { Get-File "$base/img/rooms/dubla%20($i).jpeg" (Join-Path $root "rooms\double-$i.jpeg") }
foreach ($i in 1,3,4,11) { Get-File "$base/img/rooms/dubla%20deluxe%20($i).jpeg" (Join-Path $root "rooms\deluxe-$i.jpeg") }
foreach ($i in 6,8,10,11) { Get-File "$base/img/rooms/apartament%20($i).jpeg" (Join-Path $root "rooms\apartment-$i.jpeg") }
foreach ($i in 3,4,5,10) { Get-File "$base/img/rooms/receptie%20($i).jpeg" (Join-Path $root "rooms\receptie-$i.jpeg") }

# Events
foreach ($i in 1..11) { Get-File "$base/img/events/events%20($i).jpg" (Join-Path $root "events\events-$i.jpg") }
Get-File "$base/img/events/events%20(13).jpg" (Join-Path $root "events\events-13.jpg")

# Pizza / pub
foreach ($i in 1,2,3,4,5,6,7,11,14,15,16,17) {
  Get-File "$base/img/pizza/pizza%20($i).jpeg" (Join-Path $root "pub\pizza-$i.jpeg")
}

# Cafenea
foreach ($i in 1,4,5,6,7) { Get-File "$base/img/cafenea/cafenea%20($i).jpeg" (Join-Path $root "restaurant\cafenea-$i.jpeg") }
Get-File "$base/img/about/cafenea1_l.jpg" (Join-Path $root "restaurant\cafenea1.jpg")
Get-File "$base/img/about/cafenea2_l.jpg" (Join-Path $root "restaurant\cafenea2.jpg")
Get-File "$base/img/about/cafenea4_l.jpg" (Join-Path $root "restaurant\cafenea4.jpg")

# Terasa
foreach ($i in 1..5) { Get-File "$base/img/terasa/terasa%20($i).jpeg" (Join-Path $root "terasa\terasa-$i.jpeg") }
foreach ($i in 2..5) { Get-File "$base/img/about/terasa${i}_l.jpg" (Join-Path $root "terasa\terasa-about-$i.jpg") }

# Covrigarie
foreach ($i in 1..14) { Get-File "$base/img/covrigarie/covrigarie%20($i).jpg" (Join-Path $root "covrigarie\covrigarie-$i.jpg") }

# Menu gallery samples (first 8 each)
foreach ($i in 1..8) {
  Get-File "$base/img/produse/mancare2%20($i).jpeg" (Join-Path $root "menu\mancare-$i.jpeg")
  Get-File "$base/img/produse/bauturi2%20($i).jpeg" (Join-Path $root "menu\bauturi-$i.jpeg")
}

Write-Host "Done."
