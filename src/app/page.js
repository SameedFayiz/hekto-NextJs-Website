import { Suspense } from "react";
import {
  FeaturedTypeOne,
  FeaturedTypeThree,
  FeaturedTypeTwo,
} from "./components/featured/featured";
import Loading from "./loading";
import { featuredTwoData, featuredThreeData } from "./api/featuredProducts";
const myFeaturedOne = [
  {
    id: 7,
    background: "bg-white",
    header: "Classic Solitaire",
    headerBreak: "Diamond Ring",
    description:
      "White Gold Plated Princess, Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    imgSrc: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
];

export default async function Home() {
  const myFeaturedThree = await featuredThreeData();
  const myFeaturedTwo = await featuredTwoData();
  return (
    <Suspense fallback={<Loading></Loading>}>
      <main className="flex flex-col min-h-screen w-full bg-white">
        <div>
          <FeaturedTypeOne data={myFeaturedOne}></FeaturedTypeOne>
          <FeaturedTypeTwo
            label={"Featured Products"}
            data={myFeaturedTwo}
          ></FeaturedTypeTwo>
          <FeaturedTypeThree
            label={"Latest Products"}
            data={myFeaturedThree}
          ></FeaturedTypeThree>
        </div>
      </main>
    </Suspense>
  );
}
