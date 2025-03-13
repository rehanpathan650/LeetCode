import { Card } from "./Card"
import { Feed } from "./Feed"

export const Hero = () => {
    return <div className="px-30 mt-5">
        <div className="flex gap-12 w-250">
            <div>
                <Feed image={"trophy.avif"}
                    time={"in 3 days"}
                    title={"Join our Contest Biweekly Contest 152"}
                />
                <Feed image={"trophy.avif"}
                    time={"in 2 days"}
                    title={"Join our Contest Weekly Contest 441"}
                />
                <Feed
                    image={"anonymous.png"}
                    time={"2 days ago"}
                    title={"LeetCode posted 🚀 2025 Hiring Prep Sprint – Big Tech Interview Challenge"}
                    description={"Are you ready for your technical interviews? We’ve selected interview questions from top trending companies to help you practice effectively. 📅 Event Time March 10, 2025 – March 30, 2025..."}
                />
                <Feed
                    image={"anonymous.png"}
                    time={"2 days ago"}
                    title={"LeetCode posted 🚀 2025 Hiring Prep Sprint – Big Tech Interview Challenge"}
                    description={"Are you ready for your technical interviews? We’ve selected interview questions from top trending companies to help you practice effectively. 📅 Event Time March 10, 2025 – March 30, 2025"}
                />
                <Feed
                    image={"anonymous.png"}
                    time={"2 days ago"}
                    title={"LeetCode posted 🚀 2025 Hiring Prep Sprint – Big Tech Interview Challenge"}
                    description={"Are you ready for your technical interviews? We’ve selected interview questions from top trending companies to help you practice effectively. 📅 Event Time March 10, 2025 – March 30, 2025"}
                />
                <Feed
                    image={"anonymous.png"}
                    time={"5 hours ago"}
                    title={"An anonymous user posted Avalara Senior Software Engineer (SDE-2)"}
                    description={"Hi Leetcode family, Education: Post-Graduation from Top NIT Years of Experience: 3 years 9 months Prior Experience: SDE2 at MNC Current Comp:- 17 Fixed Date of the Offer: Feb 2025..."}
                />
                <Feed
                    image={"anonymous.png"}
                    time={"5 hours ago"}
                    title={"An anonymous user posted Avalara Senior Software Engineer (SDE-2)"}
                    description={"Hi Leetcode family, Education: Post-Graduation from Top NIT Years of Experience: 3 years 9 months Prior Experience: SDE2 at MNC Current Comp:- 17 Fixed Date of the Offer: Feb 2025..."}
                /> <Feed
                    image={"anonymous.png"}
                    time={"5 hours ago"}
                    title={"An anonymous user posted Avalara Senior Software Engineer (SDE-2)"}
                    description={"Hi Leetcode family, Education: Post-Graduation from Top NIT Years of Experience: 3 years 9 months Prior Experience: SDE2 at MNC Current Comp:- 17 Fixed Date of the Offer: Feb 2025..."}
                /> <Feed
                    image={"anonymous.png"}
                    time={"5 hours ago"}
                    title={"An anonymous user posted Avalara Senior Software Engineer (SDE-2)"}
                    description={"Hi Leetcode family, Education: Post-Graduation from Top NIT Years of Experience: 3 years 9 months Prior Experience: SDE2 at MNC Current Comp:- 17 Fixed Date of the Offer: Feb 2025..."}
                />
                <Feed
                    image={"anonymous.png"}
                    time={"2 days ago"}
                    title={"LeetCode posted 🚀 2025 Hiring Prep Sprint – Big Tech Interview Challenge"}
                    description={"Are you ready for your technical interviews? We’ve selected interview questions from top trending companies to help you practice effectively. 📅 Event Time March 10, 2025 – March 30, 2025"}
                />
            </div>
            <div className="flex gap-5">
            <div className="min-h-screen border-l-1 text-gray-100 py-5">
            </div>
                <Card />
            </div>
        </div>
    </div>
}