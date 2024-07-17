import React from 'react';
import kitsImage from './kits.jpg';
import shinPadsImage from './shinguards.jpg';
import glovesImage from './gkGloves.jpg';
import bootsImage from './boots.jpg';

function Kits() {
    return (
        <div className="container">
            <h1 className="my-4 text-center">History of Soccer Kits</h1>

            {/* Section for Jerseys */}
            <section className="my-5">
                <h2>Jerseys</h2>
                <img src={kitsImage} alt="Evolution of Soccer Jerseys" className="img-fluid"/>
                <p>
                    Soccer jerseys have undergone significant transformation since the sport's inception.<br/>
                    Originally, teams wore thick cotton shirts that were heavy and absorbed sweat, making them uncomfortable over the course of a game.<br/>
                    By the mid-20th century, lighter materials like polyester began to replace cotton, which helped players maintain endurance and comfort.<br/>
                    Today, jerseys are made from advanced synthetic materials that wick moisture away from the body, are lightweight, and feature dynamic designs that reflect team identity and sponsorships.<br/>
                </p>
            </section>

            {/* Section for Shorts */}
            <section className="my-5">
                <h2>Shorts</h2>
                <p>
                    Shorts in soccer have also seen a dramatic evolution.<br/>
                    In the early days of soccer, players wore long trousers or knickerbockers that covered the knees.<br/>
                    However, as the game increased in pace and intensity, the need for less restrictive clothing became apparent. By the 1930s, shorts that ended above the knee became standard.<br/> 
                    Modern soccer shorts are even shorter, providing maximum mobility and comfort, made from breathable, quick-drying fabrics that contribute to optimal performance.<br/>
                </p>
            </section>

            {/* Section for Socks */}
            <section className="my-5">
                <h2>Socks</h2>
                <p>
                    Soccer socks have always been an essential component of the kit, primarily for protecting players from the studs on boots and keeping shin guards in place.<br/> 
                    Early soccer socks were simple woolen stockings, but modern versions are knitted from blends of nylon, polyester, and cotton, which provide better cushioning, support, and durability.<br/> 
                    They also feature compression zones to enhance blood circulation and decrease muscle fatigue.<br/>
                </p>
            </section>

            {/* Section for Accessories */}
            <section className="my-5">
                <h2>Accessories</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Shin Pads</h3>
                        <img src={shinPadsImage} alt="Soccer Shin Pads" className="img-fluid"/>
                        <p>
                            Shin pads were introduced to soccer in the late 19th century to protect players from injuries during physical tackles.<br/> 
                            Initially, they were simple leather guards strapped around the lower legs.<br/> 
                            Todays shin pads are made from lightweight synthetic materials like polyurethane and carbon fiber, offering superior protection without sacrificing comfort or mobility.<br/>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Goalkeeper Gloves</h3>
                        <img src={glovesImage} alt="Goalkeeper Gloves" className="img-fluid"/>
                        <p>
                            Goalkeeper gloves are a relatively new addition to soccer, gaining popularity in the 1970s.<br/> 
                            Before then, goalkeepers played with bare hands, which limited their ability to effectively catch and parry high-speed and powerful shots.<br/> 
                            Modern gloves are equipped with latex foam for enhanced grip and padding to absorb impact, significantly improving goalkeepers' performance and safety.<br/>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Boots</h3>
                        <img src={bootsImage} alt="Soccer Boots" className="img-fluid"/>
                        <p>
                            Soccer boots have evolved from heavy leather shoes with metal toecaps and tacks for studs to sophisticated footwear designed to enhance speed, agility, and ball control.<br/> 
                            Contemporary soccer boots are lighter and tailor-made for different playing surfaces, incorporating synthetic materials that offer flexibility, comfort, and improved tactile sensation.<br/>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Kits;
