import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {

  questions: string = '';

  constructor(){
    this.questions = this.questions +  "<span class='question'>Do you practice social distancing during Covid-19?</span>";
    this.questions = this.questions +  "<br>Yes, I try to adhere to social distancing guidelines as much as possible. I prefer to be in the home alone during a shoot, but I understand that is not always possible. I always bring a mask.<br><br>";

    this.questions =  this.questions + "<span class='question'>My property has a sweeping view through the windows. Will you be able to capture this in your photos?</span>";
    this.questions = this.questions + "<br>Yes, definitely. For homes with views, we can choose the best time of day to photograph the home. Afternoon or two hours before the sunset is usually best.<br><br>";

    this.questions = this.questions + "<span class='question'>Do you use a wide angle lens to capture all of the room?</span>";
    this.questions = this.questions + "<br>I do use wide-angle lenses. However, it's not really possible to capture 'all' of a room in a normal photo. The Matterport 3D Walkthorugh or Zillow 3D Home would be able to showcase that type of view.<br><br>";

    this.questions =  this.questions + "<span class='question'>What is the turnover time for photos?</span>";
    this.questions =  this.questions + "<br>Real estate photos are delivered within 15-20 hours. Faster delivery may be possible with advance arrangement and for an additional fee.The images are delivered via an digital download link.<br><br>";

    this.questions =  this.questions + "<span class='question'>Do you provide drone photos?</span>";
    this.questions =  this.questions + "<br>Yes I do. Aerial photography and video allows you to showcase a listings uniques selling features with a bird's-eye view.<br><br>";

    this.questions =  this.questions + "<span class='question'>Drone photos: Are there limitations?</span>";
    this.questions =  this.questions + "<br>The FAA has strict restrictions as to where drones can be used. The address of the home being photographed will need to be checked in advance to make sure it's OK to use a drone in that area.<br>*Drone photos can not be taken in the rain or on very windy days.<br><br>";

    this.questions =  this.questions + "<span class='question'>What is your service area?</span>"
    this.questions =  this.questions + "<br>My standard area coverage is King County. To be more specific, Seattle, Kirkland, Bothell, Bellevue, Renton, Kent, Auburn, Maple Valley, Issaquah, Federal Way, and Sammamish. Shoots beyond the Seattle-Eastside area will be subject to an additional fee of $1 per mile, and or ferry fee, etc.<br><br>"

    this.questions =  this.questions + "<span class='question'>Is this the only type of photography you do?</span>";
    this.questions =  this.questions + "<br>Yes I do. Aerial photography and video allows you to showcase a listings uniques selling features with a bird's-eye view.<br><br>";

    this.questions =  this.questions + "<span class='question'>Do you provide drone photos?</span>";
    this.questions =  this.questions + "<br>While I dabble in portraiture but I specialize in real estate photography.<br><br>";

    this.questions =  this.questions + "<span class='question'>How many listing photos do I receive to put on the MLS?</span>";
    this.questions =  this.questions + "<br>The NWMLS limit is 40 images. You will receive between 20 - 40 photos for a standard property or more depending on size.<br><br>";

    this.questions =  this.questions + "<span class='question'>How long does a real estate shoot take?</span>";
    this.questions =  this.questions + "<br>A standard size home takes about 1 hour for photos. The time required is based on, services, the size of the home, the amount of existing light, etc. Once I know the size and scope of your property I can give you a better time estimate.<br><br>";

    this.questions =  this.questions + "<span class='question'>Do you offer 3D Matterport tours?</span>";
    this.questions =  this.questions + "<br>Yes I do. Matterport 3D Walkthrough and Zillow 3D Home are the future of the real esate.<br><br>";

    this.questions =  this.questions + "<span class='question'>Can I give these images to the builder / stager / anyone?</span>";
    this.questions =  this.questions + "<br>No. Property images are licensed for the purpose of marketing and listing the property for sale. Per US copyright law, photographers retain the copyright for all photographs produced. Additional licensing options are available. Please inquire.<br><br>";

    this.questions =  this.questions + "<span class='question'>What should I do to prepare my listing for being photographed?</span>";
    this.questions =  this.questions + "<br><ul><li>Landscaping - Suggestions: Mow the law, trim bushes and trees, remove unnecesary items addflowers</li> <li>Declutter - Suggestions: Remove extra furniture, appliances, boos, wall decorations and toys</li> <li>Brighten UP - Suggestions: Open up curtains and blinds, turn on all the lights and lamps.</li><li>Stow Away - Suggestions: Store personal items such as photos, documents, toiletries and clothing.</li><li>Clean Up - Suggestions: Keep the surfaces as clean as possibile such as countertops, tables, desks and floors.</li><li>Scehduling - Suggestions: Plan in such way nonesential persons and pets are off site duting the photoshoot time.</li><li>Help - Suggestions: Consider getting a helping hand from a clearning, stageing or landscape professional. </li></ul><br><br>";

    this.questions =  this.questions + "<span class='question'>Can you add or remove stuff from a image?</span>";
    this.questions =  this.questions + "<br>Everything should be as you want it for the final image prior to my arrival. While it's technically possible to add or remove almost anything in or out of an image, this can be much more complex and time consuming and it may lead to additional cost. Extreme editing requests may incur additional fees. Minor adjustments are done at no charge.<br><br>";

    this.questions =  this.questions + "<span class='question'>Is a bright, sunny day the best for taking photos?</span>";
    this.questions =  this.questions + "<br>Sunny days can be difficult for interior photography. The ideal weather for real estate interior photography is a day when it's lightly cloudy.<br><br>";

    this.questions =  this.questions + "<span class='question'>What is HDR photography?</span>";
    this.questions =  this.questions + "<br>HDR photography is a common style used by many real estate photographers. HDR stands for High Dynamic Range and the basic principle is to capture multiple exposures and to use image blending technology to create an image that has visible elements in the dark and bright areas.<br><br>";

    this.questions =  this.questions + "<span class='question'>Do you provide MLS (multiple listing service) photos?</span>";
    this.questions =  this.questions + "<br>For real estate listings I provide MLS-ready photos. To speed up the process, high-resolution photos for use with brochures, flyers, or other printed material are available up on request.<br><br>";

    this.questions =  this.questions + "<span class='question'>Do you provide home staging?</span>";
    this.questions =  this.questions + "<br>I do not offer home staging. If needed, I can put you in touch with a professional home stager.<br><br>";

  }

  ngOnInit(){

  }
}
