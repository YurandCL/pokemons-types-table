const URL_BASE = 'https://static.wikia.nocookie.net/pokemongo/images'

export function useMedal (type = '') {

  const MEDALS = {
    bicho: {url:`${URL_BASE}/6/60/BugCatcher_shadow.png`, enName: 'bug'},
    siniestro: {url:`${URL_BASE}/7/7f/Delinquent_shadow.png`, enName: 'dark'},
    dragón: {url:`${URL_BASE}/c/c1/DragonTamer_shadow.png`, enName: 'dragon'},
    eléctrico: {url:`${URL_BASE}/6/6d/Rocker_shadow.png`, enName: 'electric'},
    hada: {url:`${URL_BASE}/6/63/FairyTaleGirl_shadow.png`, enName: 'fairy'},
    lucha: {url:`${URL_BASE}/5/51/BlackBelt_shadow.png`, enName: 'fighting'},
    fuego: {url:`${URL_BASE}/d/d8/Kindler_shadow.png`, enName: 'fire'},
    volador: {url:`${URL_BASE}/f/f1/BirdKeeper_shadow.png`, enName: 'flying'},
    fantasma: {url:`${URL_BASE}/7/77/HexManiac_shadow.png`, enName: 'ghost'},
    planta: {url:`${URL_BASE}/8/84/Gardener_shadow.png`, enName: 'grass'},
    tierra: {url:`${URL_BASE}/3/34/RuinManiac_shadow.png`, enName: 'ground'},
    hielo: {url:`${URL_BASE}/a/aa/Skier_shadow.png`, enName: 'ice'},
    normal: {url:`${URL_BASE}/a/a7/Schoolkid_shadow.png`, enName: 'normal'},
    veneno: {url:`${URL_BASE}/3/39/PunkGirl_shadow.png`, enName: 'poison'},
    psíquico: {url:`${URL_BASE}/5/51/Psychic_shadow.png`, enName: 'psychic'},
    roca: {url:`${URL_BASE}/5/5f/Hiker_shadow.png`, enName: 'rock'},
    acero: {url:`${URL_BASE}/7/71/RailStaff_shadow.png`, enName: 'steel'},
    agua: {url:`${URL_BASE}/c/c6/Swimmer_shadow.png`, enName: 'water'}
  }

  const {url, enName} = MEDALS[type] || MEDALS['normal']
  return {url, enName}
}