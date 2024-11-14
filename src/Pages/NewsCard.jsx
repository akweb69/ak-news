import { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const NewsCard = ({ news }) => {
    const { author, details, image_url, others_info, rating, thumbnail_url, title, total_view, _id } = news;
    const [showMore, setShowMore] = useState(false);

    // Ensure rating is a number and provide a default value of 0 if undefined
    const numericRating = parseFloat(rating.number) || 0;
    console.log(rating)

    const toggleDetails = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="w-full border rounded-lg mb-5">
            <div className="flex justify-between bg-cyan-50 items-center">
                <div className="flex gap-2 items-center p-2">
                    <div className="w-10 rounded-full">
                        <img className="w-full rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <h1>{author.name}</h1>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 pr-4">
                    <CiBookmark className="cursor-pointer" />
                    <CiShare2 className="cursor-pointer" />
                </div>
            </div>
            {/* card body */}
            <div className="p-4">
                <h1 className="text-xl md:text-2xl font-semibold mb-4">{title}</h1>
                <div>
                    <img className="w-full" src={image_url} alt="" />
                    <div>
                        <h1 className="text-base md:text-lg mt-4 text-justify">
                            {showMore ? details : `${details.split(" ").slice(0, 50).join(" ")}...`}
                        </h1>
                        <button
                            onClick={toggleDetails}
                            className="text-blue-500 hover:underline"
                        >
                            {showMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between items-center">
                    <div className=" flex gap-2 items-center">
                        <StarRatings
                            rating={numericRating}
                            starRatedColor="gold"
                            numberOfStars={5}
                            starDimension="24px"
                            starSpacing="2px"
                        />
                        <p className="text-lg font-semibold text-amber-500">{rating.number}</p>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-semibold text-purple-950">
                        <FaEye></FaEye>
                        <h1 className="">{total_view}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
