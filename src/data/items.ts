export interface BaseItem {
  id: string;
  name: string;
  type: 'Weapons' | 'Consumables' | 'Crafting Materials' | 'Gear' | 'Ammo' | 'Throwables';
  value: number;
  weight: number;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  dps?: number;
  description: string;
  imageUrl?: string;
  canBeFoundIn?: string;
}

export interface Weapon extends BaseItem {
  type: 'Weapons';
  class: string;
  damage: number;
  fireRate: number;
  firingMode: string;
  range: string | null;
  magazine: number;
  ammo: string;
  dps: number;
  mods: string;
  description: string;
}

// ============================================================================
// ITEMS DATA - Généré depuis ARC Raiders Wiki CSV
// ============================================================================

export const weapons: Weapon[] = [
  {
    id: "weapon_kettle",
    name: "Kettle",
    type: "Weapons",
    class: "Assault Rifle",
    rarity: "Common",
    value: 2760,
    weight: 7.0,
    damage: 10.0,
    fireRate: 28.0,
    firingMode: "Semi-Automatic",
    range: "42.8",
    magazine: 20,
    ammo: "Light Ammo",
    dps: 280,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/c/c1/Kettle-Level1.png/160px-Kettle-Level1.png.webp",
    description: "Assault Rifle • Uses Light Ammo"
  },
  {
    id: "weapon_rattler",
    name: "Rattler",
    type: "Weapons",
    class: "Assault Rifle",
    rarity: "Common",
    value: 2700,
    weight: 6.0,
    damage: 9.0,
    fireRate: 33.3,
    firingMode: "Fully-Automatic",
    range: "56.2",
    magazine: 12,
    ammo: "Medium Ammo",
    dps: 300,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/b/be/Rattler-Level1.png/160px-Rattler-Level1.png.webp",
    description: "Assault Rifle • Uses Medium Ammo"
  },
  {
    id: "weapon_arpeggio",
    name: "Arpeggio",
    type: "Weapons",
    class: "Assault Rifle",
    rarity: "Rare",
    value: 4048,
    weight: 7.0,
    damage: 9.5,
    fireRate: 18.3,
    firingMode: "3-Round Burst",
    range: "55.9",
    magazine: 24,
    ammo: "Medium Ammo",
    dps: 174,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/6/6c/Arpeggio-Level1.png/160px-Arpeggio-Level1.png.webp",
    description: "Assault Rifle • Uses Medium Ammo"
  },
  {
    id: "weapon_tempest",
    name: "Tempest",
    type: "Weapons",
    class: "Assault Rifle",
    rarity: "Epic",
    value: 6834,
    weight: 11.0,
    damage: 10.0,
    fireRate: 36.7,
    firingMode: "Fully-Automatic",
    range: "55.9",
    magazine: 25,
    ammo: "Medium Ammo",
    dps: 367,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/c/c9/Tempest-Level1.png/160px-Tempest-Level1.png.webp",
    description: "Assault Rifle • Uses Medium Ammo"
  },
  {
    id: "weapon_bettina",
    name: "Bettina",
    type: "Weapons",
    class: "Assault Rifle",
    rarity: "Epic",
    value: 6946,
    weight: 10.5,
    damage: 14.0,
    fireRate: 32.0,
    firingMode: "Fully-Automatic",
    range: "51.3",
    magazine: 22,
    ammo: "Heavy Ammo",
    dps: 448,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/a/ac/Bettina.png/160px-Bettina.png.webp",
    description: "Assault Rifle • Uses Heavy Ammo"
  },
  {
    id: "weapon_ferro",
    name: "Ferro",
    type: "Weapons",
    class: "Battle Rifle",
    rarity: "Common",
    value: 2828,
    weight: 8.0,
    damage: 40.0,
    fireRate: 6.6,
    firingMode: "Break-Action",
    range: "53.1",
    magazine: 1,
    ammo: "Heavy Ammo",
    dps: 264,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/b/b0/Ferro-Level1.png/160px-Ferro-Level1.png.webp",
    description: "Battle Rifle • Uses Heavy Ammo"
  },
  {
    id: "weapon_renegade",
    name: "Renegade",
    type: "Weapons",
    class: "Battle Rifle",
    rarity: "Rare",
    value: 5470,
    weight: 10.0,
    damage: 35.0,
    fireRate: 21.0,
    firingMode: "Lever-Action",
    range: "68.8",
    magazine: 8,
    ammo: "Medium Ammo",
    dps: 735,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/b/b5/Renegade-Level1.png/160px-Renegade-Level1.png.webp",
    description: "Battle Rifle • Uses Medium Ammo"
  },
  {
    id: "weapon_aphelion",
    name: "Aphelion",
    type: "Weapons",
    class: "Battle Rifle",
    rarity: "Legendary",
    value: 9850,
    weight: 14.0,
    damage: 25.0,
    fireRate: 9.0,
    firingMode: "2-Round Burst",
    range: "76",
    magazine: 10,
    ammo: "Energy Clip",
    dps: 225,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/8/88/Aphelion.png/160px-Aphelion.png.webp",
    description: "Battle Rifle • Experimental • Uses Energy Clip"
  },
  {
    id: "weapon_stitcher",
    name: "Stitcher",
    type: "Weapons",
    class: "SMG",
    rarity: "Common",
    value: 2634,
    weight: 5.0,
    damage: 7.0,
    fireRate: 45.3,
    firingMode: "Fully-Automatic",
    range: "42.1",
    magazine: 20,
    ammo: "Light Ammo",
    dps: 317,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/3/3a/Stitcher-Level1.png/160px-Stitcher-Level1.png.webp",
    description: "SMG • Uses Light Ammo"
  },
  {
    id: "weapon_bobcat",
    name: "Bobcat",
    type: "Weapons",
    class: "SMG",
    rarity: "Epic",
    value: 6500,
    weight: 7.0,
    damage: 6.0,
    fireRate: 66.7,
    firingMode: "Fully-Automatic",
    range: "44",
    magazine: 20,
    ammo: "Light Ammo",
    dps: 400,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/3/36/Bobcat-Level1.png/160px-Bobcat-Level1.png.webp",
    description: "SMG • Uses Light Ammo"
  },
  {
    id: "weapon_il_toro",
    name: "Il Toro",
    type: "Weapons",
    class: "Shotgun",
    rarity: "Rare",
    value: 5730,
    weight: 8.0,
    damage: 67.5,
    fireRate: 14.3,
    firingMode: "Pump-Action",
    range: "20",
    magazine: 5,
    ammo: "Shotgun Ammo",
    dps: 965,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/5/50/Il_Toro-Level1.png/160px-Il_Toro-Level1.png.webp",
    description: "Shotgun • Uses Shotgun Ammo"
  },
  {
    id: "weapon_vulcano",
    name: "Vulcano",
    type: "Weapons",
    class: "Shotgun",
    rarity: "Epic",
    value: 8404,
    weight: 8.0,
    damage: 49.5,
    fireRate: 26.3,
    firingMode: "Semi-Automatic",
    range: "26",
    magazine: 6,
    ammo: "Shotgun Ammo",
    dps: 1302,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/d/da/Vulcano-Level1.png/160px-Vulcano-Level1.png.webp",
    description: "Shotgun • Uses Shotgun Ammo"
  },
  {
    id: "weapon_hairpin",
    name: "Hairpin",
    type: "Weapons",
    class: "Pistol",
    rarity: "Common",
    value: 2160,
    weight: 3.0,
    damage: 20.0,
    fireRate: 9.0,
    firingMode: "Slide-Action",
    range: "38.6",
    magazine: 8,
    ammo: "Light Ammo",
    dps: 180,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/6/65/Hairpin-Level1.png/160px-Hairpin-Level1.png.webp",
    description: "Pistol • Integrated Silencer • Uses Light Ammo"
  },
  {
    id: "weapon_burletta",
    name: "Burletta",
    type: "Weapons",
    class: "Pistol",
    rarity: "Rare",
    value: 3960,
    weight: 4.0,
    damage: 10.0,
    fireRate: 28.0,
    firingMode: "Semi-Automatic",
    range: "41.7",
    magazine: 12,
    ammo: "Light Ammo",
    dps: 280,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/d/d4/Burletta-Level1.png/160px-Burletta-Level1.png.webp",
    description: "Pistol • Uses Light Ammo"
  },
  {
    id: "weapon_venator",
    name: "Venator",
    type: "Weapons",
    class: "Pistol",
    rarity: "Rare",
    value: 4522,
    weight: 2.0,
    damage: 18.0,
    fireRate: 36.7,
    firingMode: "Semi-Automatic",
    range: "48.4",
    magazine: 10,
    ammo: "Medium Ammo",
    dps: 661,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/b/b4/Venator-Level1.png/160px-Venator-Level1.png.webp",
    description: "Pistol • Twin Shot • Uses Medium Ammo"
  },
  {
    id: "weapon_anvil",
    name: "Anvil",
    type: "Weapons",
    class: "Hand Cannon",
    rarity: "Rare",
    value: 4804,
    weight: 5.0,
    damage: 40.0,
    fireRate: 16.3,
    firingMode: "Single-Action",
    range: "50.2",
    magazine: 6,
    ammo: "Heavy Ammo",
    dps: 652,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/0/00/Anvil-Level1.png/160px-Anvil-Level1.png.webp",
    description: "Hand Cannon • Uses Heavy Ammo"
  },
  {
    id: "weapon_torrente",
    name: "Torrente",
    type: "Weapons",
    class: "LMG",
    rarity: "Rare",
    value: 5132,
    weight: 12.0,
    damage: 8.0,
    fireRate: 58.3,
    firingMode: "Fully-Automatic",
    range: "49.9",
    magazine: 60,
    ammo: "Medium Ammo",
    dps: 466,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/1/1e/Torrente-Level1.png/160px-Torrente-Level1.png.webp",
    description: "LMG • Uses Medium Ammo"
  },
  {
    id: "weapon_osprey",
    name: "Osprey",
    type: "Weapons",
    class: "Sniper Rifle",
    rarity: "Rare",
    value: 5292,
    weight: 7.0,
    damage: 45.0,
    fireRate: 17.7,
    firingMode: "Bolt-Action",
    range: "80.3",
    magazine: 8,
    ammo: "Medium Ammo",
    dps: 796,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/a/ae/Osprey-Level1.png/160px-Osprey-Level1.png.webp",
    description: "Sniper Rifle • Scoped (5.66x zoom) • Uses Medium Ammo"
  },
  {
    id: "weapon_jupiter",
    name: "Jupiter",
    type: "Weapons",
    class: "Sniper Rifle",
    rarity: "Legendary",
    value: 9820,
    weight: 9.0,
    damage: 60.0,
    fireRate: 7.67,
    firingMode: "Bolt-Action",
    range: "71.7",
    magazine: 5,
    ammo: "Energy Clip",
    dps: 460,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/6/68/Jupiter.png/160px-Jupiter.png.webp",
    description: "Sniper Rifle • Experimental • Uses Energy Clip"
  },
  {
    id: "weapon_hullcracker",
    name: "Hullcracker",
    type: "Weapons",
    class: "Special",
    rarity: "Epic",
    value: 10560,
    weight: 15.0,
    damage: 100.0,
    fireRate: 20.3,
    firingMode: "Pump-Action",
    range: "38.9",
    magazine: 5,
    ammo: "Launcher Ammo",
    dps: 2030,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/b/ba/Hullcracker-Level1.png/160px-Hullcracker-Level1.png.webp",
    description: "Special • Uses Launcher Ammo"
  },
  {
    id: "weapon_equalizer",
    name: "Equalizer",
    type: "Weapons",
    class: "Special",
    rarity: "Legendary",
    value: 9934,
    weight: 14.0,
    damage: 8.0,
    fireRate: 33.33,
    firingMode: "Fully-Automatic",
    range: null,
    magazine: 50,
    ammo: "Energy Clip",
    dps: 267,
    mods: "Unknown",
    imageUrl: "https://arcraiders.wiki/w/images/thumb/9/96/Equalizer.png/160px-Equalizer.png.webp",
    description: "Special • Uses Energy Clip"
  }
];

