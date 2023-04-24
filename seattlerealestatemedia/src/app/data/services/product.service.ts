import { Injectable } from '@angular/core';
import { Product } from '../models/product.mode';

@Injectable({ providedIn: 'root' })
export class ProductService {
  listOfProducts: Product[] = [
    new Product(
      1,
      '<img src="../../../assets/cameraPlus.svg">',
      'Showcase',
      'Package',
      [
        '15 - 30 Edited Images',
        'Blue Skies Exteriors',
        'Clear Interior Window Views',
        'Natural Interior Lighting',
        'Manually edited',
        'Virtual Staging**',
      ],
      295,
      70,
      false
    ),
    new Product(
      2,
      '<img src="../../../assets/cameraMinus.svg">',
      'Essentials',
      'Package',
      [
        '15 - 30 Edited Images',
        'Blue Skies Exteriors',
        'Clear Interior Window Views',
        'Natural Interior Lighting',
        'Manually edited',
        'Virtual Staging**',
      ],
      240,
      40,
      false
    ),
    new Product(
      3,
      '<img src="../../../assets/drone.svg">',
      'Aerial',
      'Package',
      [
        '5-10 Aerial Photos',
        'Manually edited',
        'Location Indicator'
      ],
      125,
      1,
      false
    ),

    new Product(
      4,
      '<img src="../../../assets/3DTour.svg">',
      '3D Tour',
      '(MatterPort 3D)',
      [
        '12-hour turnaround',
        'Outdoor 360 Images',
        '3 Months Hosting Included'
      ],
      225,
      40,
      false
    ),
    new Product(
      6,
      '<img src="../../../assets/3DTour.svg">',
      'Zillow 3D',
      '(Zillow 3D)',
      [
        '12-hour turnaround',
        'Outdoor 360 Images',
        '3 Months Hosting Included'
      ],
      175,
      25,
      false
    ),
    new Product(
      7,
      '<img src="../../../assets/floorplan.svg">',
      'Floor Plan',
      'Package',
      [
        '2D Floor Plan ',
        'Estimated Dimensions '
      ],
      95,
      5,
      false
    ),
    new Product(
      8,
      '<img src="../../../assets/video.svg">',
      'Video Tour',
      '',
      [
        '1 Minute Aerial Video',
        'Multiple Angles',
        'MLS optimized',
        '48-hour turnaround',
        'Youtube Streaming',
        'Agent Details',
      ],
      295,
      100,
      false
    ),
    new Product(
      5,
      '<img src="../../../assets/sunset.svg">',
      'Twilight',
      'Package',
      [
        'Photos captured 30 minutes before sunset',
        'Taken on-site and requires a separate appointment.',
      ],
      125,
      1,
      false
    ),
    new Product(
     9,
     '<img src="../../../assets/slideshow.svg">',
      'Slideshow',
      'Tour',
      [
        '1-2 min long slide show',
        '5 second slides with music'
      ],
      105,
      1,
      false
    ),
    new Product(
      10,
      '<img src="../../../assets/social.svg">',
      'Social Media',
      'Tour',
      [
        '60 second social media video with music '
      ],
      195,
      1,
      false
    ),
    new Product(
      11,
      '<img src="../../../assets/user.svg">',
      'Agent Headshots',
      '',
      [
        '10 - 20 Edited Photos',
        'White / Gray Background',
        'MLS optimized',
        '48-hour turnaround'
      ],
      295,
      1,
      false
    ),
    new Product(
      12,
      '<img src="../../../assets/brand.svg">',
      'Lifestyle Branding',
      '',
      [
        '5 - 10 Edited Photos',
        'On Locatoin',
        'MLS optimized',
        '48-hour turnaround',
      ],
      295,
      1,
      false
    ),
    new Product(
      13,
      '<img src="../../../assets/stageing.svg">',
      'Virtual Staging',
      '',
      [
        'Call for Details',
        '',
      ],
      0,
      1,
      false
    ),
    new Product(
      14,
      '<img src="../../../assets/site.svg">',
      'Websites',
      '',
      [
        'Call for Details',
      ],
      195,
      1,
      false
    ),

  ];

  GetProducts(prodType: string) {
    if (prodType === 'showcase') {
      return this.listOfProducts.find((p) => p.id == 1);
    }
    return this.listOfProducts.find((p) => p.id == 2);
  }

  GetAllProducts() {
    return this.listOfProducts;
  }
}
