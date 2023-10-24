import { IService } from "../../interfaces/form";

export const services: IService[] = [
  {
    value: "trailerHitch",
    text: "Trailer Hitch",
    info: {
      titleInfo: "Trailer Hitch Installation",

      list: [
        "Preferred Brands: Stealth Hitch, ECO-Hitch, Hidden Hitch, Curt, Draw-Tite, etc.",
        "Electrical Wiring Requirements: Options include 4-pin or 7-pin wiring, necessary for trailer lights, brake systems, and more.",
        "Attachments: Clients can attach pictures or files detailing specific requirements or models for hitch installation.",
      ],
    },
  },
  {
    value: "bedCover",
    text: "Bed Cover",
    info: {
      titleInfo: "Bed Cover Installation",

      list: [
        "Preferred Brands/Models: RETRAX, BAKFLIP, UNDERCOVER, EXTANG, TRUXEDO, etc.",
        "Styles Available: Options range from hard or soft covers, trifold, retractable, roll-up styles, etc.",
        "Budget Preferences: Ranges typically from below $500 to $500-$1500. Exact quotes can vary based on brand and style.",
        "Attachments: Space for clients to attach images or files for visual reference or to indicate specific product models.",
      ],
    },
  },
  {
    value: "patriotLiner",
    text: "Patriot Liner",
    info: {
      titleInfo: "Patriot Liner Application",

      list: [
        "Tiers Offered: Choices include Standard Black, UV+ Platinum Liner, Colored Bedliner, etc.",
        "Spray Application: Services can be applied to truck beds, accessories, or entire vehicles as per client preference.",
        "Attachments: Clients may attach photos or additional files to specify desired finishes or particular areas for application.",
      ],
    },
  },
  {
    value: "suspension",
    text: "Suspension",
    info: {
      titleInfo: "Suspension Services",

      list: [
        "Types of Services: Offerings include performance upgrades, coilovers, lift kits, shock and spring upgrades, etc.",
        "Brand Preferences: Options include Ohlins, King Shocks, FOX Shocks, Bilstein, BDS, Ready Lift, Rough Country, etc.",
        "Budget Ranges: Clients can expect to spend anywhere from below $1000 for basic enhancements to $2000-$4000 for comprehensive upgrades.",
        "Attachments: Provision for clients to attach images or specific product files.",
      ],
    },
  },
  {
    value: "rustPrevention",
    text: "Rust Prevention",
    info: {
      titleInfo: "Rust Prevention Treatments",

      list: [
        "Coating Options: Includes ECO CLEAR 20-Year Coating, Waxoyl, Woolwax, Cavity Wax, and more.",
        "Underbody Condition: Services tailored depending on whether the vehicle’s underbody is clean, has some rust, or exhibits heavy rust.",
        "Attachments: Clients can attach pictures of their vehicle's current condition for accurate service recommendations.",
      ],
    },
  },
  {
    value: "ceramicCoating",
    text: "Ceramic Coating",
    info: {
      titleInfo: "Ceramic Coating Application",

      list: [
        "Coating Usage: Specific coatings available for automotive, aircraft, marine, commercial applications, etc.",
        "Coating Tiers: Selections include IGL KENZO, SystemX MAX, SystemX PRO, specialized interior, wheel coatings, etc.",
        "Current Paint Condition: Services customized based on whether the vehicle is new, needs minor touch-ups, or requires extensive restoration.",
        "Attachments: Space for clients to provide pictures detailing their current vehicle condition or desired results.",
      ],
    },
  },
  {
    value: "ppf",
    text: "PPF (Clear Bra)",
    info: {
      titleInfo: "Paint Protection Film (PPF) Application",

      list: [
        "Film Tiers: Various coverage options ranging from bumper-only to full-body application, specialty fashion films, etc.",
        "Film Types: Include DYNOmight, DYNOmatte, DYNOshield, DYNOprism, DYNOwhite, and more, each offering different aesthetic and protective features.",
        "Attachments: Clients should attach photos or files specifying the areas they want covered or the finish they desire.",
      ],
    },
  },
  {
    value: "detailing",
    text: "Detailing",
    info: {
      titleInfo: "Detailing Services",

      list: [
        "Types of Detailing: Comprehensive services covering paint correction, exterior, interior, and engine bay detailing, etc.",
        "Attachments: Clients can attach images or documentation detailing the level of correction or cleaning required.",
      ],
    },
  },
  {
    value: "vanPackages",
    text: "Van Packages",
    info: {
      titleInfo: "Van Upfit Packages",

      list: [
        "Upfit Types: Full packages available or specific installations like partitions, ladder racks, slick locks, etc.",
        "Preferred Brands: Kargo Master, Weather Guards, Masterack, and others as per client preference.",
        "Package Types: Customizations available for general trades, electricians, HVAC professionals, basic packages, etc.",
        "Further Information: Clients are referred to KargoMaster.com for more detailed insights into available offerings.",
        "Attachments: Options for clients to include pictures or files specifying their van models or desired upfit configurations.",
      ],
    },
  },
  {
    value: "fleetManagement",
    text: "Fleet Management",
    info: {
      titleInfo: "Fleet Management Solutions",

      list: [
        "Vehicle Types Handled: Pickups, SUVs, vans, sedans, etc.",
        "Fleet Sizes Catered To: Ranges from small (1-5 vehicles) to large fleets (50+ vehicles).",
        "Services Offered: Include rust prevention, various upfit options, protective coatings, and more based on the fleet's needs.",
        "Attachments: Fleet managers can attach documents or images pertinent to their service needs, fleet sizes, or specific vehicle models.",
      ],
    },
  },
  {
    value: "otherService",
    text: "Other Service",
    info: {
      titleInfo: "Other Service",
      list: ["Please provided detailed information about the service requested."],
    },
  },
];