// ============================================================================
// ITEMS DATA - Généré depuis ARC Raiders Wiki CSV
// ============================================================================

// CONSUMABLES (54 items)
export const consumables: BaseItem[] = [
  {
    id: "item_acoustic_guitar",
    name: "Acoustic Guitar",
    type: "Consumables",
    rarity: "Legendary",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_adrenaline_shot",
    name: "Adrenaline Shot",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_agave_juice",
    name: "Agave Juice",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_bandage",
    name: "Bandage",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_barricade_kit",
    name: "Barricade Kit",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_binoculars",
    name: "Binoculars",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_blaze_grenade",
    name: "Blaze Grenade",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_blaze_grenade_trap",
    name: "Blaze Grenade Trap",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_deadline",
    name: "Deadline",
    type: "Consumables",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_defibrillator",
    name: "Defibrillator",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_door_blocker",
    name: "Door Blocker",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_explosive_mine",
    name: "Explosive Mine",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_firecracker",
    name: "Firecracker",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_fireworks_box",
    name: "Fireworks Box",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_flame_spray",
    name: "Flame Spray",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_fruit_mix",
    name: "Fruit Mix",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_gas_grenade",
    name: "Gas Grenade",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_gas_grenade_trap",
    name: "Gas Grenade Trap",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_gas_mine",
    name: "Gas Mine",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_heavy_fuze_grenade",
    name: "Heavy Fuze Grenade",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_herbal_bandage",
    name: "Herbal Bandage",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_integrated_binoculars",
    name: "Integrated Binoculars",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_integrated_shield_recharger",
    name: "Integrated Shield Recharger",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_jolt_mine",
    name: "Jolt Mine",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_lil_smoke_grenade",
    name: "Li'l Smoke Grenade",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_light_impact_grenade",
    name: "Light Impact Grenade",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_light_stick",
    name: "Light Stick",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_lure_grenade",
    name: "Lure Grenade",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_lure_grenade_trap",
    name: "Lure Grenade Trap",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_noisemaker",
    name: "Noisemaker",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_photoelectric_cloak",
    name: "Photoelectric Cloak",
    type: "Consumables",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_pulse_mine",
    name: "Pulse Mine",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_recorder",
    name: "Recorder",
    type: "Consumables",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_remote_raider_flare",
    name: "Remote Raider Flare",
    type: "Consumables",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_seeker_grenade",
    name: "Seeker Grenade",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_shaker",
    name: "Shaker",
    type: "Consumables",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_shield_recharger",
    name: "Shield Recharger",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_showstopper",
    name: "Showstopper",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_shrapnel_grenade",
    name: "Shrapnel Grenade",
    type: "Consumables",
    rarity: "Uncommon",
    value: 800,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_smoke_grenade",
    name: "Smoke Grenade",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_smoke_grenade_trap",
    name: "Smoke Grenade Trap",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_snap_blast_grenade",
    name: "Snap Blast Grenade",
    type: "Consumables",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_snap_hook",
    name: "Snap Hook",
    type: "Consumables",
    rarity: "Legendary",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_snowball",
    name: "Snowball",
    type: "Consumables",
    rarity: "Common",
    value: 10,
    weight: 0.5,
    description: "Misc item"
  },
  {
    id: "item_sterilized_bandage",
    name: "Sterilized Bandage",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_surge_shield_recharger",
    name: "Surge Shield Recharger",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_tagging_grenade",
    name: "Tagging Grenade",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_trailblazer",
    name: "Trailblazer",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_trigger_nade",
    name: "Trigger 'Nade",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_vita_shot",
    name: "Vita Shot",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_vita_spray",
    name: "Vita Spray",
    type: "Consumables",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_volcanic_rock",
    name: "Volcanic Rock",
    type: "Consumables",
    rarity: "Common",
    value: 270,
    weight: 0.5,
    description: "Misc item"
  },
  {
    id: "item_wolfpack",
    name: "Wolfpack",
    type: "Consumables",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  },
  {
    id: "item_zipline",
    name: "Zipline",
    type: "Consumables",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Quick Use item"
  }
];

