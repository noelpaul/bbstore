export default function Listing({ data, title, url }) {
    return (
        <div>
            <style jsx>{`
                .all {
                    z-index: 1;
                }
                #title {
                    margin: 0 15rem; 
                }
                .array {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    margin: 1rem 5rem;
                    border: 1px solid #222;
                    border-radius: 15px;
                    padding: 1rem;
                    z-index: 3;
                }
                .type {
                    margin: 1rem 5rem;
                    color: #0070f3;
                }
                .item {
                    min-width: 0rem;
                    text-align: center;
                    border: 1px solid #111;
                    border-radius: 25px;
                    margin: 1rem;
                    padding: 1rem;
                    text-decoration: none;
                    color: #bbb;
                    z-index: 2;
                }
                .item:hover,
                .item:focus,
                .item:active {
                  color: #0070f3;
                  border-color: #0070f3;
                }
                .icon {
                    width: 75%;
                }
                .apptext {
                    text-align: center;
                    margin: 5px auto;
                    font-weight: normal;
                    font-size: 12px;
                }@media (max-width: 960px) {
                    .array {
                      padding: 1%;
                      margin: 1rem 2rem;
                  }
                  .item {
                      min-width: 0%;
                      margin: 1%;
                      padding: 1%;
                  }
                  }
                  @media (max-width: 640px) {
                    #title {
                      margin: 0 2rem;
                    }
                    .icon {
                      width: 30%;
                    }
                    .array {
                      margin: 1rem;
                      flex-wrap: unset;
                      flex-wrap: nowrap;

                    }
                    .item {
                        border-radius: 15px;
                        min-height: 30%;
                        padding: 3%;
                    }
                  }
                  @media (max-width: 480px) {
                    .item {
                        max-width: 30%;
                    }
                  }
            `}</style>
            <div className='all'>
                <div id='title'>
                    <h2>{title}</h2>
                    {/*<input type='text' placeholder='Search' className='search'/>*/}
                </div>
                <div className='top'>
                    <div className='array'>
                        {data.map(app => (
                            <a href={url + app.appid} className='item'>
                                <img src={'/' + app.icon} alt='Icon' className='icon' />
                                <h4 className='apptext'>{app.name.length < 15 ? (app.name) : (app.name.slice(0, 15) + `..`)}</h4>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}