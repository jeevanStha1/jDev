import {SiReactquery} from "react-icons/si";
import {PiWebhooksLogoFill} from "react-icons/pi";
import {SlGameController} from "react-icons/sl";
import {DiIllustrator} from "react-icons/di";

export const services = [
    {
        id:1 ,
        title: 'Web Design',
        icon: <SiReactquery className="icon"/>,
        desc: 'sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
    },
    {
        id:2 ,
        icon: <PiWebhooksLogoFill className="icon"/> ,
        title: 'UI Design',
        desc: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
    },
    {
        id:3 ,
        icon: <SlGameController className="icon"/>,
        title: 'Game Design',
        desc: 'sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
    },
    {
        id:4 ,
        icon: <DiIllustrator className="icon"/>,
        title: 'Graphic Design',
        desc: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
    },
]