// CRAFTING MATERIALS (167 items)
export const crafting_materials: BaseItem[] = [
  {
    id: "item_advanced_arc_powercell",
    name: "Advanced ARC Powercell",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 640,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_advanced_electrical_components",
    name: "Advanced Electrical Components",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1750,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_advanced_mechanical_components",
    name: "Advanced Mechanical Components",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1750,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_agave",
    name: "Agave",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_alarm_clock",
    name: "Alarm Clock",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_antiseptic",
    name: "Antiseptic",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_apricot",
    name: "Apricot",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_arc_alloy",
    name: "ARC Alloy",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 200,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_arc_circuitry",
    name: "ARC Circuitry",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_arc_coolant",
    name: "ARC Coolant",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_arc_flex_rubber",
    name: "ARC Flex Rubber",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_arc_motion_core",
    name: "ARC Motion Core",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_arc_performance_steel",
    name: "ARC Performance Steel",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_arc_powercell",
    name: "ARC Powercell",
    type: "Crafting Materials",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_arc_synthetic_resin",
    name: "ARC Synthetic Resin",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_arc_thermo_lining",
    name: "ARC Thermo Lining",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_assorted_seeds",
    name: "Assorted Seeds",
    type: "Crafting Materials",
    rarity: "Common",
    value: 100,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_bastion_cell",
    name: "Bastion Cell",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 5000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_battery",
    name: "Battery",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 250,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_bicycle_pump",
    name: "Bicycle Pump",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_bombardier_cell",
    name: "Bombardier Cell",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 5000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_broken_flashlight",
    name: "Broken Flashlight",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_broken_guidance_system",
    name: "Broken Guidance System",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_broken_handheld_radio",
    name: "Broken Handheld Radio",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_broken_taser",
    name: "Broken Taser",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_burned_arc_circuitry",
    name: "Burned ARC Circuitry",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_camera_lens",
    name: "Camera Lens",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_candle_holder",
    name: "Candle Holder",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_candleberries",
    name: "Candleberries",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 460,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_canister",
    name: "Canister",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 300,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_chemicals",
    name: "Chemicals",
    type: "Crafting Materials",
    rarity: "Common",
    value: 50,
    weight: 0.5,
    description: "Basic Material item"
  },
  {
    id: "item_complex_gun_parts",
    name: "Complex Gun Parts",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 3000,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_coolant",
    name: "Coolant",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_cooling_coil",
    name: "Cooling Coil",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_cooling_fan",
    name: "Cooling Fan",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_cracked_bioscanner",
    name: "Cracked Bioscanner",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_crude_explosives",
    name: "Crude Explosives",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_crumpled_plastic_bottle",
    name: "Crumpled Plastic Bottle",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 270,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_arc_motion_core",
    name: "Damaged ARC Motion Core",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_arc_powercell",
    name: "Damaged ARC Powercell",
    type: "Crafting Materials",
    rarity: "Common",
    value: 293,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_fireball_burner",
    name: "Damaged Fireball Burner",
    type: "Crafting Materials",
    rarity: "Common",
    value: 270,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_heat_sink",
    name: "Damaged Heat Sink",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_hornet_driver",
    name: "Damaged Hornet Driver",
    type: "Crafting Materials",
    rarity: "Common",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_leaper_pulse_unit",
    name: "Damaged Leaper Pulse Unit",
    type: "Crafting Materials",
    rarity: "Common",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_rocketeer_driver",
    name: "Damaged Rocketeer Driver",
    type: "Crafting Materials",
    rarity: "Common",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_snitch_scanner",
    name: "Damaged Snitch Scanner",
    type: "Crafting Materials",
    rarity: "Common",
    value: 659,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_tick_pod",
    name: "Damaged Tick Pod",
    type: "Crafting Materials",
    rarity: "Common",
    value: 270,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_damaged_wasp_driver",
    name: "Damaged Wasp Driver",
    type: "Crafting Materials",
    rarity: "Common",
    value: 270,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_deflated_football",
    name: "Deflated Football",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_degraded_arc_rubber",
    name: "Degraded ARC Rubber",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_diving_goggles",
    name: "Diving Goggles",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_dog_collar",
    name: "Dog Collar",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_dried_out_arc_resin",
    name: "Dried-Out ARC Resin",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_duct_tape",
    name: "Duct Tape",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 300,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_durable_cloth",
    name: "Durable Cloth",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_electrical_components",
    name: "Electrical Components",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_exodus_modules",
    name: "Exodus Modules",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 2750,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_expired_respirator",
    name: "Expired Respirator",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_explosive_compound",
    name: "Explosive Compound",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_fabric",
    name: "Fabric",
    type: "Crafting Materials",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Basic Material item"
  },
  {
    id: "item_fertilizer",
    name: "Fertilizer",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_fireball_burner",
    name: "Fireball Burner",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_flow_controller",
    name: "Flow Controller",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_fossilized_lightning",
    name: "Fossilized Lightning",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 4000,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_frequency_modulation_box",
    name: "Frequency Modulation Box",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_fried_motherboard",
    name: "Fried Motherboard",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_frying_pan",
    name: "Frying Pan",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_garlic_press",
    name: "Garlic Press",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_geiger_counter",
    name: "Geiger Counter",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 3500,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_great_mullein",
    name: "Great Mullein",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 300,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_headphones",
    name: "Headphones",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_heavy_gun_parts",
    name: "Heavy Gun Parts",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 700,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_hornet_driver",
    name: "Hornet Driver",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_household_cleaner",
    name: "Household Cleaner",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_humidifier",
    name: "Humidifier",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_ice_cream_scooper",
    name: "Ice Cream Scooper",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_impure_arc_coolant",
    name: "Impure ARC Coolant",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_industrial_battery",
    name: "Industrial Battery",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_industrial_charger",
    name: "Industrial Charger",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_industrial_magnet",
    name: "Industrial Magnet",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_ion_sputter",
    name: "Ion Sputter",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 6000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_laboratory_reagents",
    name: "Laboratory Reagents",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_leaper_pulse_unit",
    name: "Leaper Pulse Unit",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_lemon",
    name: "Lemon",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_light_gun_parts",
    name: "Light Gun Parts",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 700,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_magnet",
    name: "Magnet",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 300,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_magnetic_accelerator",
    name: "Magnetic Accelerator",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 5500,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_magnetron",
    name: "Magnetron",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 6000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_matriarch_reactor",
    name: "Matriarch Reactor",
    type: "Crafting Materials",
    rarity: "Legendary",
    value: 13000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_mechanical_components",
    name: "Mechanical Components",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_medium_gun_parts",
    name: "Medium Gun Parts",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 700,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_metal_brackets",
    name: "Metal Brackets",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_metal_parts",
    name: "Metal Parts",
    type: "Crafting Materials",
    rarity: "Common",
    value: 75,
    weight: 0.5,
    description: "Basic Material item"
  },
  {
    id: "item_microscope",
    name: "Microscope",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_mini_centrifuge",
    name: "Mini Centrifuge",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_mod_components",
    name: "Mod Components",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1750,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_moss",
    name: "Moss",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 500,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_motor",
    name: "Motor",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_mushroom",
    name: "Mushroom",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_number_plate",
    name: "Number Plate",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 270,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_oil",
    name: "Oil",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 300,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_olives",
    name: "Olives",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_plastic_parts",
    name: "Plastic Parts",
    type: "Crafting Materials",
    rarity: "Common",
    value: 60,
    weight: 0.5,
    description: "Basic Material item"
  },
  {
    id: "item_polluted_air_filter",
    name: "Polluted Air Filter",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_pop_trigger",
    name: "Pop Trigger",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_portable_tv",
    name: "Portable TV",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_power_bank",
    name: "Power Bank",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_power_cable",
    name: "Power Cable",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_power_rod",
    name: "Power Rod",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 5000,
    weight: 0.5,
    description: "Refined Material item"
  },
  {
    id: "item_prickly_pear",
    name: "Prickly Pear",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_processor",
    name: "Processor",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 500,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_projector",
    name: "Projector",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_queen_reactor",
    name: "Queen Reactor",
    type: "Crafting Materials",
    rarity: "Legendary",
    value: 13000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_radio",
    name: "Radio",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_radio_relay",
    name: "Radio Relay",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_remote_control",
    name: "Remote Control",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_resin",
    name: "Resin",
    type: "Crafting Materials",
    rarity: "Common",
    value: 1000,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_ripped_safety_vest",
    name: "Ripped Safety Vest",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rocket_thruster",
    name: "Rocket Thruster",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rocketeer_driver",
    name: "Rocketeer Driver",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 5000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_roots",
    name: "Roots",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Nature item"
  },
  {
    id: "item_rope",
    name: "Rope",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 500,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_rotary_encoder",
    name: "Rotary Encoder",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rubber_pad",
    name: "Rubber Pad",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rubber_parts",
    name: "Rubber Parts",
    type: "Crafting Materials",
    rarity: "Common",
    value: 50,
    weight: 0.5,
    description: "Basic Material item"
  },
  {
    id: "item_ruined_accordion",
    name: "Ruined Accordion",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_ruined_augment",
    name: "Ruined Augment",
    type: "Crafting Materials",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_ruined_baton",
    name: "Ruined Baton",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_ruined_handcuffs",
    name: "Ruined Handcuffs",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_ruined_parachute",
    name: "Ruined Parachute",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_ruined_riot_shield",
    name: "Ruined Riot Shield",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_ruined_tactical_vest",
    name: "Ruined Tactical Vest",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rusted_bolts",
    name: "Rusted Bolts",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rusted_gear",
    name: "Rusted Gear",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rusted_shut_medical_kit",
    name: "Rusted Shut Medical Kit",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rusted_tools",
    name: "Rusted Tools",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_rusty_arc_steel",
    name: "Rusty ARC Steel",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_sample_cleaner",
    name: "Sample Cleaner",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_sensors",
    name: "Sensors",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 500,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_sentinel_firing_core",
    name: "Sentinel Firing Core",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_shredder_gyro",
    name: "Shredder Gyro",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_signal_amplifier",
    name: "Signal Amplifier",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_simple_gun_parts",
    name: "Simple Gun Parts",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 330,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_snitch_scanner",
    name: "Snitch Scanner",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_speaker_component",
    name: "Speaker Component",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 500,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_spectrometer",
    name: "Spectrometer",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_spectrum_analyzer",
    name: "Spectrum Analyzer",
    type: "Crafting Materials",
    rarity: "Epic",
    value: 3500,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_spotter_relay",
    name: "Spotter Relay",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_spring_cushion",
    name: "Spring Cushion",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_steel_spring",
    name: "Steel Spring",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 300,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_surveyor_vault",
    name: "Surveyor Vault",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_synthesized_fuel",
    name: "Synthesized Fuel",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_syringe",
    name: "Syringe",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 500,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_tattered_arc_lining",
    name: "Tattered ARC Lining",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_tattered_clothes",
    name: "Tattered Clothes",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_telemetry_transceiver",
    name: "Telemetry Transceiver",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_thermostat",
    name: "Thermostat",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_tick_pod",
    name: "Tick Pod",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_toaster",
    name: "Toaster",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_torn_blanket",
    name: "Torn Blanket",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 640,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_turbo_pump",
    name: "Turbo Pump",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_unusable_weapon",
    name: "Unusable Weapon",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_voltage_converter",
    name: "Voltage Converter",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 500,
    weight: 0.5,
    description: "Topside Material item"
  },
  {
    id: "item_wasp_driver",
    name: "Wasp Driver",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_water_filter",
    name: "Water Filter",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_water_pump",
    name: "Water Pump",
    type: "Crafting Materials",
    rarity: "Rare",
    value: 1000,
    weight: 0.5,
    description: "Recyclable item"
  },
  {
    id: "item_wires",
    name: "Wires",
    type: "Crafting Materials",
    rarity: "Uncommon",
    value: 200,
    weight: 0.5,
    description: "Topside Material item"
  }
];

