
export const getExploreNearby = () => {
  const data = [
    {
      "id": "0f46bb21-7fe5-4031-a7f0-1948cf6828ac",
      "img": "/assets/explore-nearby/5j2.webp",
      "location": "London",
      "distance": "45-minute drive"
    },
    {
      "id": "d436e904-f17e-48e3-bd84-f63b87d48b09",
      "img": "/assets/explore-nearby/1to.webp",
      "location": "Manchester",
      "distance": "4.5-hour drive"
    },
    {
      "id": "d83c78cb-9f43-48b9-b76f-c1c0ff131c33",
      "img": "/assets/explore-nearby/40m.webp",
      "location": "Liverpool",
      "distance": "4.5-hour drive"
    },
    {
      "id": "ac0a496c-f6d2-4637-8fa9-59a197260b16",
      "img": "/assets/explore-nearby/msp.webp",
      "location": "York",
      "distance": "4-hour drive"
    },
    {
      "id": "36680cc6-0754-4fed-a0fe-b56503050eb2",
      "img": "/assets/explore-nearby/2k3.webp",
      "location": "Cardiff",
      "distance": "45-minute drive"
    },
    {
      "id": "06d4618c-8e28-455b-b007-ccf87d17dcd1",
      "img": "/assets/explore-nearby/ynx.webp",
      "location": "Birkenhead",
      "distance": "4.5-hour drive"
    },
    {
      "id": "8952c93c-ecf7-4485-ab04-34e60e2202d2",
      "img": "/assets/explore-nearby/kji.webp",
      "location": "Newquay",
      "distance": "6-hour drive"
    },
    {
      "id": "7f78feb1-8b9b-4e85-8e27-965c21333f07",
      "img": "/assets/explore-nearby/41m.webp",
      "location": "Hove",
      "distance": "2-hour drive"
    }
  ]
  return data;
};

export const getLiveAnywhere = () => {
  const data = [
    {
      "id": "2a5c2d86-fb19-43b1-a0f2-2069c0d1a41f",
      "img": "/assets/live-anywhere/2io.webp",
      "title": "Outdoor getaways"
    },
    {
      "id": "4c9d6acf-041f-4a4e-8a86-51475ccde4b0",
      "img": "/assets/live-anywhere/q7j.webp",
      "title": "Unique stays"
    },
    {
      "id": "e9278833-f963-4af0-9edc-fe372ded10cb",
      "img": "/assets/live-anywhere/s03.webp",
      "title": "Entire homes"
    },
    {
      "id": "f588e9ce-32c4-47da-922f-b667265111d2",
      "img": "/assets/live-anywhere/8ix.webp",
      "title": "Pet allowed"
    }
  ]
  return data ;
};

export const getSearch = async () => {
  const searchResponse = [
    {
      "id": "8010034c-bee0-4f44-a650-70367eee1355",
      "title": "Little Cocoon - Covent Garden",
      "img": "/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp",
      "location": "London",
      "description": "Light cosy room in a modern home. Cosy clean light room with single bed and Wi-Fi, Furniture in this room will be update to higher standards by the time of your stay.",
      "star": 4.5,
      "price": "$226/Night",
      "reviews": 68,
      "lat": 51.509598,
      "long": -0.136578
    },
    {
      "id": "661793ee-8572-40fd-abe2-bf25231704c7",
      "title": "Cosy Private Room in Family Home Central London",
      "img": "/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp",
      "location": "London",
      "description": "Bright airy Studio apartment located on the Ground floor, a beautiful self-contained garden studio, located in the heart of historic Highgate Village.",
      "star": 5.0,
      "price": "$388/Night",
      "reviews": 32,
      "lat": 51.510639,
      "long": -0.12248
    },
    {
      "id": "e38322e8-81ec-4fb9-946e-8ebcd16c9a2c",
      "title": "Light single room - London Islington Zone 2",
      "img": "/assets/search/44cb0de7-fa62-49e2-b4b8-68aed14373cb.webp",
      "location": "London",
      "description": "The apartment is equipped with a double bed and a double sofa bed and can comfortably accommodate 2 adults.",
      "star": 3.8,
      "price": "$284/Night",
      "reviews": 107,
      "lat": 51.503614,
      "long": -0.126729
    },
    {
      "id": "157dd34b-9c46-4372-8110-897140316d46",
      "title": "Prime Kensington Studio",
      "img": "/assets/search/97bc37a6-9a1b-4bb2-8564-771319b246fb.webp",
      "location": "London",
      "description": "The room has been newly decorated, Plenty of space for luggage, desk space for work.",
      "star": 3.0,
      "price": "$741/Night",
      "reviews": 18,
      "lat": 51.50722,
      "long": -0.140977
    },
    {
      "id": "4230513b-6044-4681-beb2-08d73e896163",
      "title": "Brand New, Spacious Double Room,Next to Station",
      "img": "/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp",
      "location": "London",
      "description": "Welcome! This is a convenient double room with large bed & ensuite bathroom. You'll love the friendly, relaxed flat & the workspace (incl. fast WiFi).",
      "star": 4.1,
      "price": "$102/Night",
      "reviews": 72,
      "lat": 51.515634,
      "long": -0.136578
    },
    {
      "id": "a54141a3-472a-4541-8fd3-83dc7a9492e7",
      "title": "Private Double room, Camden Town, London",
      "img": "/assets/search/dde44668-1df5-41b6-8f91-5051975c4865.webp",
      "location": "London",
      "description": "Bright and spacious double room ,Top floor of a 2 story house. Very close to Camden Market with its bars, restaurants, live music venues and cinemas.",
      "star": 2.9,
      "price": "$199/Night",
      "reviews": 52,
      "lat": 51.512057,
      "long": -0.125442
    }
  ]
  return searchResponse ;
};
