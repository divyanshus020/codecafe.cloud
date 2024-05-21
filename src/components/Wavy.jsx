
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";

export function WavyBackgroundDemo() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <div className="header">
                <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="MongoDB" className="logo mongodb w-20" />
                <img src="https://assets-global.website-files.com/62038ffc9cd2db4558e3c7b7/623b38335c7b880db9eff54d_react.svg" alt="React" className="logo react w-20" />
                <img src="https://camo.githubusercontent.com/431b2abbf11318c3175fcfb37d07ba916d53e5922811a5741dbb298cb304f0e7/68747470733a2f2f7261772e6769746875622e636f6d2f436972636c6543492d5075626c69632f63696d672d6e6f64652f6d61696e2f696d672f636972636c652d6e6f64656a732e7376673f73616e6974697a653d74727565" alt="Node.js" className="logo nodejs w-20" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEX////8/Pz09PT19fX4+Pjd3d2ampoAAAAzNDWoqKno6Oh0dHRcXFzIycm5ubktLi4hIiN7e3yLi4tmZ2fi4uI9Pj7S0tIHCQuzs7NJSkru7u6goKB+f3/W1taNjo69vb1PT1BsbW0VFRc3ODhehn9TAAAA30lEQVR4Ad3QhXHEMBBA0W8QmAVmTq7/HjOeDdSQewNiLfBukjRNM4A0TeCR/0wSpY0xtiihMgWPsraNnLWd8yFEE3vyOIwAeprhMQ5Lm8O6uT3hWPwKjQspj+zsLvlBuwNmV1DaukS+t3sqs8MWkAU7ejMiGnMhkjoCqnZmQ3CZPwM8Hy/8Hd7xF7BWzjQIxulCsJaQbG6r7xXR2zNHrn1s0AwhUdNPjunejTLxTlHedS89EOMwFAkobzR4ewFptRyI9tPY18uZkFIYzUO5akWU22BflYKx2xGX1Rn/yxf+uwzyBt/vSwAAAABJRU5ErkJggg==" alt="Express.js" className="logo expressjs rounded-[100%]" />
            </div>
            <p className="text-2xl md:text-4xl lg:text-6xl text-Black font-bold inter-var text-center">
                MERN Stack Course Overview by CodeCafe
            </p>
        </WavyBackground>
    );
}

export default WavyBackgroundDemo;