// GEAR (108 items)
export const gear: BaseItem[] = [
  {
    id: "item_air_freshener",
    name: "Air Freshener",
    type: "Gear",
    rarity: "Uncommon",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_ancient_fort_security_code",
    name: "Ancient Fort Security Code",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_angled_grip_i",
    name: "Angled Grip I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_angled_grip_ii",
    name: "Angled Grip II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_angled_grip_iii",
    name: "Angled Grip III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_anvil_splitter",
    name: "Anvil Splitter",
    type: "Gear",
    rarity: "Legendary",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_bloated_tuna_can",
    name: "Bloated Tuna Can",
    type: "Gear",
    rarity: "Common",
    value: 1000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_blue_gate_cellar_key",
    name: "Blue Gate Cellar Key",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_blue_gate_communication_tower_key",
    name: "Blue Gate Communication Tower Key",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_blue_gate_confiscation_room_key",
    name: "Blue Gate Confiscation Room Key",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_blue_gate_village_key",
    name: "Blue Gate Village Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_breathtaking_snow_globe",
    name: "Breathtaking Snow Globe",
    type: "Gear",
    rarity: "Epic",
    value: 7000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_buried_city_hospital_key",
    name: "Buried City Hospital Key",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_buried_city_jkv_employee_access_card",
    name: "Buried City JKV Employee Access Card",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_buried_city_residential_master_key",
    name: "Buried City Residential Master Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_buried_city_town_hall_key",
    name: "Buried City Town Hall Key",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_burnt_out_candles",
    name: "Burnt-Out Candles",
    type: "Gear",
    rarity: "Common",
    value: 640,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_cat_bed",
    name: "Cat Bed",
    type: "Gear",
    rarity: "Uncommon",
    value: 1000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_coffee_pot",
    name: "Coffee Pot",
    type: "Gear",
    rarity: "Common",
    value: 1000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_combat_mk_1",
    name: "Combat Mk. 1",
    type: "Gear",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_combat_mk_2",
    name: "Combat Mk. 2",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_combat_mk_3_aggressive",
    name: "Combat Mk. 3 (Aggressive)",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_combat_mk_3_flanking",
    name: "Combat Mk. 3 (Flanking)",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_compensator_i",
    name: "Compensator I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_compensator_ii",
    name: "Compensator II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_compensator_iii",
    name: "Compensator III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_dam_control_tower_key",
    name: "Dam Control Tower Key",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_dam_staff_room_key",
    name: "Dam Staff Room Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_dam_surveillance_key",
    name: "Dam Surveillance Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_dam_testing_annex_key",
    name: "Dam Testing Annex Key",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_dam_utility_key",
    name: "Dam Utility Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_dart_board",
    name: "Dart Board",
    type: "Gear",
    rarity: "Uncommon",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_empty_wine_bottle",
    name: "Empty Wine Bottle",
    type: "Gear",
    rarity: "Common",
    value: 1000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_expired_pasta",
    name: "Expired Pasta",
    type: "Gear",
    rarity: "Common",
    value: 1000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_extended_barrel",
    name: "Extended Barrel",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_light_mag_i",
    name: "Extended Light Mag I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_light_mag_ii",
    name: "Extended Light Mag II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_light_mag_iii",
    name: "Extended Light Mag III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_medium_mag_i",
    name: "Extended Medium Mag I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_medium_mag_ii",
    name: "Extended Medium Mag II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_medium_mag_iii",
    name: "Extended Medium Mag III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_shotgun_mag_i",
    name: "Extended Shotgun Mag I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_shotgun_mag_ii",
    name: "Extended Shotgun Mag II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_extended_shotgun_mag_iii",
    name: "Extended Shotgun Mag III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_faded_photograph",
    name: "Faded Photograph",
    type: "Gear",
    rarity: "Common",
    value: 640,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_film_reel",
    name: "Film Reel",
    type: "Gear",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_fine_wristwatch",
    name: "Fine Wristwatch",
    type: "Gear",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_free_loadout_augment",
    name: "Free Loadout Augment",
    type: "Gear",
    rarity: "Common",
    value: 100,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_heavy_shield",
    name: "Heavy Shield",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Shield item"
  },
  {
    id: "item_horizontal_grip",
    name: "Horizontal Grip",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_kinetic_converter",
    name: "Kinetic Converter",
    type: "Gear",
    rarity: "Legendary",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_lances_mixtape_5th_edition",
    name: "Lance's Mixtape (5th Edition)",
    type: "Gear",
    rarity: "Epic",
    value: 10000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_light_bulb",
    name: "Light Bulb",
    type: "Gear",
    rarity: "Uncommon",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_light_shield",
    name: "Light Shield",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Shield item"
  },
  {
    id: "item_lightweight_stock",
    name: "Lightweight Stock",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_looting_mk_1",
    name: "Looting Mk. 1",
    type: "Gear",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_looting_mk_2",
    name: "Looting Mk. 2",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_looting_mk_3_cautious",
    name: "Looting Mk. 3 (Cautious)",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_looting_mk_3_survivor",
    name: "Looting Mk. 3 (Survivor)",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_medium_shield",
    name: "Medium Shield",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Shield item"
  },
  {
    id: "item_music_album",
    name: "Music Album",
    type: "Gear",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_music_box",
    name: "Music Box",
    type: "Gear",
    rarity: "Rare",
    value: 5000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_muzzle_brake_i",
    name: "Muzzle Brake I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_muzzle_brake_ii",
    name: "Muzzle Brake II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_muzzle_brake_iii",
    name: "Muzzle Brake III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_padded_stock",
    name: "Padded Stock",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_painted_box",
    name: "Painted Box",
    type: "Gear",
    rarity: "Uncommon",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_patrol_car_key",
    name: "Patrol Car Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_pilgrims_peak_security_code",
    name: "Pilgrim's Peak Security Code",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_playing_cards",
    name: "Playing Cards",
    type: "Gear",
    rarity: "Rare",
    value: 5000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_poster_of_natural_wonders",
    name: "Poster Of Natural Wonders",
    type: "Gear",
    rarity: "Uncommon",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_pottery",
    name: "Pottery",
    type: "Gear",
    rarity: "Uncommon",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_raider_hatch_key",
    name: "Raider Hatch Key",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_raiders_refuge_security_code",
    name: "Raider's Refuge Security Code",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_red_coral_jewelry",
    name: "Red Coral Jewelry",
    type: "Gear",
    rarity: "Rare",
    value: 5000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_reinforced_reception_security_code",
    name: "Reinforced Reception Security Code",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_rosary",
    name: "Rosary",
    type: "Gear",
    rarity: "Rare",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_rubber_duck",
    name: "Rubber Duck",
    type: "Gear",
    rarity: "Common",
    value: 1000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_shotgun_choke_i",
    name: "Shotgun Choke I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_shotgun_choke_ii",
    name: "Shotgun Choke II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_shotgun_choke_iii",
    name: "Shotgun Choke III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_shotgun_silencer",
    name: "Shotgun Silencer",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_silencer_i",
    name: "Silencer I",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_silencer_ii",
    name: "Silencer II",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_silencer_iii",
    name: "Silencer III",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_silver_teaspoon_set",
    name: "Silver Teaspoon Set",
    type: "Gear",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_spaceport_container_storage_key",
    name: "Spaceport Container Storage Key",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_spaceport_control_tower_key",
    name: "Spaceport Control Tower Key",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_spaceport_trench_tower_key",
    name: "Spaceport Trench Tower Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_spaceport_warehouse_key",
    name: "Spaceport Warehouse Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_stable_stock_i",
    name: "Stable Stock I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_stable_stock_ii",
    name: "Stable Stock II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_stable_stock_iii",
    name: "Stable Stock III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_statuette",
    name: "Statuette",
    type: "Gear",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_stella_montis_archives_key",
    name: "Stella Montis Archives Key",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_stella_montis_assembly_admin_key",
    name: "Stella Montis Assembly Admin Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_stella_montis_medical_storage_key",
    name: "Stella Montis Medical Storage Key",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_stella_montis_security_checkpoint_key",
    name: "Stella Montis Security Checkpoint Key",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Key item"
  },
  {
    id: "item_tactical_mk_1",
    name: "Tactical Mk. 1",
    type: "Gear",
    rarity: "Uncommon",
    value: 640,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_tactical_mk_2",
    name: "Tactical Mk. 2",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_tactical_mk_3_defensive",
    name: "Tactical Mk. 3 (Defensive)",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_tactical_mk_3_healing",
    name: "Tactical Mk. 3 (Healing)",
    type: "Gear",
    rarity: "Epic",
    value: 0,
    weight: 0.5,
    description: "Augment item"
  },
  {
    id: "item_torn_book",
    name: "Torn Book",
    type: "Gear",
    rarity: "Common",
    value: 1000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_vase",
    name: "Vase",
    type: "Gear",
    rarity: "Rare",
    value: 3000,
    weight: 0.5,
    description: "Trinket item"
  },
  {
    id: "item_vertical_grip_i",
    name: "Vertical Grip I",
    type: "Gear",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_vertical_grip_ii",
    name: "Vertical Grip II",
    type: "Gear",
    rarity: "Uncommon",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_vertical_grip_iii",
    name: "Vertical Grip III",
    type: "Gear",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Mods item"
  },
  {
    id: "item_very_comfortable_pillow",
    name: "Very Comfortable Pillow",
    type: "Gear",
    rarity: "Uncommon",
    value: 2000,
    weight: 0.5,
    description: "Trinket item"
  }
];

