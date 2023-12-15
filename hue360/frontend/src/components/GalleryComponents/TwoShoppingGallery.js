import { useState, useEffect } from "react";
import '../../css/newShopStyles.css';

const data= [
  {
      "_id": {
        "$oid": "6539fab0f681e6ac89e86690"
      },
      "alt": "Large painting of people in a crowded park, brushstrokes are dots",
      "data-gtm-event": "A Sunday on La Grande Jatte — 1884",
      "href": "https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884?page=1",
      "src": "https://www.artic.edu/iiif/2/88d65792-afb3-c90b-56d7-6f95967fa731/full/600,/0/default.jpg",
      "subtitle": "Georges Seurat",
      "title": "A Sunday on La Grande Jatte — 1884, 1884/86",
      "id": 0,
      "Year": 1884,
      "century": 19
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e86691"
      },
      "alt": "Strangers in a brightly lit diner, seen from shadowy exterior",
      "data-gtm-event": "Nighthawks",
      "href": "https://www.artic.edu/artworks/111628/nighthawks?page=1",
      "src": "https://www.artic.edu/iiif/2/39d43108-e690-2705-67e2-a16dc28b8c7f/full/600,/0/default.jpg",
      "subtitle": "Edward Hopper",
      "title": "Nighthawks, 1942",
      "id": 1,
      "Year": 1942,
      "century": 20
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e86692"
      },
      "alt": "A work made of oil on beaver board.",
      "data-gtm-event": "American Gothic",
      "href": "https://www.artic.edu/artworks/6565/american-gothic?page=1",
      "src": "https://www.artic.edu/iiif/2/d02e0079-8e82-733e-683c-cb83a387ee5e/full/600,/0/default.jpg",
      "subtitle": "Grant Wood",
      "title": "American Gothic, 1930",
      "id": 2,
      "Year": 1930,
      "century": 20
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e86693"
      },
      "alt": "Painting of bedroom, blue walls, green window, tan bed, red bedding",
      "data-gtm-event": "The Bedroom",
      "href": "https://www.artic.edu/artworks/28560/the-bedroom?page=1",
      "src": "https://www.artic.edu/iiif/2/6ad8f7d6-c8a9-5216-2664-09bd5691c6ed/full/600,/0/default.jpg",
      "subtitle": "Vincent van Gogh",
      "title": "The Bedroom, 1889",
      "id": 3,
      "Year": 1889,
      "century": 19
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e86694"
      },
      "alt": "Jewel toned painting of black men and women dancing in club",
      "data-gtm-event": "Nightlife",
      "href": "https://www.artic.edu/artworks/117266/nightlife?page=1",
      "src": "https://www.artic.edu/iiif/2/3a8b3bbd-9bd2-43b5-aec2-f22b6d55cdf1/full/600,/0/default.jpg",
      "subtitle": "Archibald John Motley Jr.",
      "title": "Nightlife, 1943",
      "id": 4,
      "Year": 1943,
      "century": 20
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e86695"
      },
      "alt": "Blue painting of old man with tan guitar looking down in despair.",
      "data-gtm-event": "The Old Guitarist",
      "href": "https://www.artic.edu/artworks/28067/the-old-guitarist?page=1",
      "src": "https://www.artic.edu/iiif/2/869a7319-306e-ca90-1732-cb614199f3df/full/600,/0/default.jpg",
      "subtitle": "Pablo Picasso",
      "title": "The Old Guitarist, late 1903–early 1904",
      "id": 5,
      "Year": 1903,
      "century": 20
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e86698"
      },
      "alt": "Painting of the Virgin Mary ascending to heaven amongst multitude of angels.",
      "data-gtm-event": "The Assumption of the Virgin",
      "href": "https://www.artic.edu/artworks/87479/the-assumption-of-the-virgin?page=1",
      "src": "https://www.artic.edu/iiif/2/9feeeedc-359f-52ea-7c08-c8589549fc7b/full/600,/0/default.jpg",
      "subtitle": "Domenico Theotokópoulos, called El Greco",
      "title": "The Assumption of the Virgin, 1577–79",
      "id": 8,
      "Year": 1577,
      "century": 16
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e8669c"
      },
      "alt": "Painting of four nude women composed of geometric shapes, against patterned background.",
      "data-gtm-event": "Bathers by a River",
      "href": "https://www.artic.edu/artworks/79307/bathers-by-a-river?page=1",
      "src": "https://www.artic.edu/iiif/2/2f2fb68f-7a92-5805-deed-a57c5aaec251/full/600,/0/default.jpg",
      "subtitle": "Henri Matisse",
      "title": "Bathers by a River, March 1909/10, May–November 1913, and early spring 1916–October (?) 1917",
      "id": 12,
      "Year": 1909,
      "century": 20
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e8669e"
      },
      "alt": "Wooden sculpture of seated king surrounded by family",
      "data-gtm-event": "Veranda Post of Enthroned King and Senior Wife (Opo Ogoga)",
      "href": "https://www.artic.edu/artworks/102611/veranda-post-of-enthroned-king-and-senior-wife-opo-ogoga?page=1",
      "src": "https://www.artic.edu/iiif/2/cb094c5a-79b4-4eaf-f05b-4ab73f9e2fb9/full/600,/0/default.jpg",
      "subtitle": "Olowe of Ise",
      "title": "Veranda Post of Enthroned King and Senior Wife (Opo Ogoga), 1910/14",
      "id": 14,
      "Year": 1910,
      "century": 20
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e8669f"
      },
      "alt": "Shades of blue circular pieces make up the body of the work with similar pieces in the top right in red, orange and yellow. The white ground can be seen peeking through.",
      "data-gtm-event": "Starry Night and the Astronauts",
      "href": "https://www.artic.edu/artworks/129884/starry-night-and-the-astronauts?page=1",
      "src": "https://www.artic.edu/iiif/2/662912d3-e51c-0572-f298-2e8a43b4b21a/full/600,/0/default.jpg",
      "subtitle": "Alma Thomas",
      "title": "Starry Night and the Astronauts, 1972",
      "id": 15,
      "Year": 1972,
      "century": 20
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e866a0"
      },
      "alt": "Blue and yellow target or bullseye on a red ground.",
      "data-gtm-event": "Target",
      "href": "https://www.artic.edu/artworks/229351/target?page=1",
      "src": "https://www.artic.edu/iiif/2/c4276275-66b8-d931-860e-7cfd16512218/full/600,/0/default.jpg",
      "subtitle": "Jasper Johns",
      "title": "Target, 1961",
      "id": 16,
      "Year": 1961,
      "century": 20
    },
    {
      "_id": {
        "$oid": "6539fab0f681e6ac89e866a1"
      },
      "alt": "A work made of enamel on canvas.",
      "data-gtm-event": "Untitled",
      "href": "https://www.artic.edu/artworks/229393/untitled?page=1",
      "src": "https://www.artic.edu/iiif/2/12a1920e-3b7a-a87d-1b9d-5574fbb02118/full/600,/0/default.jpg",
      "subtitle": "Tanaka Atsuko",
      "title": "Untitled, 1964",
      "id": 17,
      "Year": 1964,
      "century": 20
    },

]

export default function ShoppingGallery2() {
  let a=true;
  const  handleImageError = () => {
    a=false;
  };

  const [arts, setArts] = useState([])

	useEffect(()=>{
		setArts(data);
	}, [])

  const handleMail = (e) => {
    e.preventDefault();
  }

  return (
    <section className="grid-container">
        {
            arts.map((art)=>{
            return  <div className="grid-item">
              {a===true ? <img src={art.src} className="" alt="" onError={() => handleImageError}/>:<></>}
                        {/* <img src={art.src} className="" alt="" onError={() => handleImageError}/> */}
                        {/* <div className="">
                            <h5 className="">Card title</h5>
                        </div> */}
                    </div>
            })
        }
    </section>
  )
}