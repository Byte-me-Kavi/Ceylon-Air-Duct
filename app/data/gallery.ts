import type { StaticImageData } from "next/image";

// First anniversary, October 2026
import annTeam from "../../public/images/anniversary/team.jpg";
import annCakeGroup from "../../public/images/anniversary/cake-group.jpg";
import annCakeCutting from "../../public/images/anniversary/cake-cutting.jpg";
import annSpeech from "../../public/images/anniversary/speech.jpg";
import annBlessing from "../../public/images/anniversary/blessing.jpg";
import annMonks from "../../public/images/anniversary/monks.jpg";
import annCeremonyHall from "../../public/images/anniversary/ceremony-hall.jpg";
import annFamilies from "../../public/images/anniversary/families.jpg";
import annSweets from "../../public/images/anniversary/sweets.jpg";
import annGathering from "../../public/images/anniversary/gathering.jpg";

// Grills and diffusers production line
import prodInspection from "../../public/images/production/grill-inspection.jpg";
import prodCutting from "../../public/images/production/profile-cutting.jpg";
import prodCowls from "../../public/images/production/cowls.jpg";

// Site work
import pharmaPlantRoom from "../../public/images/projects/pharma-plant-room.jpg";
import pharmaDucting from "../../public/images/projects/pharma-ducting.jpg";
import pharmaOverview from "../../public/images/projects/pharma-overview.jpg";
import bevStack from "../../public/images/projects/beverage-roof-stack.jpg";
import bevRoof from "../../public/images/projects/beverage-roof.jpg";

// Opening ceremony and factory (existing photos)
import opening1 from "../../public/images/opening-1.jpg";
import opening2 from "../../public/images/opening-2.jpg";
import opening3 from "../../public/images/opening-3.jpg";
import opening4 from "../../public/images/opening-4.jpg";
import team from "../../public/images/team.jpg";
import work1 from "../../public/images/work-1.jpg";
import work2 from "../../public/images/work-2.jpg";
import work3 from "../../public/images/work-3.jpg";
import work4 from "../../public/images/work-4.jpg";

export type AlbumId =
  | "anniversary"
  | "production"
  | "sites"
  | "opening"
  | "factory";

export type Photo = {
  src: StaticImageData;
  alt: string;
  caption: string;
  album: AlbumId;
};

export const albums: { id: AlbumId; label: string }[] = [
  { id: "anniversary", label: "First anniversary" },
  { id: "production", label: "Grills line" },
  { id: "sites", label: "Site work" },
  { id: "opening", label: "Opening ceremony" },
  { id: "factory", label: "Factory and team" },
];

export const anniversaryPhotos: Photo[] = [
  {
    src: annTeam,
    alt: "The Ceylon Air Duct team standing together inside the factory",
    caption: "The team at our first anniversary",
    album: "anniversary",
  },
  {
    src: annCakeCutting,
    alt: "Anniversary cake being cut at a table with the team gathered around",
    caption: "Cutting the anniversary cake",
    album: "anniversary",
  },
  {
    src: annSpeech,
    alt: "A director speaking to the team in the factory",
    caption: "A few words of thanks to the team",
    album: "anniversary",
  },
  {
    src: annBlessing,
    alt: "A monk tying a blessing thread on a guest's wrist",
    caption: "Blessing threads for staff and families",
    album: "anniversary",
  },
  {
    src: annMonks,
    alt: "Two monks seated at a white-draped table leading the blessing ceremony",
    caption: "Monks leading the blessing ceremony",
    album: "anniversary",
  },
  {
    src: annCeremonyHall,
    alt: "Families seated on mats in the factory hall during the ceremony",
    caption: "Families joined us for the ceremony",
    album: "anniversary",
  },
  {
    src: annCakeGroup,
    alt: "Team members smiling behind the anniversary cake",
    caption: "Celebrating one year together",
    album: "anniversary",
  },
  {
    src: annFamilies,
    alt: "Children and family members watching the ceremony",
    caption: "Family members at the celebration",
    album: "anniversary",
  },
  {
    src: annGathering,
    alt: "Staff gathered in the open factory hall for the anniversary",
    caption: "Everyone gathered in the factory hall",
    album: "anniversary",
  },
  {
    src: annSweets,
    alt: "Cake and sweets being shared with staff",
    caption: "Sharing cake with everyone",
    album: "anniversary",
  },
];

