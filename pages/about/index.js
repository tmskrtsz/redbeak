import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Title from '../../components/Title'

export default class About extends React.Component{
    render(){
        return (
            <div>
                <Helmet
                    title={config.siteTitle + 'About Him'}
                    meta={[
                        {"name": "description", "content": "About Tamás Kertész, the person behind this wonderful portfolio"},
                        {"name": "keywords", "content": "portfolio, about, redbeak, tamas, kertesz"},
                    ]}
                />
                <section className="about">
                    <Title titleName="about him" />
                    <div className="flying-balls">
                        <span className="ball-1"></span>
                        <span className="ball-2"></span>
                        <span className="ball-3"></span>
                        <span className="ball-4"></span>
                        <span className="ball-5"></span>
                    </div>
                    <article>
                        <p>Tamás Kertész is primarily a Front-End designer & developer who <span className="strike">absolutely</span> enjoys taking great ideas from concept to product. To that effect, he's been heavily involved in <a href="http://tampere.demola.net" target="_blank">Demola</a> projects, such as <Link to={prefixLink('/campus-compass/')}>Campus Compass</Link>, <Link to={prefixLink('/jobfairy/')}>jobfairy</Link> and Blockchain: The Trust Machine. He likes to dabble into JavaScript and Python development and is interested in the latest emerging libraries such as ReactJS and Vue.js. Tamás also has a penchant for playing guitar and bass, coffee, romantic walks on the beach and talking about himself in third person. What a <span className="dick">dick</span>.</p>
                        <p>But seriously.</p><p>I am based in sunny Tampere, Finland.</p> 
                        <p>Currently bullying pixels at <a href="https://www.anders.fi" target="_blank">Anders Innovations</a> and studying Interactive Media at TAMK.</p>
                        <p> 
                        <a className="button" href="/files/Tamas_Kertesz_CV.pdf" alt="CV in PDF format">Download my CV</a>
                        </p>
                    </article>
                </section>
                <section className="skills">
                    <Title titleName="skills" />
                    <article>
                        <div className="about--group">
                            <h6>Development</h6>
                            <ul>
                                <li>HTML, Pug, HAML, Twig</li>
                                <li>CSS, Stylus</li>
                                <li>JavaScript (basic), jQuery (intermediate)</li>
                                <li>ReactJS (basic)</li>
                                <li>Python (basic)</li>
                                <li>Bootstrap, Responsive Design</li>
                            </ul>
                        </div>
                        <div className="about--group">
                            <h6>Design</h6>
                            <ul>
                                <li>Illustrator, Photoshop, Affinity Designer, Adobe Xd</li>
                                <li>InvisionApp, Wireframing</li>
                            </ul>
                        </div>
                        <div className="about--group">
                            <h6>Tools</h6>
                            <ul>
                                <li>Gulp, Webpack (basic, documentation pls)</li>
                                <li>Harp.js, Kirby, Nginx, WordPress</li>
                                <li>Git, SSH, MySQL</li>
                                <li>Windows, Ubuntu, elementary OS, Arch, OS X</li>
                            </ul>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}
