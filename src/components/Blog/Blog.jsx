import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='bg-sky-400 text-black p-28'>

            <div className='text-5xl text-center my-10'>Blog Page!!</div>
            <div>
                <h2 className='text-2xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h2>
                <p>Access Token: A momentary credential that is given to a client upon authentication and permits access to particular server resources.
                    Refresh Token: An access token-issued persistent credential that may be used to get a new token without having to re-authenticate.
                    For speedy and safe access, access tokens are kept in memory or as HTTP-only cookies.

                    To avoid exposure, refresh tokens should be securely saved, frequently in encrypted HTTP-only cookies.
                    API requests are authenticated and authorized using access tokens.
                    When the first access token expires, refresh tokens offer a mechanism to get fresh ones.
                    To securely store tokens and defend against XSS attacks, clients should adhere to standard practices.
                    On the client-side, token storage is frequently accomplished using cookies, encrypted storage, or memory.
                    Refresh tokens have longer lives than access tokens, which are time-limited.
                    Each token</p>

            </div>
            <div className='mb-10'>
                <h2 className='text-2xl '>Compare SQL and NoSQL databases?
                </h2>
                <p>Data-based structured query language (SQL) is defined and manipulated by SQL databases. For unstructured data, a NoSQL database has a dynamic schema. Data can be arranged as a key-value store, a document-oriented database, a column-oriented database, or a graph-based database. <br></br>

                    <br />

                    Table-based SQL databases, on the other hand, Key-value pairs, document-based, graph, or wide-column stores are the four types of NoSQL databases. This makes relational SQL databases a better choice for legacy systems that were designed for a relational structure or for applications that need multi-row transactions, such an accounting system.
                </p>
            </div>
            <div>

                <h2 className='text-2xl'>What is express js? What is Nest JS?</h2>

                <p>Express.js is a minimal Node.js web application framework that makes managing HTTP requests easier. Express.js is built upon by NestJS, which offers a scalable, opinionated framework with extra functionality for creating enterprise-grade applications.</p>
            </div>
            <div>
                <h2 className='text-2xl'>What is MongoDB aggregate and how does it work?</h2>
                <p>
                    Advanced data aggregation and analysis are possible with the help of MongoDB aggregate, a potent query function. It operates by filtering, grouping, sorting, and altering data from a MongoDB collection via a number of phases of processing. Aggregation pipelines may be used to carry out intricate computations and produce valuable insights from huge datasets. They are built utilizing a fluid interface.
                </p>

            </div>
            <div></div>
        </div>
    );
};

export default Blog;