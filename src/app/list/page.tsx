import { HeadFootLayout } from "@/components/common/HeadFootLayout";
import { Musics } from "@/components/list/music";

export default function List() {
  const data = [
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 1,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 2,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 3,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 4,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 5,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 6,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 7,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 8,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 9,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 10,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 11,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 12,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 13,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 14,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 15,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 16,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 17,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 18,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 19,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 20,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 21,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 22,
    },
    {
      title: "파이팅 해야지 (feat.이영지)",
      artist: "부석순 (SEVENTEEN)",
      image:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
      id: 23,
    },
  ];

  return (
    <HeadFootLayout title="LIST">
      <div className="flex flex-col">
        {data.map((music, index) => (
          <Musics key={index} music={music} />
        ))}
      </div>
    </HeadFootLayout>
  );
}