export const productionPhotos: Photo[] = [
  {
    src: prodInspection,
    alt: "Directors and staff inspecting a newly fabricated aluminium grill",
    caption: "Checking one of the first grills off the new line",
    album: "production",
  },
  {
    src: prodCutting,
    alt: "A technician cutting aluminium profiles beside racks of extrusions",
    caption: "Cutting aluminium profiles for grills and diffusers",
    album: "production",
  },
  {
    src: prodCowls,
    alt: "Galvanized steel roof exhaust cowls on the factory floor",
    caption: "Roof exhaust cowls ready for dispatch",
    album: "production",
  },
];

export const pharmaPhotos: Photo[] = [
  {
    src: pharmaPlantRoom,
    alt: "Galvanized rectangular ducts dropping down to equipment in a plant room",
    caption: "Pharmaceutical plant: ductwork in the utility room",
    album: "sites",
  },
  {
    src: pharmaDucting,
    alt: "Duct transitions connecting to an air compressor in a plant room",
    caption: "Pharmaceutical plant: transitions to equipment",
    album: "sites",
  },
  {
    src: pharmaOverview,
    alt: "Overhead duct runs beside louvred panels in a plant room",
    caption: "Pharmaceutical plant: overhead duct runs",
    album: "sites",
  },
];

export const beveragePhotos: Photo[] = [
  {
    src: bevStack,
    alt: "A tall galvanized exhaust stack with a weather cap on a factory roof",
    caption: "Soft drinks can plant: roof exhaust stack",
    album: "sites",
  },
  {
    src: bevRoof,
    alt: "Exhaust stacks rising above a factory roof covered in solar panels",
    caption: "Soft drinks can plant: stacks above the production hall",
    album: "sites",
  },
];

const openingPhotos: Photo[] = [
  {
    src: opening1,
    alt: "Guests lighting the traditional oil lamp at the factory opening",
    caption: "Lighting the oil lamp at our opening",
    album: "opening",
  },
  {
    src: opening2,
    alt: "A director lighting the oil lamp at the opening ceremony",
    caption: "Opening ceremony, October 2025",
    album: "opening",
  },
  {
    src: opening3,
    alt: "Directors performing a traditional ritual on the factory floor",
    caption: "A traditional start for the new factory",
    album: "opening",
  },
  {
    src: opening4,
    alt: "The team standing together in the newly opened factory",
    caption: "The team on opening day",
    album: "opening",
  },
];

const factoryPhotos: Photo[] = [
  {
    src: team,
    alt: "The Ceylon Air Duct team in matching shirts on the factory floor",
    caption: "The team behind our work",
    album: "factory",
  },
  {
    src: work1,
    alt: "A technician measuring a galvanized sheet on a cutting table",
    caption: "Measuring sheet before cutting",
    album: "factory",
  },
  {
    src: work2,
    alt: "Staff handling a sheet at a fabrication table beside duct machinery",
    caption: "Duct fabrication in progress",
    album: "factory",
  },
  {
    src: work3,
    alt: "Visitors walking through the fabrication area",
    caption: "Inside the fabrication area",
    album: "factory",
  },
  {
    src: work4,
    alt: "Staff working at a sheet folding machine",
    caption: "Folding and forming duct sections",
    album: "factory",
  },
];

const byAlbum: Record<AlbumId, Photo[]> = {
  anniversary: anniversaryPhotos,
  production: productionPhotos,
  sites: [...pharmaPhotos, ...beveragePhotos],
  opening: openingPhotos,
  factory: factoryPhotos,
};

export function photosFor(album: AlbumId): Photo[] {
  return byAlbum[album];
}

/** All photos, interleaved across albums so the "All" view mixes subjects. */
export const allPhotos: Photo[] = (() => {
  const lists = albums.map((a) => [...byAlbum[a.id]]);
  const out: Photo[] = [];
  while (lists.some((l) => l.length)) {
    for (const l of lists) {
      const next = l.shift();
      if (next) out.push(next);
    }
  }
  return out;
})();