export const states = [
  {
    value: "state",
    text: "State",
    hidden: true,
  },
  { value: "AL", text: "AL" },
  { value: "AK", text: "AK" },
  { value: "AZ", text: "AZ" },
  { value: "AR", text: "AR" },
  { value: "CA", text: "CA" },
  { value: "CO", text: "CO" },
  { value: "CT", text: "CT" },
  { value: "DE", text: "DE" },
  { value: "FL", text: "FL" },
  { value: "GA", text: "GA" },
  { value: "HI", text: "HI" },
  { value: "ID", text: "ID" },
  { value: "IL", text: "IL" },
  { value: "IN", text: "IN" },
  { value: "IA", text: "IA" },
  { value: "KS", text: "KS" },
  { value: "KY", text: "KY" },
  { value: "LA", text: "LA" },
  { value: "ME", text: "ME" },
  { value: "MD", text: "MD" },
  { value: "MA", text: "MA" },
  { value: "MI", text: "MI" },
  { value: "MN", text: "MN" },
  { value: "MS", text: "MS" },
  { value: "MO", text: "MO" },
  { value: "MT", text: "MT" },
  { value: "NE", text: "NE" },
  { value: "NV", text: "NV" },
  { value: "NH", text: "NH" },
  { value: "NJ", text: "NJ" },
  { value: "NM", text: "NM" },
  { value: "NY", text: "NY" },
  { value: "NC", text: "NC" },
  { value: "ND", text: "ND" },
  { value: "OH", text: "OH" },
  { value: "OK", text: "OK" },
  { value: "OR", text: "OR" },
  { value: "PA", text: "PA" },
  { value: "RI", text: "RI" },
  { value: "SC", text: "SC" },
  { value: "SD", text: "SD" },
  { value: "TN", text: "TN" },
  { value: "TX", text: "TX" },
  { value: "UT", text: "UT" },
  { value: "VT", text: "VT" },
  { value: "VA", text: "VA" },
  { value: "WA", text: "WA" },
  { value: "WV", text: "WV" },
  { value: "WI", text: "WI" },
  { value: "WY", text: "WY" },
];
