import python from "../assets/python-icon.svg"
import html from "../assets/html-icon.svg"
import javasc from "../assets/javascript-icon.svg"
import sqlLite from "../assets/SQLite.svg"
import mysql from "../assets/mysql-icon.svg"
import django from "../assets/django-icon.svg"
import reacticon from "../assets/react-icon.svg"
import tailwind from "../assets/tailwind-icon.svg"
import xd from "../assets/XD-icon.svg"
import figma from "../assets/Figma-icon.svg"
import docker from "../assets/Docker-icon.svg"
import git from "../assets/git-icon.svg"
import gitlab from "../assets/gitlab-icon.svg"
import jira from "../assets/jira-icon.svg"
import photoshop from "../assets/Photoshop-icon.svg"
import s3 from "../assets/s3-icon.svg"
import vercel from "../assets/vercel-icon.svg"
import bootstrap from "../assets/bootstrap.png"
import postman from "../assets/Postman-icon.svg"
import aws from "../assets/aws-icon.svg"
import bitbucket from "../assets/BitBucket-icon.svg"
import canva from "../assets/Canva-icon.svg"
import ibm from "../assets/ibm-icon.svg"
import postgress from "../assets/postgress.svg"
import node from "../assets/nodejs-icon.svg"
import comfy from "../assets/comfylogo.png"
import Numpy from "../assets/numpy.svg"
import matplot from "../assets/matplotlib-1.svg"
import Pytorch from "../assets/pytorch-1.webp"
import scikit from "../assets/scikit.png"
import DL from "../assets/deep-learning.png"
import BERT from "../assets/BERT.png"
import LLM from "../assets/LLM.png"
import Hugging from "../assets/huggingface-2.svg"
import Transformers from "../assets/transformers.png"
import GPT from  "../assets/chatgpt-1.svg"
import Groq from "../assets/groq.png"
import Rust from "../assets/rust.png"
import Solidity from  "../assets/solidity.png"
import chainlink from "../assets/chainlink.png"
import ether from "../assets/ethers.png"
import token from "../assets/tokans.jpeg"
import infura from "../assets/infura.jpg"
import nft from "../assets/nft.png"
import ico from "../assets/ico.jpg"

const TechStacks = () => {
    return (
        <div className='techStack-container'>
            <div className='techStack-main'>
                <div className='techStack-head'>
                    <h1 className="title">TECH STACKS</h1>
                </div>
                <div className='techStack-content'>
                    <div className='techStack-content1'>
                        <div className='techStack-content1-col'>
                            <h1>Programming <br /> languages</h1>
                            <div className='techStack-techs'>
                                <img src={python} alt='python' />
                                <p>Python</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={javasc} alt='JavaScript' />
                                <p>JavaScript</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>FRONTEND</h1>
                            <div className='techStack-techs'>
                                <img src={reacticon} alt='React' />
                                <p>React.js</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={html} alt='HTML & CSS' />
                                <p>HTML & CSS</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={tailwind} alt='TailwindCSS' />
                                <p>TailwindCSS</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={bootstrap} alt='Bootstrap' />
                                <p>Bootstrap</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>BACKEND</h1>
                            <div className='techStack-techs'>
                                <img src={django} alt='django' />
                                <p>Django</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={node} alt='django' />
                                <p>Nodejs</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={Rust} alt='django' />
                                <p>Rust</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>DATABASES</h1>
                            <div className='techStack-techs'>
                                <img src={mysql} alt='mysql' />
                                <p>MySQL</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={sqlLite} alt='mdb' />
                                <p>SQLite</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={postgress} alt='postgress' />
                                <p>PostgresSQL</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>TESTING</h1>
                            <div className='techStack-techs'>
                                <img src={jira} alt='jira' />
                                <p>Jira</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>services</h1>
                            <div className='techStack-techs'>
                                <img src={vercel} style={{color:"white"}} alt='Vercel' />
                                <p>Vercel</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={ibm} alt='IBM Cloud' />
                                <p>IBM Cloud</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={aws} alt='AWS' />
                                <p>AWS</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={s3} alt='s3' />
                                <p>S3 Bucket</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>tools</h1>
                            <div className='techStack-techs'>
                                <img src={git} alt='GIT' />
                                <p>Git</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={docker} alt='Docker' />
                                <p>Docker</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={gitlab} alt='GitLab' />
                                <p>GitLab</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={bitbucket} alt='Bit Bucket' />
                                <p>Bit Bucket</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={postman} alt='postman' />
                                <p>Postman</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>design</h1>
                            <div className='techStack-techs'>
                                <img src={figma} alt='figma' />
                                <p>Figma</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={photoshop} alt='Photoshop' />
                                <p>Photoshop</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={xd} alt='xd' />
                                <p>Adobe XD</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={canva} alt='canva' />
                                <p>Canva</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={comfy} alt='canva' />
                                <p>Comfy UI</p>
                            </div>
                        </div>
                        <div className='techStack-content1-col'>
                            <h1>AI</h1>
                            <div className='techStack-techs'>
                                <img src={Numpy} alt='figma' />
                                <p>NumPy</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={matplot} alt='Photoshop' />
                                <p>Matplot</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={Pytorch} alt='xd' />
                                <p>Pytorch</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={scikit} alt='canva' />
                                <p>Sci-Kit</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={DL} alt='Deep learning' />
                                <p>Deep Learning</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={BERT} alt='canva' />
                                <p>BERT</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={GPT} alt='canva' />
                                <p>GPT</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={Transformers} alt='canva' />
                                <p>Transformers</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={LLM} alt='canva' />
                                <p>LLM</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={Hugging} alt='canva' />
                                <p>Hugging Face</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={Groq} alt='canva' />
                                <p>Groq</p>
                            </div>
                        </div>
                        <div className='techStack-content1-col'>
                            <h1>Blockchain</h1>
                            <div className='techStack-techs'>
                                <img src={token} alt='Tokanomics' />
                                <p>Tokenomics</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={ico} alt='ICO' />
                                <p>ICO</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={nft} alt='NFTs' />
                                <p>NFT&#39;s</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={Solidity} alt='Solidity' />
                                <p>Solidity</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={infura} alt='Infura' />
                                <p>Infura</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={chainlink} alt='InfChainlink Oracleura' />
                                <p>Chainlink Oracle</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={ether} alt='Infura' />
                                <p>Ether&#39;s / Web3</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default TechStacks