// AMMO (6 items)
export const ammo: BaseItem[] = [
  {
    id: "item_energy_clip",
    name: "Energy Clip",
    type: "Ammo",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Ammunition item"
  },
  {
    id: "item_heavy_ammo",
    name: "Heavy Ammo",
    type: "Ammo",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Ammunition item"
  },
  {
    id: "item_launcher_ammo",
    name: "Launcher Ammo",
    type: "Ammo",
    rarity: "Rare",
    value: 0,
    weight: 0.5,
    description: "Ammunition item"
  },
  {
    id: "item_light_ammo",
    name: "Light Ammo",
    type: "Ammo",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Ammunition item"
  },
  {
    id: "item_medium_ammo",
    name: "Medium Ammo",
    type: "Ammo",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Ammunition item"
  },
  {
    id: "item_shotgun_ammo",
    name: "Shotgun Ammo",
    type: "Ammo",
    rarity: "Common",
    value: 0,
    weight: 0.5,
    description: "Ammunition item"
  }
];

export const allItems: BaseItem[] = [
  ...weapons,
  ...consumables,
  ...crafting_materials,
  ...gear,
  ...ammo,
];

export const itemTypes = ['Weapons', 'Consumables', 'Crafting Materials', 'Gear', 'Ammo', 'Throwables'] as const;
export const rarities = ['Common', "Uncommon", 'Rare', 'Legendary', 'Epic'] as const;

