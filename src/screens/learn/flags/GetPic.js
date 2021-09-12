import Maori from "./Maori.svg"
import Para from "./Paraguay.jpg"
import Aboriginal from "./Aboriginal.png"
import Torres from "./Torres.png"
import China from "./China.png"
import India from "./India.png"
import Japan from "./Japan.png"
import SKorea from "./SKorea.png"
import Turkey from "./Turkey.png"
import Romani from "./Romani.png"

export default function GetPic(name) {
    if (name === "Andaijin") {
        return Aboriginal
    } else if (name === "Maori") {
        return Maori
    } else if (name === "Guarani") {
        return Para
    } else if (name === "Yumplatok") {
        return Torres
    } else if (name === "Ainu") {
        return Japan
    } else if (name === "Mulao") {
        return China
    } else if (name === "Khamba") {
        return India
    } else if (name === "Laz") {
        return Turkey
    } else if (name === "Jeju") {
        return SKorea
    } else if (name === "Romani") {
        return Romani
    }
}