"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Tatya Vinchu",
    avatar: "T",
    title: "Gangster",
    description: "This is the best app I have used ever!",
  },
  {
    name: "Zagdya Ramoshi",
    avatar: "Z",
    title: "Sr Gangster",
    description: "This is the best app I use while kidnapping peoples!",
  },
  {
    name: "Kavthya Mahakal",
    avatar: "K",
    title: "CEO, Kavthya gang pvt ltd",
    description: "Aaaa, Thhoooo$$ hhahhaha great appp, great appp...",
  },
  {
    name: "Takloo Haiwaaan",
    avatar: "T",
    title: "Head of Haiwaan Gang",
    description:
      "ahh hoooo haiii haiiii haiiii,, awesome, awesome, awesome app!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 ">
      <h2 className="text-center text-4xl text-yellow-300 font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="">
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-center text-orange-600"> developed by Pandit</p>
      </div>
    </div>
  );
};
