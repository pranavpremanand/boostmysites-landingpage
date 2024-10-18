import dubaiImg from "../assets/images/dubai.jpg";
import hongkongImg from "../assets/images/hongkong.jpg";
import bangkokImg from "../assets/images/bangkok.jpg";
import bangaloreImg from "../assets/images/bangalore.jpg";
import delhiImg from "../assets/images/delhi.jpg";

const offices = [
  {
    id: 1,
    img: dubaiImg,
    location: "Office number 13 Empire heights Business bay, Dubai, UAE",
  },
  {
    id: 2,
    img: hongkongImg,
    location:
      "The Hong Kong Club Building Level 16, The Hong Kong Club Building, No. 3A Chater Road, Central, Hong Kong",
  },
  {
    id: 3,
    img: bangaloreImg,
    location:
      "5th A Cross Rd, R.K Colony, Manjunath Colony, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka, India",
  },
  {
    id: 4,
    img: bangkokImg,
    location:
      "Bangkok: 15-17, 20, 25-27FI, T-One Building, 8 Soi Sukhumvit 40, Khwaeng Phra Khanong, Khlong Toei, Bangkok 10110, Thailand",
  },
  {
    id: 5,
    img: delhiImg,
    location:
      "Office number 309, Ambadeep building- 3rd floor, Kg marg Connaugt Place, Delhi 110001, India",
  },
];

const OurOffices = () => {
  return (
    <div className="text-secondary text-center">
      <h5 className="text-3xl font-medium uppercase">Our Offices</h5>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-12 sm:gap-10 mt-10">
        {offices.map((office) => (
          <div
            key={office.id}
            className="flex flex-col items-center justify-center gap-3 sm:gap-6"
          >
            <div className="w-full flex justify-center">
              <img src={office.img} alt="office" className="object-cover rounded-3xl max-h-[20rem]" />
            </div>
            <p className="leading-loose">&#x2022; {office.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOffices;