// ============================================================================
// HELPER FUNCTIONS - Recherche d'items
// ============================================================================

/**
 * Récupère un item par son ID dans tous les tableaux
 */
export const getItemById = (id: string): BaseItem | undefined => {
  return allItems.find(item => item.id === id);
};

/**
 * Récupère tous les items d'un type spécifique
 * @param type - "Weapons" | "Consumables" | "Crafting Materials" | "Gear" | "Ammo"
 */
export const getItemsByType = (type: string): BaseItem[] => {
  return allItems.filter(item => item.type === type);
};

/**
 * Récupère tous les items d'une rareté spécifique
 * @param rarity - "Common" | "Rare" | "Epic" | "Legendary"
 */
export const getItemsByRarity = (rarity: string): BaseItem[] => {
  return allItems.filter(item => item.rarity === rarity);
};

/**
 * Récupère un item par son ID dans un tableau spécifique
 */
export const getItemByIdInArray = (id: string, items: BaseItem[]): BaseItem | undefined => {
  return items.find(item => item.id === id);
};

/**
 * Recherche d'items par nom (partiel)
 */
export const searchItemsByName = (query: string): BaseItem[] => {
  const lowerQuery = query.toLowerCase();
  return allItems.filter(item =>
      item.name.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Récupère toutes les armes d'une classe spécifique
 */
export const getWeaponsByClass = (weaponClass: string): Weapon[] => {
  return weapons.filter(weapon => weapon.class === weaponClass);
};

/**
 * Récupère les items par poids maximum
 */
export const getItemsByMaxWeight = (maxWeight: number): BaseItem[] => {
  return allItems.filter(item => item.weight <= maxWeight);
};

/**
 * Récupère les items par valeur minimale
 */
export const getItemsByMinValue = (minValue: number): BaseItem[] => {
  return allItems.filter(item => item.value >= minValue);
};