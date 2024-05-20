import { Avatar, Button, Divider } from "@arco-design/web-react";
import WhiteContainer from "src/Core/Components/WhiteContainer";

function LatestNews() {
    const news = [
        {
            avatar: (
                <Avatar size={48} className="bg-CGREEN">
                    A
                </Avatar>
            ),
            title: "王多鱼审核了图文内容： 2021年，你过得怎么样？",
            description:
                "新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生",
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CGREEN">
                    A
                </Avatar>
            ),
            title: "王多鱼审核了图文内容： 2021年，你过得怎么样？",
            description:
                "新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生",
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CGREEN">
                    A
                </Avatar>
            ),
            title: "王多鱼审核了图文内容： 2021年，你过得怎么样？",
            description:
                "新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生",
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CGREEN">
                    A
                </Avatar>
            ),
            title: "王多鱼审核了图文内容： 2021年，你过得怎么样？",
            description:
                "新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生",
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CGREEN">
                    A
                </Avatar>
            ),
            title: "王多鱼审核了图文内容： 2021年，你过得怎么样？",
            description:
                "新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生",
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CGREEN">
                    A
                </Avatar>
            ),
            title: "王多鱼审核了图文内容： 2021年，你过得怎么样？",
            description:
                "新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生",
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CGREEN">
                    A
                </Avatar>
            ),
            title: "王多鱼审核了图文内容： 2021年，你过得怎么样？",
            description:
                "新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生",
        },
        {
            avatar: (
                <Avatar size={48} className="bg-CGREEN">
                    A
                </Avatar>
            ),
            title: "王多鱼审核了图文内容： 2021年，你过得怎么样？",
            description:
                "新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生",
        },
    ];
    return (
        <WhiteContainer>
            <div className="flex flex-col justify-start">
                <div className="flex flex-row justify-between">
                    <h2>Latest News</h2>
                    <Button type="text">All</Button>
                </div>
                <div className="flex flex-col gap-4">
                    {news.map((newPost, index) => (
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-STANDARDMARGINANDPADDING">
                                {newPost.avatar}
                                <div className="flex flex-col gap-STANDARDMARGINANDPADDING">
                                    <span>{newPost.title}</span>
                                    <span>{newPost.description}</span>
                                </div>
                            </div>
                            {index < news.length - 1 && (
                                <Divider className="m-STANDARDMARGINANDPADDING" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </WhiteContainer>
    );
}

export default LatestNews;
