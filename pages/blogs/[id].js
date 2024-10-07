import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogdata.find((post) => post.id === parseInt(id));

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="LATEST UPDATES / JANUARY 12, 2022" /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="Maximizing Efficiency - A Guide to Streamlining Your Development Workflow." />
              <p className="desc-p">
                In today’s competitive tech landscape, staying ahead requires
                more than just coding skills. Efficient project management,
                streamlined workflows, and an understanding of modern frameworks
                are key to success. At our company, we prioritize helping
                developers and teams enhance their productivity by leveraging
                the latest tools and strategies in web development.
              </p>
              <p className="desc-p">
                Whether you are new to programming or an experienced developer,
                adopting the right practices can significantly impact your
                project outcomes. We provide insights on how to optimize
                performance, avoid common pitfalls, and reduce unnecessary
                complexity in your coding process.
              </p>
              <p className="desc-p">
                By focusing on clean code, collaborative development environments, and adopting efficient task management software, you can create better products in less time, allowing your team to focus on innovation and client satisfaction.
              </p>
            </div>
          </div>
          <Banner />

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="Improving Team Collaboration with Modern Tools" />
              <p className="desc-p">
                Collaboration is at the heart of successful software development. With platforms like GitHub, Slack, and Jira, teams can easily manage projects, communicate, and maintain a clear roadmap. Here at [Company Name], we integrate these tools into our processes, ensuring smooth communication between developers, designers, and clients.
              </p>
              <p className="desc-p">
                Our approach fosters an environment where teams can thrive,
                ensuring that every project is delivered on time and within
                budget. The key to this success lies in embracing a culture of
                continuous learning and improvement.
              </p>
              <p className="desc-p">
                We also offer training and consultation services to help other
                companies adopt these practices, allowing them to maximize their
                team’s potential and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
